import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getWikiEntryBySlug, getRelatedEntries, getAllWikiEntries } from '@/lib/wiki'
import { ArticleHeader } from '@/components/wiki/article-header'
import { BreadcrumbNav } from '@/components/wiki/breadcrumb-nav'
import { RelatedArticles } from '@/components/wiki/related-articles'

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
        <article className="prose dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:text-foreground/90 prose-strong:text-foreground prose-em:text-foreground/95 prose-ul:my-6 prose-li:my-2 prose-code:text-sm prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
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
              img: ({ alt, src }) => (
                <img
                  src={src || ''}
                  alt={alt || ''}
                  className="my-8 w-full rounded-lg border border-border/40 bg-card/40 object-cover"
                />
              ),
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
