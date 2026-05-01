'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  href: string
}

export function BreadcrumbNav({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-1 text-sm">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center gap-1">
          {index > 0 && <ChevronRight className="w-4 h-4 text-foreground/30" />}
          {index === items.length - 1 ? (
            <span className="text-foreground/70 font-medium">{item.label}</span>
          ) : (
            <Link 
              href={item.href}
              className="text-foreground/50 hover:text-foreground/80 transition-colors duration-300 hover:underline"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
