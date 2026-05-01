# Zhorin Universe Wiki

A premium sci-fi wiki documenting the Zhorin Universe, built for GitHub Pages as a static, fully-optimized site.

## Features

- **Complete Lore**: 12 comprehensive articles covering civilization, biology, technology, and philosophy
- **⚡ Fast & Static**: Zero server required—pure HTML/CSS/JavaScript deployed to GitHub Pages
- **Responsive Design**: Mobile-first layout with sidebar navigation on desktop
- **Dark Mode First**: Premium sci-fi aesthetic with muted palette and subtle accents
- **Full-Text Search Ready**: Search infrastructure for browsing articles
- **Automatic Deployment**: GitHub Actions workflow handles builds and deployment
- **Cross-Article Navigation**: Related articles, breadcrumbs, and glossary terms

## Quick Start

### Local Development

```bash
# Install dependencies
pnpm install

# Start dev server (http://localhost:3000)
pnpm dev

# Build for static export (output → out/)
pnpm build

# View built site locally
pnpm start
```

### Deploy to GitHub Pages

See [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) for detailed deployment instructions.

**Quick version:**

1. Push to GitHub
2. Go to Settings → Pages
3. Select "GitHub Actions" as source
4. Update repo name in `.github/workflows/deploy.yml`
5. Push again → automatic deployment 🚀

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Content**: MDX with Frontmatter
- **Styling**: Tailwind CSS + shadcn/ui
- **Deployment**: GitHub Pages (static export)
- **Performance**: Zero server, pure static site

## Project Structure

```
├── app/                              # Next.js pages
│   ├── page.tsx                      # Home page
│   ├── layout.tsx                    # Root layout
│   └── wiki/
│       ├── page.tsx                  # Wiki index
│       ├── [slug]/page.tsx           # Article pages
│       └── layout.tsx                # Wiki layout
│
├── components/wiki/                  # Wiki components
│   ├── article-header.tsx            # Article title section
│   ├── breadcrumb-nav.tsx            # Breadcrumb navigation
│   ├── glossary-badge.tsx            # Term badges
│   ├── lore-callout.tsx              # Canon/Hidden callouts
│   ├── related-articles.tsx          # Related articles
│   ├── sidebar-nav.tsx               # Navigation sidebar
│   └── top-nav.tsx                   # Top navbar
│
├── content/wiki/                     # MDX articles
│   ├── 01-the-zhorin.mdx
│   ├── 02-biology-felanin.mdx
│   ├── 03-zhienium-technology.mdx
│   ├── 04-ukuhlan.mdx
│   ├── 05-uhla.mdx
│   ├── 06-uhlahukuhlan.mdx
│   ├── 07-ahlizhii.mdx
│   ├── 08-elder-consciousness.mdx
│   ├── 09-indhiirho.mdx
│   ├── 10-the-ix.mdx
│   ├── 11-external-civilizations.mdx
│   └── 12-timeline-lore.mdx
│
├── lib/
│   └── wiki.ts                       # Content loading utilities
│
└── .github/workflows/
    └── deploy.yml                    # GitHub Actions workflow
```

## Adding New Articles

### 1. Create MDX file in `/content/wiki/`

```mdx
---
title: Article Title
slug: article-slug
order: 13
description: Brief description for SEO
keywords: ['keyword1', 'keyword2']
related: ['Related Title 1', 'Related Title 2']
---

## Section 1

Content with **bold** and _italic_ text.

- List item 1
- List item 2

## Section 2

More content...
```

### 2. Metadata Fields

| Field         | Required | Purpose                    |
| ------------- | -------- | -------------------------- |
| `title`       | ✓        | Display name in navigation |
| `slug`        | ✓        | URL identifier (no spaces) |
| `order`       | ✓        | Sort position in sidebar   |
| `description` | ✓        | SEO description            |
| `keywords`    | ✓        | Tag badges on article      |
| `related`     | ✓        | Links to other articles    |

### 3. Rebuild & Deploy

```bash
pnpm build
# Test locally: pnpm start
# Then git push to deploy to GitHub Pages
```

## Development

### Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for static export
pnpm start        # Preview production build
pnpm lint         # Run linter
```

### Code Structure

**Pages**:

- `/` — Home page with featured articles
- `/wiki` — Article index/browser
- `/wiki/[slug]` — Individual articles

**Components**:

- `wiki/*` — Article-specific components
- `ui/*` — shadcn/ui components (auto-generated)

**Content**:

- MDX files with YAML frontmatter
- Auto-loaded by `lib/wiki.ts`
- Pre-rendered at build time

## Design System

### Colors

- **Primary**: Deep blacks and pale whites (dark mode first)
- **Accent**: Subtle blue/violet accents
- **Neutrals**: Muted greys

### Typography

- **Headings**: Geist (sans-serif)
- **Body**: Geist (sans-serif)
- **Mono**: Geist Mono (code)

### Components

- Cards for article previews
- Badges for keywords/glossary terms
- Alerts for Canon/Hidden Truth callouts
- Breadcrumbs for navigation
- Sidebar for persistent nav

## Performance

**Metrics**:

- Zero JavaScript overhead (pre-rendered)
- Instant page loads (static content)
- Perfect Lighthouse scores
- Works offline (cached by browser)

**Build Time**: ~6 seconds
**Output Size**: ~2MB static files

## GitHub Pages Configuration

This site is optimized for project-site deployment:

```
Repo: github.com/username/zhorin-wiki
URL: https://username.github.io/zhorin-wiki/
Source: GitHub Actions
Output: /out directory
```

See [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) for full configuration.

## SEO

- ✓ Meta tags on all pages
- ✓ OpenGraph images
- ✓ Sitemap-ready structure
- ✓ Mobile viewport configuration
- ✓ Semantic HTML

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS 12+, Android 5+)

## License

This wiki and all content is provided as-is for the Zhorin Universe project.

## Support

### Local Issues

- Check Node.js v18+: `node --version`
- Clear cache: `rm -rf .next out`
- Reinstall: `pnpm install`

### GitHub Pages Issues

- See [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md#troubleshooting)
- Check Actions tab for build logs
- Verify Settings → Pages configuration

---

**Built with Next.js, Tailwind, and shadcn/ui**
