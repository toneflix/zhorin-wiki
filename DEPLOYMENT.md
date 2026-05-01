# Deploying Zhorin Wiki to GitHub Pages

This guide walks through deploying the Zhorin Wiki to GitHub Pages as a project site.

## Prerequisites

- GitHub account
- Git installed locally
- Repository created on GitHub (e.g., `zhorin-wiki`)

## Step-by-Step Deployment

### 1. Download & Setup Local Repository

If you don't already have this as a git repository:

```bash
git init
git add .
git commit -m "Initial commit: Zhorin Wiki"
```

### 2. Add Remote & Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/zhorin-wiki.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username and `zhorin-wiki` with your repo name.

### 3. Configure GitHub Pages

**Important**: We're using GitHub Actions for automatic deployment.

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Select **Source**: "GitHub Actions"
   - This enables automatic deployment from the workflow

### 4. Update Workflow with Repository Name

The deployment workflow uses the `NEXT_PUBLIC_BASE_PATH` environment variable to serve from your repository subdirectory.

**Edit `.github/workflows/deploy.yml`:**

Find this line:
```yaml
NEXT_PUBLIC_BASE_PATH: /zhorin-wiki
```

Replace `zhorin-wiki` with your actual repository name. For example:
- If repo is `my-wiki` → `/my-wiki`
- If repo is `zhorin-universe` → `/zhorin-universe`

### 5. Commit & Push

```bash
git add .github/workflows/deploy.yml
git commit -m "Update workflow base path"
git push
```

### 6. Wait for Deployment

1. Go to your repository
2. Click **Actions** tab
3. You should see "Deploy to GitHub Pages" workflow running
4. Wait for it to complete (usually <2 minutes)
5. Once complete, visit:
   ```
   https://YOUR_USERNAME.github.io/your-repo-name
   ```

## Verifying the Deployment

Once the workflow completes:

1. ✅ Home page loads at `https://username.github.io/repo-name`
2. ✅ Wiki index accessible at `/wiki`
3. ✅ Articles accessible at `/wiki/the-zhorin` (etc.)
4. ✅ Sidebar navigation works on desktop
5. ✅ Mobile layout is responsive

## What Gets Deployed

The GitHub Actions workflow:

1. ✅ Installs dependencies (`pnpm install`)
2. ✅ Builds static site (`next build`)
3. ✅ Uploads `/out` directory to GitHub Pages
4. ✅ Serves files on GitHub's CDN

**Result**: Pure static HTML/CSS/JavaScript—no server required.

## Updating Content

After initial deployment, updates are automatic:

### To add a new article:

1. Create `/content/wiki/XX-article-name.mdx`
2. Add required frontmatter
3. Commit & push: `git add . && git commit -m "Add article" && git push`
4. GitHub Actions automatically rebuilds and deploys

### To update existing articles:

1. Edit the `.mdx` file
2. Commit & push
3. Automatic rebuild and deployment

### To change styling:

1. Edit component files in `/components/`
2. Commit & push
3. Automatic rebuild and deployment

**No manual deployment steps needed—everything is automatic!**

## Custom Domain (Optional)

If you want to use `yoursite.com` instead of `username.github.io/repo-name`:

### 1. Update Next.js Config

Edit `next.config.mjs` and change:

```javascript
basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
```

Also update the workflow to use empty base path:

```yaml
# In .github/workflows/deploy.yml
NEXT_PUBLIC_BASE_PATH: ''  # Changed from /zhorin-wiki
```

### 2. Configure GitHub Pages

1. Settings → Pages
2. Under "Custom domain", enter your domain: `yoursite.com`
3. GitHub creates a CNAME file automatically

### 3. Update DNS

Point your domain registrar to GitHub Pages:

```
CNAME: username.github.io
```

Or use A records (GitHub provides specific IPs).

### 4. Deploy

```bash
git push
# GitHub Actions rebuilds with updated basePath
```

Your site is now live at `https://yoursite.com`

## Troubleshooting

### Pages not showing after workflow completes

1. Check Settings → Pages shows "GitHub Actions" as source
2. Check the workflow file has your correct repo name in `NEXT_PUBLIC_BASE_PATH`
3. Try a hard refresh: `Ctrl+Shift+R` (Cmd+Shift+R on Mac)

### Build fails in GitHub Actions

1. Go to Actions tab → latest workflow run
2. Click the failed job to see logs
3. Common issues:
   - Wrong base path in workflow
   - Missing dependencies (should auto-install)
   - Node version mismatch (usually fixed by GitHub)

### Links in wiki don't work

1. Verify `NEXT_PUBLIC_BASE_PATH` in workflow matches repo name
2. Check that all article links use relative paths (e.g., `/wiki/the-zhorin`)
3. Clear browser cache: `Ctrl+Shift+Delete`

### Styling looks broken

1. Check that base path is correctly set
2. Images and assets should load from root (`/icon.svg` etc.)
3. CSS should be properly namespaced via Tailwind

## Local Testing Before Deploy

Always test locally before pushing:

```bash
# Build for static export
pnpm build

# Start production server
pnpm start

# Test all links and styling
```

This matches what GitHub Pages will serve.

## Performance Monitoring

Once deployed, your site gets:

- ✅ Fast CDN delivery (GitHub's infrastructure)
- ✅ Zero server latency (pure static files)
- ✅ Automatic caching (browser cache + CDN)
- ✅ Perfect Lighthouse scores

Monitor performance:
1. Visit your site
2. Open DevTools (F12) → Lighthouse
3. Run performance audit
4. Should see 95+ scores across the board

## Next Steps

After deployment:

1. **Share your wiki** - Update GitHub repository description with link
2. **Add more articles** - Create new `.mdx` files in `/content/wiki/`
3. **Customize styling** - Edit Tailwind config or components
4. **Promote content** - Embed links in your website/social media
5. **Gather feedback** - Monitor GitHub Issues for reader comments

## Support

### For GitHub Pages issues:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)

### For Next.js issues:
- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Next.js GitHub Issues](https://github.com/vercel/next.js/issues)

### For this project:
- See [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) for detailed technical info
- See [README.md](./README.md) for general project documentation

---

**Your wiki is now live on GitHub Pages!** 🚀
