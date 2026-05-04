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

const explorationGroups = [
  {
    title: 'Core Lore',
    links: [
      {
        href: '/wiki/the-zhorin',
        title: 'The Zhorin',
        description:
          'Discover the pale humanoid space-farers and their collective consciousness',
      },
      {
        href: '/wiki/biology-felanin',
        title: 'Biology & Felanin',
        description:
          'Trace the biological foundations that shape Zhorin strength and adaptation',
      },
      {
        href: '/wiki/zhienium-technology',
        title: 'Zhienium Technology',
        description:
          'Explore the material science behind Zhorin tools, vessels, and systems',
      },
      {
        href: '/wiki/ukuhlan',
        title: 'Ukuhlan',
        description:
          'Understand the integration process that remakes beings into Zhorin-compatible forms',
      },
    ],
  },
  {
    title: 'Peoples & States',
    links: [
      {
        href: '/wiki/uhla',
        title: 'Uhla',
        description:
          'Explore fracturing from the collective and the unique perspective it grants',
      },
      {
        href: '/wiki/uhlahukuhlan',
        title: 'Uhlahukuhlan',
        description:
          'Rare beings combining collective logic with individual nuance',
      },
      {
        href: '/wiki/zholahukuhlan',
        title: 'Zholahukuhlan',
        description:
          'Non-Zhorin beings integrated through Ukuhlan while retaining nuanced cognition',
      },
      {
        href: '/wiki/ahlizhii-zhii',
        title: 'Ahlizhii & Zhii',
        description:
          'Examine paired concepts that define relation, identity, and divergence',
      },
    ],
  },
  {
    title: 'Language & Encounters',
    links: [
      {
        href: '/wiki/the-ix',
        title: 'The Ix',
        description:
          'A civilization that manipulated the Zhorin through pure logic',
      },
      {
        href: '/wiki/external-civilizations',
        title: 'External Civilizations',
        description:
          'Survey the known powers and societies beyond the Zhorin sphere',
      },
      {
        href: '/wiki/language-structure',
        title: 'Zhorin Language Structure',
        description:
          'Study how compressed intent replaces ordinary speech and grammar',
      },
      {
        href: '/wiki/zhorin-dialogue',
        title: 'Zhorin Dialogue Examples',
        description:
          'Read translated examples of Zhorin intent rendered for human understanding',
      },
    ],
  },
];

function ExplorationLinks({
  title,
  links,
  columns = 'md:grid-cols-1',
}: {
  title: string;
  links: (typeof explorationGroups)[number]['links'];
  columns?: string;
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className={`grid ${columns} gap-4`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="p-4 border border-border rounded-lg hover:bg-accent/5 transition-colors group"
          >
            <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
              {link.title}
            </h3>
            <p className="text-sm text-muted-foreground">{link.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-6xl mx-4 md:mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-accent/10 rounded-lg">
              <img src="/images/logo.png" className="w-10 h-10 text-accent" />
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

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ExplorationLinks {...explorationGroups[0]} />
            <img
              src="/images/zhorin-true-blood.jpeg"
              alt="The Zhorin"
              className="w-full rounded-lg shadow-lg"
            />
            <ExplorationLinks {...explorationGroups[1]} />
          </div>
        </div>

        {/* Quick Navigation */}
        <ExplorationLinks {...explorationGroups[2]} columns="md:grid-cols-2" />
      </div>
    </div>
  );
}
