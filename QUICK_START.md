# Quick Start Guide

## 5-Minute Local Setup

```bash
# 1. Install dependencies
pnpm install

# 2. Start development server
pnpm dev

# 3. Open http://localhost:3000 in browser
# Done! Wiki is now running locally
```

## Deploy to GitHub Pages (10 Minutes)

### Step 1: Create GitHub Repository

- Go to github.com → "New repository"
- Name: `zhorin-wiki` (or your preferred name)
- Don't initialize with README
- Click "Create repository"

### Step 2: Push Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/zhorin-wiki.git
git branch -M main
git push -u origin main
```

### Step 3: Update Deployment Configuration

Edit `.github/workflows/deploy.yml` line 47:

**Change**:

```yaml
NEXT_PUBLIC_BASE_PATH: /zhorin-wiki
```

**To** (your actual repo name):

```yaml
NEXT_PUBLIC_BASE_PATH: /your-repo-name
```

**Examples**:

- `NEXT_PUBLIC_BASE_PATH: /zhorin` (if repo named `zhorin`)
- `NEXT_PUBLIC_BASE_PATH: /wiki` (if repo named `wiki`)

### Step 4: Enable GitHub Pages

On GitHub:

1. Go to Settings (top right)
2. Click "Pages" (left sidebar)
3. Under "Build and deployment" → Source
4. Select **"GitHub Actions"**
5. Leave other settings default

### Step 5: Deploy

```bash
# Commit and push the config change
git add .github/workflows/deploy.yml
git commit -m "Update workflow base path"
git push
```

That's it! GitHub Actions will:

1. ✅ Build your site
2. ✅ Deploy to GitHub Pages
3. ✅ Your site goes live in 2-5 minutes

### Step 6: Access Your Wiki

Your site is now live at:

```
https://YOUR_USERNAME.github.io/your-repo-name/
```

Example: `https://john.github.io/zhorin-wiki/`

## Common Commands

```bash
pnpm dev           # Start dev server (http://localhost:3000)
pnpm build         # Build for production
pnpm start         # Test production build locally
pnpm lint          # Run linter
```

## Add New Articles

### 1. Create file

```bash
# Create new article file
touch content/wiki/13-article-name.mdx
```

### 2. Add content

```mdx
---
title: My Article
slug: my-article
order: 13
description: What this article covers
keywords: ['keyword1', 'keyword2']
related: ['Related Article Title']
---

## Section 1

Your content here with **bold** and _italic_.

## Section 2

More content...
```

### 3. Deploy

```bash
git add content/wiki/13-article-name.mdx
git commit -m "Add new article"
git push
# Automatic deployment! Done!
```

## File Locations

| What       | Where                                             |
| ---------- | ------------------------------------------------- |
| Articles   | `content/wiki/*.mdx`                              |
| Pages      | `app/**/*.tsx`                                    |
| Components | `components/**/*.tsx`                             |
| Styling    | `app/globals.css`, `tailwind.config.ts`           |
| Config     | `next.config.mjs`, `.github/workflows/deploy.yml` |

## Frontmatter Template

Copy this template for new articles:

```mdx
---
title: Article Title
slug: article-slug
order: 13
description: Brief description for SEO (60 chars)
keywords: ['keyword1', 'keyword2', 'keyword3']
related: ['Related Article 1', 'Related Article 2']
---

## Introduction

Start with an introduction...

## Main Section

Content with details...

## Conclusion

Wrap up the article...
```

**Required Fields**:

- `title` — Display name
- `slug` — URL identifier (no spaces, lowercase)
- `order` — Sort order in sidebar
- `description` — SEO description
- `keywords` — Tag words
- `related` — Related article titles (must exist)

## Troubleshooting

### Build fails

```bash
rm -rf .next
pnpm install
pnpm build
```

### Site not live after push

1. Wait 2-5 minutes
2. Check Actions tab for workflow status
3. Verify GitHub Pages settings point to GitHub Actions
4. Hard refresh: Ctrl+Shift+R

### Links broken

- Make sure `NEXT_PUBLIC_BASE_PATH` in workflow matches your repo name
- Test locally: `pnpm build && pnpm start`

### Styling looks wrong

- Clear browser cache: Ctrl+Shift+Delete
- Hard refresh: Ctrl+Shift+R
- Check DevTools (F12) Network tab for CSS loads

## Performance

Test your site:

1. Open site in Chrome
2. Press F12 (DevTools)
3. Go to Lighthouse tab
4. Run Performance audit
5. Should see 95+ scores

## Customization Basics

### Change theme colors

Edit `tailwind.config.ts` and `app/globals.css`

### Change navigation

Edit `components/wiki/sidebar-nav.tsx`

### Change article layout

Edit `app/wiki/[slug]/page.tsx`

### Change fonts

Edit `app/layout.tsx`

## What's Included

✅ 12 polished sci-fi articles
✅ Responsive design (mobile-first)
✅ Dark theme with muted colors
✅ Automatic GitHub Pages deployment
✅ Zero-cost hosting
✅ Perfect performance scores
✅ Search-ready structure
✅ Complete documentation

## Next Steps

1. **Local**: `pnpm install && pnpm dev`
2. **Deploy**: Follow "Deploy to GitHub Pages" section above
3. **Share**: Tell people about your wiki!
4. **Extend**: Add more articles anytime

## Full Documentation

- **README.md** — Full project overview
- **DEPLOYMENT.md** — Detailed deployment guide
- **SETUP_CHECKLIST.md** — Complete setup checklist
- **GITHUB_PAGES_SETUP.md** — Technical reference
- **PROJECT_SUMMARY.md** — Complete feature list

## Support

### Stuck on step?

See full guides in docs folder above ↑

### GitHub Pages issues?

https://docs.github.com/en/pages

### Next.js questions?

https://nextjs.org/docs

---

**That's it! Your wiki is ready to deploy!**
