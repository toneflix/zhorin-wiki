import { notFound } from 'next/navigation'
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

  // Parse markdown/MDX content into sections
  const sections = entry.content.split('\n## ').map((section, index) => {
    if (index === 0) return section
    return '## ' + section
  })

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
          <div
            dangerouslySetInnerHTML={{
              __html: parseMarkdown(entry.content),
            }}
          />
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

// Simple markdown parser for headings and basic formatting
function parseMarkdown(content: string): string {
  let html = content
    // Headings
    .replace(/^### (.*?)$/gm, '<h3 class="text-lg font-semibold mt-6 mb-3">$1</h3>')
    .replace(/^## (.*?)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Lists
    .replace(/^\- (.*?)$/gm, '<li>$1</li>')
    // Wrap list items in ul
    .replace(/(<li>.*?<\/li>)/s, '<ul class="list-disc list-inside space-y-2 my-4">$1</ul>')
    // Line breaks for paragraphs
    .replace(/\n\n/g, '</p><p class="my-4">')

  // Wrap remaining text in paragraphs
  const paragraphs = html.split('</p><p class="my-4">')
  html = paragraphs
    .map((p) => {
      if (p.includes('<h') || p.includes('<ul') || p.includes('<li>')) return p
      if (p.trim() === '') return ''
      return `<p class="my-4 leading-relaxed">${p}</p>`
    })
    .join('')

  return html
}
