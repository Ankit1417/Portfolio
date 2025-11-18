# Quick Start Guide

Get your portfolio website running in 3 simple steps!

## 🚀 Installation & Setup

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including React, Vite, Tailwind CSS, and Framer Motion.

### Step 2: Start Development Server

```bash
npm run dev
```

Your portfolio will be available at: **http://localhost:5173**

### Step 3: Open in Browser

Navigate to `http://localhost:5173` in your web browser.

---

## 📝 Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## ✏️ First Customizations

Before deploying, update these essential items:

### 1. Personal Links (Priority)

**File: `src/components/Hero.jsx`**
- Line 47: Update Upwork profile URL

**File: `src/components/Contact.jsx`**
- Line 23: Your email
- Line 28: Your phone number
- Line 42: LinkedIn URL
- Line 47: GitHub URL
- Line 52: Upwork URL

### 2. Add Your Resume

Place your resume PDF in: `/public/resume.pdf`

### 3. Update Projects

**File: `src/components/Projects.jsx`**
- Add your project details
- Update tech stacks
- Add project links

---

## 🎨 Project Structure

```
a:/port/
├── src/
│   ├── components/      # All React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
└── package.json        # Dependencies
```

---

## 🌈 Features Included

✅ **Responsive Design** - Works on all devices  
✅ **Smooth Animations** - Powered by Framer Motion  
✅ **Modern UI** - Clean, professional design  
✅ **Contact Form** - Ready to integrate  
✅ **Project Showcase** - Display your work  
✅ **Skills Section** - Highlight your expertise  
✅ **SEO Ready** - Optimized meta tags  

---

## 🔧 Troubleshooting

### Port Already in Use?

If port 5173 is busy, Vite will automatically use the next available port.

### Changes Not Showing?

1. Save all files
2. Check browser console for errors
3. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

### Build Errors?

```bash
# Clear and reinstall
rm -rf node_modules dist
npm install
npm run dev
```

---

## 📚 Next Steps

1. ✅ Get the site running locally
2. 📝 Customize with your information (see `CUSTOMIZATION_GUIDE.md`)
3. 🎨 Adjust colors/fonts if desired
4. 📸 Add your professional photo
5. 🚀 Deploy to production (see `DEPLOYMENT_GUIDE.md`)

---

## 💡 Pro Tips

- **Hot Reload**: Vite automatically reloads when you save files
- **Mobile Testing**: Use browser DevTools (F12) to test responsive design
- **Performance**: Run `npm run build` to check production bundle size
- **Accessibility**: Test with keyboard navigation and screen readers

---

## 🆘 Need Help?

- **Customization**: See `CUSTOMIZATION_GUIDE.md`
- **Deployment**: See `DEPLOYMENT_GUIDE.md`
- **Full Details**: See `README.md`

---

**Happy Building! 🎉**

Your professional portfolio is ready to showcase your skills to the world!
