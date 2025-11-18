# Troubleshooting Guide

Common issues and their solutions.

## 🔧 Installation Issues

### Problem: `npm install` fails

**Solution 1: Clear npm cache**
```bash
npm cache clean --force
npm install
```

**Solution 2: Delete node_modules and reinstall**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Solution 3: Use different Node version**
- Ensure you're using Node.js 16+ 
- Check version: `node --version`
- Update if needed from [nodejs.org](https://nodejs.org)

---

## 🚀 Development Server Issues

### Problem: Port 5173 already in use

**Solution:**
Vite will automatically use the next available port. Check the terminal output for the actual port.

Or manually specify a port in `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})
```

### Problem: Changes not reflecting in browser

**Solutions:**
1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Restart dev server: Stop (`Ctrl + C`) and run `npm run dev` again
4. Check if file is saved
5. Check browser console for errors

### Problem: "Cannot find module" error

**Solution:**
```bash
npm install
```

If specific package is missing:
```bash
npm install package-name
```

---

## 🎨 Styling Issues

### Problem: Tailwind classes not working

**Solutions:**
1. Ensure `index.css` is imported in `main.jsx`
2. Check `tailwind.config.js` content paths
3. Restart dev server
4. Clear browser cache

### Problem: Fonts not loading

**Solution:**
1. Check internet connection (Google Fonts requires internet)
2. Verify font link in `index.html`
3. Check browser console for font loading errors

---

## 🖼️ Image Issues

### Problem: Images not displaying

**Solutions:**
1. Ensure images are in `/public` folder
2. Use correct path: `/image.jpg` (not `./image.jpg`)
3. Check file name spelling and case sensitivity
4. Verify image file format is supported (jpg, png, svg, webp)

### Problem: Images too large / slow loading

**Solution:**
1. Compress images using tools like:
   - [TinyPNG](https://tinypng.com)
   - [Squoosh](https://squoosh.app)
2. Resize to appropriate dimensions
3. Use WebP format for better compression

---

## 📱 Responsive Design Issues

### Problem: Layout breaks on mobile

**Solutions:**
1. Test using browser DevTools (F12 → Toggle Device Toolbar)
2. Check Tailwind responsive classes (sm:, md:, lg:)
3. Verify viewport meta tag in `index.html`
4. Test on actual devices

### Problem: Text too small on mobile

**Solution:**
Use responsive text sizes:
```jsx
<h1 className="text-2xl md:text-4xl lg:text-6xl">
```

---

## ⚡ Performance Issues

### Problem: Slow page load

**Solutions:**
1. Optimize images (compress and resize)
2. Check bundle size: `npm run build`
3. Use lazy loading for images
4. Remove unused dependencies
5. Enable production build optimizations

### Problem: Large bundle size

**Solutions:**
1. Check what's included: `npm run build`
2. Remove unused imports
3. Use dynamic imports for large components
4. Consider code splitting

---

## 🔗 Link Issues

### Problem: Links not working

**Solutions:**
1. Check href attribute is correct
2. For external links, use full URL with `https://`
3. Verify `target="_blank"` for external links
4. Check for typos in URLs

### Problem: Smooth scroll not working

**Solution:**
Ensure `scroll-behavior: smooth` is in `index.css`:
```css
html {
  scroll-behavior: smooth;
}
```

---

## 📝 Form Issues

### Problem: Contact form not submitting

**Current Status:**
The form shows an alert by default. To make it functional:

**Solution 1: Use EmailJS**
```bash
npm install @emailjs/browser
```

**Solution 2: Use Formspree**
Update form action:
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Solution 3: Create backend API**
Update `handleSubmit` function in `Contact.jsx`

---

## 🏗️ Build Issues

### Problem: Build fails

**Solutions:**
1. Check for syntax errors in code
2. Ensure all imports are correct
3. Run `npm run lint` to find issues
4. Check browser console for errors
5. Clear dist folder: `rm -rf dist`

### Problem: Build succeeds but site doesn't work

**Solutions:**
1. Test locally: `npm run preview`
2. Check browser console for errors
3. Verify all assets are in `/public` folder
4. Check base path in `vite.config.js`

---

## 🌐 Deployment Issues

### Problem: 404 on page refresh (SPA routing)

**Solution:**
Add routing configuration:

**Netlify:** Create `/public/_redirects`:
```
/* /index.html 200
```

**Vercel:** Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**GitHub Pages:** Already configured in deployment steps

### Problem: Assets not loading after deployment

**Solutions:**
1. Check asset paths (use `/` not `./`)
2. Verify base URL in `vite.config.js`
3. Check deployment platform's asset handling
4. Ensure all files are in build output

### Problem: Environment variables not working

**Solutions:**
1. Prefix with `VITE_`: `VITE_API_KEY`
2. Add to deployment platform's environment settings
3. Restart build after adding variables
4. Access with `import.meta.env.VITE_API_KEY`

---

## 🎭 Animation Issues

### Problem: Animations not working

**Solutions:**
1. Ensure Framer Motion is installed: `npm install framer-motion`
2. Check browser console for errors
3. Verify component is in viewport
4. Test on different browsers

### Problem: Animations laggy

**Solutions:**
1. Reduce animation complexity
2. Use `will-change` CSS property sparingly
3. Optimize images and assets
4. Test on different devices

---

## 🔍 SEO Issues

### Problem: Site not appearing in search results

**Solutions:**
1. Submit sitemap to Google Search Console
2. Verify meta tags in `index.html`
3. Ensure content is crawlable
4. Add robots.txt to `/public`
5. Wait (indexing takes time)

---

## 🌈 Browser Compatibility Issues

### Problem: Site looks different in Safari

**Solutions:**
1. Test with Safari-specific prefixes
2. Check for unsupported CSS features
3. Use autoprefixer (already configured)
4. Test on actual Safari browser

### Problem: Animations not working in Firefox

**Solutions:**
1. Check browser console for errors
2. Verify Framer Motion compatibility
3. Test with CSS fallbacks

---

## 💻 Development Environment Issues

### Problem: ESLint errors

**Solutions:**
1. Fix reported issues
2. Disable specific rules in `.eslintrc.cjs` if needed
3. Run `npm run lint` to see all issues

### Problem: Git issues

**Solutions:**
1. Ensure `.gitignore` is configured
2. Don't commit `node_modules` or `dist`
3. Don't commit `.env` files

---

## 🆘 Still Having Issues?

### Debug Steps:
1. Check browser console (F12)
2. Check terminal output
3. Read error messages carefully
4. Search error on Google/Stack Overflow
5. Check if issue exists in fresh install

### Clean Slate:
```bash
# Complete reset
rm -rf node_modules dist package-lock.json
npm install
npm run dev
```

### Get Help:
- Check documentation files
- Review similar projects
- Ask in developer communities
- Check GitHub issues for dependencies

---

## 📊 Performance Optimization Tips

1. **Images**: Compress and use WebP
2. **Code**: Remove unused imports
3. **Fonts**: Limit font weights loaded
4. **Dependencies**: Only install what you need
5. **Build**: Use production build for deployment

---

**Most issues can be solved by:**
1. Reading error messages
2. Checking browser console
3. Restarting dev server
4. Clearing cache
5. Reinstalling dependencies

Good luck! 🚀
