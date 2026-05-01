import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20 text-center">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-destructive/10 rounded-lg">
          <AlertTriangle className="w-8 h-8 text-destructive" />
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-2">Article Not Found</h1>
      <p className="text-muted-foreground mb-8">
        The wiki article you&apos;re looking for doesn&apos;t exist. It may have been moved or deleted.
      </p>
      <div className="flex gap-4 justify-center">
        <Button asChild variant="outline">
          <Link href="/wiki">Back to Wiki</Link>
        </Button>
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
      </div>
    </div>
  )
}
