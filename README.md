# Ankit Gupta - Portfolio Website

A modern, clean, and professional portfolio website showcasing the work of Ankit Gupta, a Data Analyst and Full Stack MERN Developer.

## 🌟 Features

- **Modern Design**: Clean, minimal interface with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works seamlessly on all devices
- **Interactive Sections**: 
  - Hero section with professional tagline and CTAs
  - About Me with highlights and strengths
  - Skills showcase with categorized technical expertise
  - Featured projects with detailed descriptions
  - Education background
  - Contact form with social links
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Professional Color Palette**: Indigo Blue (#4F46E5) and Cyan (#06B6D4) theme

## 🚀 Tech Stack

- **React 18.2** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **Framer Motion 10** - Animation library
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. **Clone the repository** (or navigate to the project directory):
   ```bash
   cd a:/port
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:5173
   ```

## 🛠️ Build for Production

To create a production-ready build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

## 📝 Customization

### Update Personal Information

1. **Contact Details**: Edit `src/components/Contact.jsx`
   - Update email, phone, and location
   - Add your social media links (LinkedIn, GitHub, Upwork)

2. **Projects**: Edit `src/components/Projects.jsx`
   - Add/remove projects
   - Update project descriptions and tech stacks
   - Add project links and GitHub repositories

3. **Skills**: Edit `src/components/Skills.jsx`
   - Modify skill categories
   - Add or remove technologies

4. **Hero Section**: Edit `src/components/Hero.jsx`
   - Update Upwork profile link
   - Add resume file to `/public/resume.pdf`

5. **Profile Photo**: Replace the placeholder in `src/components/Hero.jsx`
   - Add your professional photo to `/public` folder
   - Update the image source in the Hero component

### Color Customization

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#4F46E5',    // Indigo Blue
  secondary: '#06B6D4',  // Cyan
  accent: '#0F172A',     // Navy/Deep Slate
  background: '#F9FAFB', // Light Gray-White
}
```

## 📂 Project Structure

```
a:/port/
├── public/
│   └── resume.pdf (add your resume here)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🎨 Design Guidelines

- **Typography**: Inter font family for clean, modern look
- **Spacing**: Consistent padding and whitespace throughout
- **Animations**: Subtle hover effects and smooth scroll interactions
- **Accessibility**: Semantic HTML and proper contrast ratios

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to Netlify

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 📧 Contact

For any questions or suggestions, feel free to reach out:

- **Email**: ankit.gupta@example.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]
- **Upwork**: [Your Upwork Profile]

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ using React & Tailwind CSS**
