import { BookOpen, Lightbulb, Zap } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Zap className="w-10 h-10 text-accent" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            Zhorin Verse
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            An advanced collective-driven civilization where perfect logic may
            be their greatest strength—and deepest limitation.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/wiki">Enter Wiki</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardHeader>
              <BookOpen className="w-8 h-8 mb-2 text-accent" />
              <CardTitle>Comprehensive Lore</CardTitle>
              <CardDescription>
                Deep exploration of Zhorin civilization, biology, and technology
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Lightbulb className="w-8 h-8 mb-2 text-accent" />
              <CardTitle>Complex Universe</CardTitle>
              <CardDescription>
                Navigate intricate relationships, conflicts, and hidden truths
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="w-8 h-8 mb-2 text-accent" />
              <CardTitle>Sci-Fi Deep Dive</CardTitle>
              <CardDescription>
                Explore consciousness integration, biological evolution, and
                strategic dynamics
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Quick Navigation */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Start Exploring</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/wiki/the-zhorin"
              className="p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                The Zhorin
              </h3>
              <p className="text-sm text-muted-foreground">
                Discover the pale humanoid space-farers and their collective
                consciousness
              </p>
            </Link>

            <Link
              href="/wiki/uhla"
              className="p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                Uhla
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore fracturing from the collective and the unique
                perspective it grants
              </p>
            </Link>

            <Link
              href="/wiki/uhlahukuhlan"
              className="p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                Uhlahukuhlan
              </h3>
              <p className="text-sm text-muted-foreground">
                Rare beings combining collective logic with individual nuance
              </p>
            </Link>

            <Link
              href="/wiki/the-ix"
              className="p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                The Ix
              </h3>
              <p className="text-sm text-muted-foreground">
                A civilization that manipulated the Zhorin through pure logic
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
