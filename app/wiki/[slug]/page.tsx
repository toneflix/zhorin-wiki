import { notFound } from 'next/navigation'
import type { CSSProperties } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getWikiEntryBySlug, getRelatedEntries, getAllWikiEntries } from '@/lib/wiki'
import { ArticleHeader } from '@/components/wiki/article-header'
import { BreadcrumbNav } from '@/components/wiki/breadcrumb-nav'
import { RelatedArticles } from '@/components/wiki/related-articles'

type MarkdownNode = {
  type: string
  children?: MarkdownNode[]
  value?: string
  url?: string
}

type ImageOptions = {
  align?: 'left' | 'right' | 'center'
  width?: string
  height?: string
}

const IMAGE_ATTRIBUTE_PATTERN = /^\s*\{([^}]*)\}/
const ATTRIBUTE_PATTERN = /([a-zA-Z][\w-]*)=(?:"([^"]*)"|'([^']*)'|([^\s}]+))/g

function visitMarkdownNode(node: MarkdownNode, visitor: (node: MarkdownNode) => void) {
  visitor(node)
  node.children?.forEach((child) => visitMarkdownNode(child, visitor))
}

function normalizeDimension(value: string | undefined) {
  if (!value) return undefined
  const trimmed = value.trim()

  if (/^\d{1,4}$/.test(trimmed)) {
    return `${trimmed}px`
  }

  if (/^\d{1,4}(px|rem|em|%)$/.test(trimmed)) {
    return trimmed
  }

  return undefined
}

function parseImageOptions(value: string) {
  const options: ImageOptions = {}

  for (const match of value.matchAll(ATTRIBUTE_PATTERN)) {
    const key = match[1]
    const rawValue = match[2] ?? match[3] ?? match[4]

    if (key === 'align' && ['left', 'right', 'center'].includes(rawValue)) {
      options.align = rawValue as ImageOptions['align']
    }

    if (key === 'width') {
      options.width = normalizeDimension(rawValue)
    }

    if (key === 'height') {
      options.height = normalizeDimension(rawValue)
    }
  }

  return options
}

function addImageOptionsToUrl(url: string, options: ImageOptions) {
  const [path, hash = ''] = url.split('#')
  const [base, query = ''] = path.split('?')
  const params = new URLSearchParams(query)

  if (options.align) params.set('wiki-align', options.align)
  if (options.width) params.set('wiki-width', options.width)
  if (options.height) params.set('wiki-height', options.height)

  const nextQuery = params.toString()
  return `${base}${nextQuery ? `?${nextQuery}` : ''}${hash ? `#${hash}` : ''}`
}

function remarkWikiImages() {
  return (tree: MarkdownNode) => {
    visitMarkdownNode(tree, (node) => {
      if (!node.children) return

      node.children = node.children.flatMap((child, index, children) => {
        if (child.type !== 'image' || !child.url) return [child]

        const nextChild = children[index + 1]
        if (nextChild?.type !== 'text' || !nextChild.value) return [child]

        const match = nextChild.value.match(IMAGE_ATTRIBUTE_PATTERN)
        if (!match) return [child]

        const options = parseImageOptions(match[1])
        child.url = addImageOptionsToUrl(child.url, options)
        nextChild.value = nextChild.value.slice(match[0].length)

        return [child]
      }).filter((child) => child.type !== 'text' || child.value !== '')
    })
  }
}

function getImageRenderOptions(src: string) {
  const [path, hash = ''] = src.split('#')
  const [base, query = ''] = path.split('?')
  const params = new URLSearchParams(query)
  const align = params.get('wiki-align') || undefined
  const width = params.get('wiki-width') || undefined
  const height = params.get('wiki-height') || undefined

  params.delete('wiki-align')
  params.delete('wiki-width')
  params.delete('wiki-height')

  const nextQuery = params.toString()

  return {
    cleanSrc: `${base}${nextQuery ? `?${nextQuery}` : ''}${hash ? `#${hash}` : ''}`,
    align,
    width,
    height,
  }
}

interface WikiArticleProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: WikiArticleProps) {
  const { slug } = await params
  const entry = await getWikiEntryBySlug(slug)

  if (!entry) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${entry.title} - Zhorin Wiki`,
    description: entry.description,
    keywords: entry.keywords,
  }
}

export async function generateStaticParams() {
  const entries = await getAllWikiEntries()
  return entries.map((entry) => ({
    slug: entry.slug,
  }))
}

export default async function WikiArticle({ params }: WikiArticleProps) {
  const { slug } = await params
  const entry = await getWikiEntryBySlug(slug)

  if (!entry) {
    notFound()
  }

  const relatedArticles = await getRelatedEntries(entry.related)

  return (
    <div className="bg-background min-h-screen">
      {/* Article Header Section */}
      <ArticleHeader
        title={entry.title}
        description={entry.description}
        keywords={entry.keywords}
      />

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <div className="mb-8 -mx-6 px-6 border-b border-border/30 pb-6">
          <BreadcrumbNav
            items={[
              { label: 'Home', href: '/' },
              { label: 'Wiki', href: '/wiki' },
              { label: entry.title, href: `/wiki/${entry.slug}` },
            ]}
          />
        </div>

        {/* Content */}
        <article className="wiki-article prose dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:text-foreground/90 prose-strong:text-foreground prose-em:text-foreground/95 prose-ul:my-6 prose-li:my-2 prose-code:text-sm prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkWikiImages]}
            components={{
              h1: ({ children }) => (
                <h1 className="mt-10 mb-5 text-3xl font-bold">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="mt-8 mb-4 text-2xl font-bold">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="mt-6 mb-3 text-lg font-semibold">{children}</h3>
              ),
              h4: ({ children }) => (
                <h4 className="mt-5 mb-2 text-base font-semibold">{children}</h4>
              ),
              p: ({ children }) => (
                <p className="my-4 leading-relaxed text-foreground/90">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="my-4 list-disc space-y-2 pl-6">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="my-4 list-decimal space-y-2 pl-6">{children}</ol>
              ),
              li: ({ children }) => <li>{children}</li>,
              a: ({ children, href }) => (
                <a
                  href={href}
                  className="text-accent underline underline-offset-4 hover:text-accent/80"
                >
                  {children}
                </a>
              ),
              img: ({ alt, src }) => {
                const imageSrc = typeof src === 'string' ? src : ''
                const { cleanSrc, align, width, height } = getImageRenderOptions(imageSrc)
                const style: CSSProperties & Record<string, string | undefined> = {
                  '--wiki-image-width': width,
                  '--wiki-image-height': height,
                }

                return (
                  <img
                    src={cleanSrc}
                    alt={alt || ''}
                    data-align={align}
                    className="wiki-article-image rounded-lg border border-border/40 bg-card/40 object-cover"
                    style={style}
                  />
                )
              },
              blockquote: ({ children }) => (
                <blockquote className="my-6 border-l-2 border-accent/60 pl-4 text-foreground/80 italic">
                  {children}
                </blockquote>
              ),
              hr: () => <hr className="my-8 border-border/60" />,
              table: ({ children }) => (
                <div className="my-6 overflow-x-auto">
                  <table className="w-full border-collapse text-sm">{children}</table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border border-border/60 bg-muted px-3 py-2 text-left font-semibold">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-border/60 px-3 py-2 align-top">{children}</td>
              ),
              code: ({ children, className }) => (
                <code className={className || 'rounded bg-muted px-1.5 py-0.5 text-sm'}>
                  {children}
                </code>
              ),
            }}
          >
            {entry.content}
          </ReactMarkdown>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-12 border-t border-border/30">
            <RelatedArticles
              articles={relatedArticles.map((article) => ({
                slug: article.slug,
                title: article.title,
                description: article.description,
              }))}
            />
          </div>
        )}
      </div>
    </div>
  )
}
