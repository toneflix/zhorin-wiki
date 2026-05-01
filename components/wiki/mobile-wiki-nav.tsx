'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Book, Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

interface MobileWikiNavItem {
  title: string
  href: string
}

interface MobileWikiNavProps {
  items: MobileWikiNavItem[]
}

export function MobileWikiNav({ items }: MobileWikiNavProps) {
  const pathname = usePathname()

  return (
    <div className="sticky top-0 z-40 border-b border-border/50 bg-background/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="flex items-center justify-between gap-3">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <span className="rounded-md bg-primary/10 p-2 text-primary">
            <Book className="size-4" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-bold leading-tight tracking-wider">
              ZHORIN
            </span>
            <span className="block text-xs leading-tight text-muted-foreground">
              WIKI
            </span>
          </span>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" aria-label="Open wiki navigation">
              <Menu className="size-4" />
              <span>Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[86vw] max-w-sm gap-0 p-0">
            <SheetHeader className="border-b border-border/50 px-5 py-5 text-left">
              <SheetTitle>Wiki Navigation</SheetTitle>
              <SheetDescription>Browse Zhorin wiki articles.</SheetDescription>
            </SheetHeader>

            <div className="h-[calc(100vh-96px)] overflow-y-auto overscroll-contain">
              <nav className="space-y-1 px-3 py-4">
                <SheetClose asChild>
                  <Link
                    href="/wiki"
                    className={cn(
                      'block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                      pathname === '/wiki'
                        ? 'bg-accent text-accent-foreground'
                        : 'text-foreground/75 hover:bg-accent/50 hover:text-foreground',
                    )}
                  >
                    All Articles
                  </Link>
                </SheetClose>

                <div className="px-4 pb-2 pt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Documentation
                </div>

                {items.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block rounded-lg px-4 py-3 text-sm transition-colors',
                        pathname === item.href
                          ? 'bg-accent/70 font-semibold text-accent-foreground'
                          : 'text-foreground/75 hover:bg-accent/50 hover:text-foreground',
                      )}
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
