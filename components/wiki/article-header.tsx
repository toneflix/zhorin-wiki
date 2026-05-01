'use client'

import { GlossaryBadge } from './glossary-badge'

interface ArticleHeaderProps {
  title: string
  description: string
  keywords?: string[]
}

export function ArticleHeader({ title, description, keywords = [] }: ArticleHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-card to-background/50 border-b border-border/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold text-pretty leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        {keywords.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4">
            {keywords.map((keyword) => (
              <GlossaryBadge key={keyword} term={keyword} variant="outline" />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
