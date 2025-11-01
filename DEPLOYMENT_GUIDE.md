# 🚀 Deployment Guide - React Task Manager

This guide will walk you through deploying your React application to Vercel, Netlify, or GitHub Pages.

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the easiest option and works great with Vite + React projects.

### Steps:

1. **Go to Vercel Website**
   - Visit [https://vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account (click "Continue with GitHub")

2. **Import Your Repository**
   - Click "Add New..." → "Project"
   - Find your repository: `react-js-jsx-and-css-mastering-front-end-development-mwangiucs`
   - Click "Import"

3. **Configure Project Settings**
   Vercel should auto-detect Vite, but verify:
   - **Framework Preset:** Vite (should be auto-detected)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `dist` (auto-filled)
   - **Install Command:** `npm install` (auto-filled)

4. **Deploy**
   - Click "Deploy" button
   - Wait 1-2 minutes for build to complete
   - You'll get a URL like: `https://your-app-name.vercel.app`

5. **Update README.md**
   - Copy your deployed URL
   - Update the "Live Demo" section in README.md with your URL

**That's it!** Your app is live and will auto-deploy on every push to GitHub.

---

## Option 2: Deploy to Netlify

### Steps:

1. **Go to Netlify Website**
   - Visit [https://netlify.com](https://netlify.com)
   - Sign up/Login with your GitHub account

2. **Import Your Repository**
   - Click "Add new site" → "Import an existing project"
   - Click "Deploy with GitHub"
   - Authorize Netlify to access your GitHub
   - Select your repository: `react-js-jsx-and-css-mastering-front-end-development-mwangiucs`

3. **Configure Build Settings**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click "Show advanced" if needed
   - **Base directory:** Leave empty (or `./`)

4. **Deploy**
   - Click "Deploy site"
   - Wait 1-2 minutes for build
   - You'll get a URL like: `https://random-name-123.netlify.app`

5. **Customize Domain (Optional)**
   - Go to Site settings → Change site name
   - You can change it to something like: `your-name-task-manager`

6. **Update README.md**
   - Copy your deployed URL
   - Update the "Live Demo" section in README.md

---

## Option 3: Deploy to GitHub Pages

### Steps:

1. **Install gh-pages Package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   
   Add these scripts and homepage field:
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview",
       "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://PLP-MERN-Stack-Development.github.io/react-js-jsx-and-css-mastering-front-end-development-mwangiucs"
   }
   ```

3. **Update vite.config.js for GitHub Pages**
   
   Add base path:
   ```js
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/react-js-jsx-and-css-mastering-front-end-development-mwangiucs/'
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your GitHub repository
   - Settings → Pages
   - Source: Select "gh-pages" branch
   - Save

6. **Wait and Access**
   - Wait 1-2 minutes
   - Your app will be at: `https://PLP-MERN-Stack-Development.github.io/react-js-jsx-and-css-mastering-front-end-development-mwangiucs/`

7. **Update README.md**
   - Add the GitHub Pages URL to the "Live Demo" section

---

## 📝 Update README.md After Deployment

After deploying, update your README.md file:

1. Find the "Live Demo" section (around line 176)
2. Replace the placeholder with your actual URL:

```markdown
## 🔗 Live Demo

https://your-app-name.vercel.app
```

Or for GitHub Pages:

```markdown
## 🔗 Live Demo

https://PLP-MERN-Stack-Development.github.io/react-js-jsx-and-css-mastering-front-end-development-mwangiucs/
```

3. Commit and push the update:
   ```bash
   git add README.md
   git commit -m "Add deployed URL to README"
   git push origin main
   ```

---

## ⚠️ Troubleshooting

### Build Fails on Vercel/Netlify

- Check that all dependencies are in `package.json` (not just devDependencies)
- Ensure `node_modules` is in `.gitignore` (it should be)
- Check build logs for specific errors

### GitHub Pages Routing Issues

- If using React Router, you may need a `404.html` file that redirects to `index.html`
- Or use HashRouter instead of BrowserRouter

### Images Not Loading

- Make sure image paths use relative paths or absolute URLs
- For GitHub Pages, ensure paths start with `/` or use the base path

---

## ✅ Quick Recommendation

**For easiest setup:** Use **Vercel** - it auto-detects Vite projects and requires minimal configuration.

**For free hosting with custom domain:** Use **Netlify** - great free tier.

**For everything on GitHub:** Use **GitHub Pages** - keeps everything in one place.

---

Need help? Check the official docs:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [GitHub Pages Docs](https://docs.github.com/pages)

