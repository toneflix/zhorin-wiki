# GitHub Pages Deployment Setup

This wiki is optimized for deployment to GitHub Pages as a project site (subdirectory-based deployment).

## Configuration Details

### Static Export
The Next.js app is configured with `output: 'export'` in `next.config.mjs`, which:
- Generates a fully static `out/` directory
- Removes the need for a Node.js server
- Enables direct hosting on GitHub Pages

### Base Path Configuration
The app uses `basePath: process.env.NEXT_PUBLIC_BASE_PATH` to support deployment to a repository subdirectory:
- **Local development**: Uses root path (`/`)
- **GitHub Pages**: Uses repository path (e.g., `/zhorin-wiki`)

### MDX Support
Content is processed with `@next/mdx`, allowing:
- Markdown files in `/content/wiki/*.mdx`
- Frontmatter with metadata (title, slug, description, keywords, related articles)
- Server-side content generation and static export

## Deployment Instructions

### 1. Repository Setup

Push this project to GitHub:

```bash
git init
git add .
git commit -m "Initial commit: Zhorin Wiki"
git remote add origin https://github.com/YOUR_USERNAME/zhorin-wiki.git
git branch -M main
git push -u origin main
```

### 2. GitHub Pages Configuration

1. Go to your repository Settings → Pages
2. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - This enables the automatic deployment workflow

### 3. Configure Repository Name

The workflow file `.github/workflows/deploy.yml` uses:
```
NEXT_PUBLIC_BASE_PATH: /zhorin-wiki
```

**Important**: Update `/zhorin-wiki` to match your actual repository name:

1. Edit `.github/workflows/deploy.yml`
2. Replace `zhorin-wiki` with your actual repository name
3. Commit and push

### 4. Automatic Deployment

Once configured:
- Push to `main` branch → GitHub Actions runs the build
- Static files are automatically deployed to GitHub Pages
- Site is available at: `https://YOUR_USERNAME.github.io/your-repo-name`

### 5. Custom Domain (Optional)

To use a custom domain:

1. Go to Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `zhorin.example.com`)
3. Add DNS records as instructed by GitHub
4. GitHub will create a CNAME file automatically

## Local Development

### Install Dependencies
```bash
pnpm install
```

### Run Development Server
```bash
pnpm dev
```

Visit `http://localhost:3000` to see the wiki.

### Build for Deployment
```bash
pnpm build
```

This generates the static `out/` directory that GitHub Pages will deploy.

## File Structure

```
project/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   └── wiki/
│       ├── page.tsx             # Wiki index
│       ├── [slug]/
│       │   ├── page.tsx         # Individual article pages
│       │   └── not-found.tsx    # 404 page
│       └── layout.tsx           # Wiki layout with sidebar
│
├── components/
│   └── wiki/                    # Wiki-specific components
│       ├── sidebar-nav.tsx      # Navigation sidebar
│       ├── top-nav.tsx          # Top navigation bar
│       ├── article-header.tsx   # Article title & metadata
│       ├── breadcrumb-nav.tsx   # Breadcrumb navigation
│       ├── glossary-badge.tsx   # Glossary term badges
│       ├── lore-callout.tsx     # Canon/Hidden Truth callouts
│       └── related-articles.tsx # Related articles section
│
├── content/
│   └── wiki/                    # MDX content files
│       ├── 01-the-zhorin.mdx
│       ├── 02-biology-felanin.mdx
│       └── ...more articles
│
├── lib/
│   └── wiki.ts                  # Wiki data loading & utilities
│
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions workflow
│
└── next.config.mjs              # Next.js config (MDX + export)
```

## Adding New Articles

### 1. Create MDX File
Create a new file in `/content/wiki/` (e.g., `11-new-article.mdx`):

```mdx
---
title: Article Title
slug: article-slug
order: 11
description: Brief description of the article
keywords: ["keyword1", "keyword2"]
related: ["Related Article Title"]
---

## Section 1
Content here...

## Section 2
Content here...
```

### 2. Frontmatter Fields

- **title** (required): Display name
- **slug** (required): URL-safe identifier
- **order** (required): Display order in nav
- **description** (required): SEO description
- **keywords** (array): Tags for filtering
- **related** (array): Related article titles (must match existing titles)

### 3. Content Format

- Use standard Markdown syntax
- Headings: `## Section Name`
- Bold: `**text**`
- Lists: `- item`
- The parser automatically styles content

## Troubleshooting

### Build Fails
- Check Node.js version: `node --version` (needs 18+)
- Clear `.next` cache: `rm -rf .next`
- Reinstall dependencies: `pnpm install`

### Pages Not Showing
- Verify `basePath` in `next.config.mjs` matches repository name
- Check GitHub Pages is enabled in Settings → Pages
- Review workflow logs in Actions tab

### Content Not Loading
- Verify MDX files are in `/content/wiki/`
- Check frontmatter syntax (YAML between `---`)
- Ensure all required frontmatter fields are present

### Deploy Workflow Issues
- Check `.github/workflows/deploy.yml` has correct repo name
- Verify GitHub Pages source is set to "GitHub Actions"
- View workflow logs: Settings → Actions → Deployments

## Performance Optimization

This setup automatically provides:

- **Static Generation**: All pages pre-rendered at build time
- **Image Optimization**: Images are unoptimized for GitHub Pages compatibility
- **Zero JavaScript Overhead**: Pure static HTML/CSS
- **Fast Loading**: Content served directly from GitHub's CDN
- **SEO Ready**: Proper metadata and OpenGraph tags

## Environment Variables

For local development, create a `.env.local` file:

```env
# Optional: Override base path for testing
NEXT_PUBLIC_BASE_PATH=/zhorin-wiki
```

The GitHub Actions workflow automatically sets this when deploying.

---

For issues or questions, see Next.js documentation:
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages with Next.js](https://github.com/vercel/next.js/discussions/17262)
