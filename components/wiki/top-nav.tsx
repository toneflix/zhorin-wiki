'use client'

import Link from 'next/link'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Zap } from 'lucide-react'

export function TopNav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="flex items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Zap className="w-6 h-6" />
          Zhorin Wiki
        </Link>
        
        <div className="flex-1 max-w-md relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            className="pl-10"
          />
        </div>
      </div>
    </nav>
  )
}
