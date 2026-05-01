# Documentation Index

Complete guide to all Zhorin Wiki documentation and files.

## Documentation Files

### Getting Started
- **[QUICK_START.md](./QUICK_START.md)** ⭐ **START HERE**
  - 5-minute local setup
  - 10-minute GitHub Pages deployment
  - Common commands and troubleshooting
  - **Best for**: First-time users who want to get started fast

### Complete Guides
- **[README.md](./README.md)**
  - Full project overview
  - Feature list and tech stack
  - Development commands
  - Project structure
  - Adding new articles
  - **Best for**: Understanding the full project

- **[DEPLOYMENT.md](./DEPLOYMENT.md)**
  - Step-by-step deployment walkthrough
  - GitHub configuration details
  - Custom domain setup
  - Troubleshooting guide
  - **Best for**: Detailed deployment instructions

- **[SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)**
  - Pre-deployment checklist
  - GitHub configuration checklist
  - Testing checklist
  - Deployment verification
  - **Best for**: Making sure everything is configured correctly

### Technical Reference
- **[GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)**
  - Static export configuration
  - MDX setup details
  - Base path configuration
  - File structure
  - Adding new articles (technical)
  - Performance optimization notes
  - **Best for**: Understanding technical details

- **[GITHUB_PAGES_OPTIMIZATIONS.md](./GITHUB_PAGES_OPTIMIZATIONS.md)**
  - What optimizations were applied
  - Why each optimization matters
  - Configuration details
  - Performance metrics
  - Build details
  - SEO optimizations
  - **Best for**: Understanding how the site is optimized

### Project Information
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)**
  - Complete project overview
  - What was built (content, architecture, components)
  - File organization
  - Features implemented
  - Performance metrics
  - Customization information
  - **Best for**: Getting a complete picture of the project

## Quick Navigation

### "I want to..."

**...get started quickly**
→ [QUICK_START.md](./QUICK_START.md)

**...deploy to GitHub Pages**
→ [DEPLOYMENT.md](./DEPLOYMENT.md)

**...verify everything is set up**
→ [SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)

**...understand the project**
→ [README.md](./README.md) or [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)

**...understand technical details**
→ [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

**...understand optimizations**
→ [GITHUB_PAGES_OPTIMIZATIONS.md](./GITHUB_PAGES_OPTIMIZATIONS.md)

## Source Code Files

### Pages (app/)
- `app/page.tsx` — Home page with featured articles
- `app/layout.tsx` — Root layout with SEO metadata
- `app/wiki/page.tsx` — Wiki index/article browser
- `app/wiki/layout.tsx` — Wiki layout with sidebar
- `app/wiki/[slug]/page.tsx` — Individual article pages
- `app/wiki/[slug]/not-found.tsx` — 404 page for missing articles

### Components (components/)
- `components/wiki/article-header.tsx` — Article title & metadata
- `components/wiki/breadcrumb-nav.tsx` — Breadcrumb navigation
- `components/wiki/glossary-badge.tsx` — Glossary term badges
- `components/wiki/lore-callout.tsx` — Canon/Hidden Truth callouts
- `components/wiki/related-articles.tsx` — Related articles section
- `components/wiki/sidebar-nav.tsx` — Navigation sidebar
- `components/wiki/top-nav.tsx` — Top navigation bar

### Content (content/)
- `content/wiki/01-the-zhorin.mdx`
- `content/wiki/02-biology-felanin.mdx`
- `content/wiki/03-zhienium-technology.mdx`
- `content/wiki/04-ukuhlan.mdx`
- `content/wiki/05-uhla.mdx`
- `content/wiki/06-uhlahukuhlan.mdx`
- `content/wiki/07-ahlizhii.mdx`
- `content/wiki/08-elder-consciousness.mdx`
- `content/wiki/09-indhiirho.mdx`
- `content/wiki/10-the-ix.mdx`
- `content/wiki/11-external-civilizations.mdx`
- `content/wiki/12-timeline-lore.mdx`

### Configuration
- `next.config.mjs` — Next.js config (MDX, static export, base path)
- `tailwind.config.ts` — Tailwind CSS configuration
- `tsconfig.json` — TypeScript configuration
- `.github/workflows/deploy.yml` — GitHub Actions deployment workflow

### Utilities
- `lib/wiki.ts` — Content loading and parsing utilities
- `lib/utils.ts` — Tailwind/shadcn utilities
- `app/globals.css` — Global styles

## File Quick Reference

| File | Purpose |
|------|---------|
| `app/page.tsx` | Home page |
| `app/wiki/page.tsx` | Article index |
| `app/wiki/[slug]/page.tsx` | Article pages |
| `components/wiki/*` | Wiki components |
| `content/wiki/*.mdx` | Article content |
| `lib/wiki.ts` | Content utilities |
| `next.config.mjs` | Next.js setup |
| `.github/workflows/deploy.yml` | GitHub deployment |

## Common Tasks

### Add New Article
1. Create file in `content/wiki/XX-name.mdx`
2. Add frontmatter (see templates in guides)
3. Write content using Markdown
4. Push to GitHub → automatic deployment

**See**: [GITHUB_PAGES_SETUP.md - Adding New Articles](./GITHUB_PAGES_SETUP.md#adding-new-articles)

### Change Styling
1. Edit `tailwind.config.ts` for theme
2. Edit `app/globals.css` for custom styles
3. Edit components in `components/`
4. Push to GitHub → automatic deployment

**See**: [PROJECT_SUMMARY.md - Customization](./PROJECT_SUMMARY.md#customization)

### Update Navigation
1. Edit `components/wiki/sidebar-nav.tsx` for sidebar
2. Edit `components/wiki/top-nav.tsx` for header
3. Push to GitHub → automatic deployment

### Debug Build Issues
1. Run locally: `pnpm build`
2. Check error messages
3. See troubleshooting section in [DEPLOYMENT.md](./DEPLOYMENT.md#troubleshooting)

## 📚 Learning Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Next.js MDX Integration](https://nextjs.org/docs/app/building-your-application/configuring/mdx)

### MDX
- [MDX Documentation](https://mdxjs.com/)
- [MDX with Next.js](https://nextjs.org/docs/app/building-your-application/configuring/mdx)

### Tailwind CSS
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Tailwind v4 Guide](https://tailwindcss.com/docs/upgrade-guide)

### shadcn/ui
- [shadcn/ui Components](https://ui.shadcn.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)

### GitHub Pages
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## Documentation Flow

**New User Path**:
1. Read [QUICK_START.md](./QUICK_START.md) (5 min)
2. Follow deployment steps in [DEPLOYMENT.md](./DEPLOYMENT.md)
3. Verify setup with [SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)
4. Reference [README.md](./README.md) as needed

**Returning User Path**:
1. Check [QUICK_START.md](./QUICK_START.md) for commands
2. For deployment issues, see [DEPLOYMENT.md](./DEPLOYMENT.md)
3. For technical details, see [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

**Administrator Path**:
1. Review [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)
2. Understand optimizations in [GITHUB_PAGES_OPTIMIZATIONS.md](./GITHUB_PAGES_OPTIMIZATIONS.md)
3. Reference source files in `app/`, `components/`, `content/`

## 📞 Support

### Common Questions

**Q: How do I add a new article?**
A: See [QUICK_START.md - Add New Articles](./QUICK_START.md#add-new-articles) or [GITHUB_PAGES_SETUP.md - Adding New Articles](./GITHUB_PAGES_SETUP.md#adding-new-articles)

**Q: My site isn't deploying**
A: See [DEPLOYMENT.md - Troubleshooting](./DEPLOYMENT.md#troubleshooting) or [SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)

**Q: How do I customize the design?**
A: See [PROJECT_SUMMARY.md - Customization](./PROJECT_SUMMARY.md#customization) and [README.md - Customization](./README.md#customization-basics)

**Q: What's the tech stack?**
A: See [README.md - Technology Stack](./README.md#technology-stack) or [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)

**Q: How do I run it locally?**
A: See [QUICK_START.md - Local Setup](./QUICK_START.md#5-minute-local-setup) or [README.md - Development](./README.md#development)

### Getting Help

1. **For setup/deployment issues**: See [DEPLOYMENT.md](./DEPLOYMENT.md#troubleshooting)
2. **For GitHub Pages help**: https://docs.github.com/en/pages
3. **For Next.js help**: https://nextjs.org/docs
4. **For MDX help**: https://mdxjs.com/

## Learning Order

**First Time**:
1. QUICK_START.md (5 min)
2. DEPLOYMENT.md (10 min)
3. SETUP_CHECKLIST.md (verify)

**Understanding Project**:
1. README.md
2. PROJECT_SUMMARY.md
3. GITHUB_PAGES_OPTIMIZATIONS.md

**Technical Deep Dive**:
1. GITHUB_PAGES_SETUP.md
2. Source code files
3. Referenced docs/guides

## Checklist for New Users

- [ ] Read [QUICK_START.md](./QUICK_START.md)
- [ ] Run `pnpm install && pnpm dev`
- [ ] Verify site works locally
- [ ] Follow [DEPLOYMENT.md](./DEPLOYMENT.md)
- [ ] Complete [SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)
- [ ] Verify site is live
- [ ] Bookmark common docs for reference

---
