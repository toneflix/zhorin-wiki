'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Book } from 'lucide-react'

interface SidebarNavItem {
  title: string
  href: string
}

interface SidebarNavProps {
  items: SidebarNavItem[]
}

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen min-h-0 flex-col bg-sidebar">
      {/* Header */}
      <div className="px-6 py-8 border-b border-sidebar-border">
        <Link 
          href="/" 
          className="group flex items-center gap-3 transition-all duration-300 hover:gap-4"
        >
          <div className="p-2 rounded-lg bg-sidebar-primary/20 group-hover:bg-sidebar-primary/30 transition-colors duration-300">
            <Book className="w-5 h-5 text-sidebar-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-sidebar-primary tracking-wider">ZHORIN</span>
            <span className="text-xs text-sidebar-foreground/60">WIKI</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        <nav className="space-y-1 px-3 py-6">
          <Link
            href="/wiki"
            className={cn(
              'group relative px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-3 overflow-hidden',
              pathname === '/wiki'
                ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-lg shadow-sidebar-accent/20'
                : 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-primary/10'
            )}
          >
            <span className="relative z-10">All Articles</span>
          </Link>

          <div className="my-4 px-4">
            <div className="text-xs font-semibold text-sidebar-foreground/40 uppercase tracking-widest">
              Documentation
            </div>
          </div>

          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group relative px-4 py-2.5 rounded-lg text-sm transition-all duration-300 flex items-center gap-2 overflow-hidden block',
                pathname === item.href
                  ? 'bg-sidebar-accent/20 text-sidebar-primary font-semibold'
                  : 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-primary/10'
              )}
            >
              {/* Background highlight on hover/active */}
              <span className={cn(
                'absolute inset-0 -z-10 transition-all duration-300',
                pathname === item.href 
                  ? 'bg-sidebar-accent/10' 
                  : 'bg-transparent group-hover:bg-sidebar-accent/5'
              )} />
              
              <span className="relative z-10 line-clamp-2 text-left">
                {item.title}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t border-sidebar-border px-6 py-4 text-xs text-sidebar-foreground/50">
        <p>Explore the universe of the Zhorin civilization and beyond.</p>
      </div>
    </div>
  )
}
