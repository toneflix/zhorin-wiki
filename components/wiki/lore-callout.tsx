'use client'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { AlertTriangle, LucideIcon, Shield, HelpCircle, Eye } from 'lucide-react'

type CalloutType = 'canon' | 'unresolved' | 'hidden-truth' | 'external-view'

interface LoreCalloutProps {
  type: CalloutType
  children: React.ReactNode
}

const calloutConfig: Record<CalloutType, { label: string; icon: LucideIcon; className: string }> = {
  canon: {
    label: 'Canon',
    icon: Shield,
    className: 'border-blue-500/50 bg-blue-50/50 dark:bg-blue-950/20',
  },
  unresolved: {
    label: 'Unresolved',
    icon: HelpCircle,
    className: 'border-yellow-500/50 bg-yellow-50/50 dark:bg-yellow-950/20',
  },
  'hidden-truth': {
    label: 'Hidden Truth',
    icon: Eye,
    className: 'border-purple-500/50 bg-purple-50/50 dark:bg-purple-950/20',
  },
  'external-view': {
    label: 'External View',
    icon: AlertTriangle,
    className: 'border-orange-500/50 bg-orange-50/50 dark:bg-orange-950/20',
  },
}

export function LoreCallout({ type, children }: LoreCalloutProps) {
  const config = calloutConfig[type]
  const Icon = config.icon

  return (
    <Alert className={`border-l-4 ${config.className}`}>
      <Icon className="h-4 w-4" />
      <div>
        <p className="font-semibold text-sm mb-2">{config.label}</p>
        <AlertDescription className="text-sm">{children}</AlertDescription>
      </div>
    </Alert>
  )
}
