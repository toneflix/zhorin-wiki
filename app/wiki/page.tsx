import Link from 'next/link'
import { getAllWikiEntries } from '@/lib/wiki'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

export const metadata = {
  title: 'Wiki Index',
  description: 'Browse all articles in the Zhorin Universe wiki',
}

export default async function WikiIndex() {
  const entries = await getAllWikiEntries()

  return (
    <div className="bg-background min-h-screen">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-card to-background/50 border-b border-border/20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Wiki Index
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl">
            Explore comprehensive documentation of the Zhorin Universe, from civilization and technology to philosophy and lore.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Search */}
        <div className="relative mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
          <Input
            placeholder="Search articles..."
            className="pl-12 py-3 text-base bg-card border-border/30 focus:border-primary/50 transition-colors"
          />
        </div>

        {/* Articles Grid */}
        <div className="grid gap-4 sm:gap-6">
          {entries.map((entry) => (
            <Link key={entry.slug} href={`/wiki/${entry.slug}`}>
              <Card className="group h-full border-border/40 bg-card/50 hover:bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors duration-300">
                    {entry.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/60 line-clamp-2">
                    {entry.description}
                  </CardDescription>
                </CardHeader>
                {entry.keywords.length > 0 && (
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {entry.keywords.slice(0, 3).map((keyword) => (
                        <span
                          key={keyword}
                          className="inline-block px-2.5 py-1 text-xs rounded-md bg-accent/10 text-accent/80 border border-accent/20 group-hover:bg-accent/20 transition-colors duration-300"
                        >
                          {keyword}
                        </span>
                      ))}
                      {entry.keywords.length > 3 && (
                        <span className="text-xs text-foreground/50">+{entry.keywords.length - 3}</span>
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
