import { SidebarNav } from '@/components/wiki/sidebar-nav'
import { MobileWikiNav } from '@/components/wiki/mobile-wiki-nav'
import { getAllWikiEntries } from '@/lib/wiki'

export default async function WikiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const entries = await getAllWikiEntries()
  
  const navItems = entries.map(entry => ({
    title: entry.title,
    href: `/wiki/${entry.slug}`,
  }))

  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen md:h-screen md:overflow-hidden">
        {/* Fixed Sidebar */}
        <aside className="hidden md:flex md:flex-col w-72 bg-sidebar border-r border-sidebar-border fixed left-0 top-0 h-screen z-40">
          <SidebarNav items={navItems} />
        </aside>

        <div className="flex min-h-screen flex-1 flex-col md:ml-72 md:h-screen">
          <MobileWikiNav items={navItems} />

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
