# Deployment Guide

This guide covers multiple deployment options for your portfolio website.

## 🚀 Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel offers the simplest deployment with automatic builds and custom domains.

**Steps:**

1. **Create a Vercel account** at [vercel.com](https://vercel.com)

2. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

3. **Deploy via CLI**:
   ```bash
   cd a:/port
   vercel
   ```
   Follow the prompts and your site will be live!

4. **Or Deploy via GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite and deploy

**Custom Domain:**
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

---

### Option 2: Netlify

Netlify is another excellent option with drag-and-drop deployment.

**Method 1: Drag & Drop**

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://www.netlify.com/)
3. Drag the `dist` folder to the deploy area
4. Your site is live!

**Method 2: GitHub Integration**

1. Push code to GitHub
2. Go to [netlify.com](https://www.netlify.com/)
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Custom Domain:**
- Go to Site Settings → Domain Management
- Add custom domain and configure DNS

---

### Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

**Steps:**

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `package.json`**:
   ```json
   {
     "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update `vite.config.js`**:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/YOUR-REPO-NAME/'
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

---

### Option 4: Firebase Hosting

Google's Firebase offers fast, secure hosting with SSL.

**Steps:**

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Initialize Firebase**:
   ```bash
   firebase init hosting
   ```
   - Choose "Use an existing project" or create new
   - Public directory: `dist`
   - Single-page app: Yes
   - GitHub auto-deploy: Optional

4. **Build your project**:
   ```bash
   npm run build
   ```

5. **Deploy**:
   ```bash
   firebase deploy
   ```

---

### Option 5: AWS S3 + CloudFront

For enterprise-level hosting with AWS.

**Steps:**

1. **Build your project**:
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**:
   - Go to AWS S3 Console
   - Create bucket with unique name
   - Enable static website hosting
   - Upload `dist` folder contents

3. **Configure CloudFront** (optional, for CDN):
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure SSL certificate

4. **Set up Route 53** for custom domain (optional)

---

## 🔧 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All personal information is updated
- [ ] All links work correctly (Upwork, LinkedIn, GitHub)
- [ ] Resume PDF is added to `/public/resume.pdf`
- [ ] Contact form is configured (if using backend)
- [ ] Professional photo is added (if desired)
- [ ] All project links are valid
- [ ] Site tested on mobile and desktop
- [ ] No console errors in browser
- [ ] Build completes successfully: `npm run build`

## 🌐 Custom Domain Setup

### General Steps (applies to most platforms):

1. **Purchase domain** from:
   - Namecheap
   - GoDaddy
   - Google Domains
   - Cloudflare

2. **Configure DNS**:
   - Add A record or CNAME record
   - Point to your hosting provider's servers
   - Wait for DNS propagation (up to 48 hours)

3. **Enable HTTPS**:
   - Most platforms (Vercel, Netlify) auto-configure SSL
   - For others, use Let's Encrypt

## 📊 Analytics Setup

### Google Analytics

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Vercel Analytics

If using Vercel, add to `package.json`:

```bash
npm install @vercel/analytics
```

In `src/main.jsx`:

```javascript
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
)
```

## 🔍 SEO Optimization

1. **Update meta tags** in `index.html`:
   ```html
   <meta name="description" content="Your custom description">
   <meta name="keywords" content="data analyst, full stack developer, MERN">
   <meta property="og:title" content="Ankit Gupta - Portfolio">
   <meta property="og:description" content="Your description">
   <meta property="og:image" content="/og-image.jpg">
   ```

2. **Add sitemap.xml** to `/public/sitemap.xml`

3. **Add robots.txt** to `/public/robots.txt`:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://yourdomain.com/sitemap.xml
   ```

## 🐛 Troubleshooting

### Build Fails
- Check for syntax errors
- Ensure all dependencies are installed: `npm install`
- Clear cache: `rm -rf node_modules dist` then `npm install`

### 404 on Refresh (SPA routing)
- Configure your hosting for SPA:
  - **Vercel**: Auto-configured
  - **Netlify**: Add `_redirects` file in `/public`:
    ```
    /*    /index.html   200
    ```
  - **GitHub Pages**: Already configured in deployment steps

### Slow Loading
- Optimize images (use WebP format, compress)
- Enable CDN (CloudFront, Cloudflare)
- Lazy load images

## 📞 Support

If you encounter deployment issues:

1. Check hosting provider's documentation
2. Review build logs for errors
3. Test locally first: `npm run build && npm run preview`
4. Ensure all environment variables are set (if any)

---

**Your portfolio is ready to go live! Choose your preferred platform and deploy. 🚀**
