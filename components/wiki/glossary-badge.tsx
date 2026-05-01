'use client'

import { Badge } from '@/components/ui/badge'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface GlossaryBadgeProps {
  term: string
  definition?: string
  variant?: 'default' | 'secondary' | 'outline' | 'destructive'
}

export function GlossaryBadge({ term, definition, variant = 'secondary' }: GlossaryBadgeProps) {
  if (!definition) {
    return <Badge variant={variant}>{term}</Badge>
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge variant={variant} className="cursor-help">
            {term}
          </Badge>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{definition}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
