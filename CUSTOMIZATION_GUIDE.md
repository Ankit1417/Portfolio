# Portfolio Customization Guide

This guide will help you personalize your portfolio website with your own information, photos, and links.

## 🎯 Quick Customization Checklist

### 1. Personal Information & Links

#### Hero Section (`src/components/Hero.jsx`)
- [ ] Update Upwork profile link (line 47)
  ```jsx
  href="https://www.upwork.com/freelancers/~YOUR-ACTUAL-PROFILE"
  ```
- [ ] Add your resume file to `/public/resume.pdf`
- [ ] Replace the placeholder profile image with your photo (see instructions below)

#### Contact Section (`src/components/Contact.jsx`)
- [ ] Update email address (line 23)
- [ ] Update phone number (line 28)
- [ ] Update location (line 33)
- [ ] Update LinkedIn URL (line 42)
- [ ] Update GitHub URL (line 47)
- [ ] Update Upwork URL (lines 52 and 94)

### 2. Add Your Professional Photo

**Option 1: Replace the placeholder in Hero section**

1. Add your photo to `/public/` folder (e.g., `profile.jpg`)
2. In `src/components/Hero.jsx`, replace the placeholder div (lines 76-84) with:

```jsx
<div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
  <img 
    src="/profile.jpg" 
    alt="Ankit Gupta" 
    className="w-full h-full object-cover"
  />
</div>
```

**Option 2: Keep the modern gradient design**
- The current design uses a modern gradient circle with initials "AG"
- You can change the initials in line 82 of `Hero.jsx`

### 3. Update Projects

In `src/components/Projects.jsx`, customize the projects array (starting at line 12):

```jsx
{
  title: "Your Project Name",
  subtitle: "Project Type",
  description: "Your project description...",
  tech: ["Tech1", "Tech2", "Tech3"],
  icon: <YourIcon className="w-8 h-8" />,
  gradient: "from-blue-500 to-cyan-500",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4"
  ]
}
```

**Add Project Links:**
- Update the "View Project" button (line 123) with your live demo URL
- Update the "Source Code" button (line 128) with your GitHub repository URL

### 4. Customize Skills

In `src/components/Skills.jsx`, modify the `skillCategories` array (line 18):

- Add or remove skill categories
- Update individual skills within each category
- Modify the "Additional Competencies" section (line 97)

### 5. Update Education

In `src/components/Education.jsx`:

- [ ] Update institution name (line 50)
- [ ] Update location (line 60)
- [ ] Update duration/graduation year (line 70)
- [ ] Modify focus areas (lines 76-87)

### 6. About Me Section

In `src/components/About.jsx`:

- [ ] Customize the introduction paragraphs (lines 55-76)
- [ ] Update the highlights cards if needed (lines 17-36)

### 7. Contact Form Integration

The contact form in `src/components/Contact.jsx` currently shows an alert. To integrate with a backend:

**Option 1: Use EmailJS**
```bash
npm install @emailjs/browser
```

**Option 2: Use Formspree**
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 3: Create your own API endpoint**

### 8. Color Scheme (Optional)

To change colors, edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#YOUR_PRIMARY_COLOR',
  secondary: '#YOUR_SECONDARY_COLOR',
  accent: '#YOUR_ACCENT_COLOR',
  background: '#YOUR_BACKGROUND_COLOR',
}
```

### 9. Fonts (Optional)

To change fonts, update `index.html` (line 8) and `tailwind.config.js`:

1. Choose a font from [Google Fonts](https://fonts.google.com/)
2. Update the link in `index.html`
3. Update `fontFamily` in `tailwind.config.js`

### 10. Add Analytics (Optional)

**Google Analytics:**

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Testing Your Changes

After making changes:

1. Save all files
2. Check the browser (should auto-reload with Vite)
3. Test on mobile view (use browser dev tools)
4. Verify all links work correctly

## 📱 Mobile Responsiveness

The portfolio is fully responsive. Test these breakpoints:

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🎨 Design Tips

1. **Images**: Use high-quality, professional photos (minimum 1000px width)
2. **Resume**: Keep PDF under 2MB for faster downloads
3. **Projects**: Include screenshots or demo videos
4. **Consistency**: Maintain consistent tone and style across all sections
5. **Links**: Double-check all external links before deployment

## ❓ Need Help?

If you encounter issues:

1. Check the browser console for errors
2. Verify all imports are correct
3. Ensure all files are saved
4. Restart the dev server: `npm run dev`

---

**Happy Customizing! 🎉**
