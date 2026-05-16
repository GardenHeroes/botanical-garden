# Netlify Deployment Guide

## Step-by-Step Deployment Instructions

### Prerequisites
- GitHub account (free)
- Netlify account (free)
- Git installed locally

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository called `botanical-garden`
3. Do NOT initialize with README (we already have one)
4. Click "Create repository"

### Step 2: Push Your Project to GitHub

In the project directory (`/Users/louiebalouie/botanical-garden`), run:

```bash
# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/botanical-garden.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Connect to Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Log in (or sign up for free with GitHub)
3. Click "Add new site" → "Import an existing project"
4. Select GitHub as the provider
5. Authorize Netlify to access your GitHub repositories
6. Select the `botanical-garden` repository
7. Configure build settings:
   - **Branch to deploy:** main
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** dist
8. Click "Deploy site"

### Step 4: Wait for Deployment

- Netlify will automatically build and deploy your site
- Watch the deployment progress in the Netlify dashboard
- Once complete, you'll see: "Your site is live!"
- Your live URL will be: `https://your-site-name.netlify.app`

### Step 5 (Optional): Custom Domain

1. Go to your Netlify site settings
2. Click "Domain management"
3. Click "Add custom domain"
4. Enter your domain (e.g., `botanicalgarden.com`)
5. Follow DNS configuration instructions
6. Wait 24-48 hours for DNS propagation

## Automatic Deployments

Once connected, Netlify automatically deploys when you:

```bash
# Make changes locally
git add .
git commit -m "Update content"
git push origin main
```

Your site updates automatically within seconds!

## Environment Variables (If Needed)

If you add API keys or secrets later:

1. Go to Netlify site → Settings → Build & deploy → Environment
2. Add variables as `KEY=VALUE` pairs
3. Redeploy by pushing to GitHub

## Build Logs & Debugging

If deployment fails:

1. Check Netlify dashboard for build logs
2. Common issues:
   - Missing dependencies → Run `npm install` locally
   - Node version mismatch → Check `.nvmrc` or specify in Netlify settings
   - TypeScript errors → Fix before pushing

## Your Live URL

After deployment, your site will be accessible at:

```
https://botanical-garden-YOUR-NAME.netlify.app
```

Share this URL with others!

## Rollback to Previous Deploy

If something goes wrong:

1. Netlify dashboard → "Deploys"
2. Click on a previous successful deploy
3. Click "Publish deploy"
4. Your site reverts instantly

---

**Need help?** Visit [Netlify Docs](https://docs.netlify.com/)
