# 🎯 Anup Sahu - Portfolio

A modern, dark-themed cybersecurity analyst & full-stack developer portfolio with stunning album-style project gallery, live hosted project iframe views, and interactive features.

## ✨ Features

### 🎨 Design
- Modern dark cybersecurity-inspired theme
- Neon green, blue, purple, orange accent colors
- Smooth animations and scroll reveals
- Custom cursor with trail effect
- Particle background canvas
- Fully responsive (mobile, tablet, desktop)

### 📂 Project Gallery
- **Album-style layout** with project cards
- **Bloom effect** - Tech stack displayed in circular petals
- **Live project iframes** - See hosted projects directly
- **Color-coded projects** - Each project has unique color theme
- GitHub & Hosted project badges
- Direct links to projects & repositories

### 📊 Features Included
- **Cybersecurity Stats** - PortSwigger & LeetCode integration
- **Experience Timeline** - Work history with freelancer badge
- **Skills Grid** - Comprehensive tech stack
- **Education & Certifications** - Learning path display
- **Contact Form** - Formspree integration (ready)
- **Google Analytics** - Traffic tracking (ready)
- **Social Links** - LinkedIn, GitHub, Twitter, etc.

### 🎬 Animations
- Typewriter effect on hero section
- Glitch text effect
- Scroll reveal animations
- Smooth transitions
- Bloom petal animations
- 3D card transforms

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── config.js               # All content configuration
├── assets/
│   ├── css/
│   │   └── style.css       # All styling
│   ├── js/
│   │   └── main.js         # All JavaScript logic
│   └── images/
│       ├── photo.jpg       # Your profile photo
│       ├── favicon.png     # Browser tab icon
│       └── resume.pdf      # Your resume
└── README.md               # This file
```

## 🚀 Quick Start

### 1. Edit Content
Everything is in **`config.js`** - edit this file to update:
- Personal info (name, location, description)
- Hero tagline & roles
- About paragraphs & stats
- Skills categories
- Projects (name, description, tech stack, links)
- Security stats (PortSwigger, LeetCode)
- Experience entries
- Education & certifications
- Social contact links
- Footer info

### 2. Edit Styling
Everything is in **`assets/css/style.css`** - customize:
- Colors (--neon-green, --neon-blue, etc.)
- Fonts
- Animations
- Responsiveness

### 3. Add Your Media
Add to **`assets/images/`**:
- `photo.jpg` - Your profile photo (replace existing)
- `favicon.png` - Browser tab icon
- `resume.pdf` - Your resume PDF

### 4. Local Testing
Open `index.html` in your browser to test locally.

## 🔧 Configuration

### Update Projects
Edit `config.js` - `projects` array:
```javascript
{
  number: "01",
  name: "Project Name",
  description: "Short description",
  fullDescription: "Longer description",
  type: "hosted", // or "github"
  tech: ["React.js", "Node.js", "MongoDB"],
  icon: "🎨",
  color: "var(--neon-green)",
  links: [
    { label: "Live Demo", href: "https://..." },
  ],
}
```

### Update Skills
Edit `config.js` - `skills` array by category:
```javascript
{
  category: "// LANGUAGES",
  color: "var(--neon-green)",
  tags: ["JavaScript", "Python", "SQL", "Bash"],
}
```

### Update Experience
Edit `config.js` - `experience` array:
```javascript
{
  current: true,
  period: "JAN 2024 – PRESENT",
  role: "Senior Developer",
  company: "Tech Company",
  location: "City, State · On-site",
  color: "var(--neon-green)",
  bullets: ["Did X", "Did Y", "Did Z"],
  skills: ["React", "Node.js"],
}
```

## 📋 Forms & Analytics Setup

### Contact Form (Formspree)
1. Go to [formspree.io](https://formspree.io)
2. Create form and get your Form ID
3. In `index.html`, find line: `action="https://formspree.io/f/YOUR_FORM_ID"`
4. Replace `YOUR_FORM_ID` with your ID
5. ✅ Visitors can now submit contact forms!

### Google Analytics
1. Go to [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. In `index.html` head, find both instances of `G-XXXXXXXXXX`
4. Replace with your Measurement ID
5. ✅ Start tracking visitor data!

## 🌐 Deployment

### Recommended: Vercel (Easiest)
```bash
# 1. Create GitHub repo
# 2. Push your code
git push origin main

# 3. Go to vercel.com
# 4. Import your GitHub repository
# 5. Click Deploy
# Done! 🎉
```

**URL:** `yourname.vercel.app`

### Alternative: GitHub Pages
1. Create repo named `username.github.io`
2. Push portfolio to `main` branch
3. Enable GitHub Pages in Settings
4. ✅ Live at `https://username.github.io`

### Alternative: Netlify
1. Push code to GitHub
2. Go to netlify.com
3. Import repository
4. ✅ Live in minutes!

See **`HOSTING_GUIDE.md`** for detailed instructions.

## 🎨 Customization

### Change Colors
Edit `assets/css/style.css` `:root` section:
```css
:root {
  --neon-green:  #00ff88;    /* Primary accent */
  --neon-blue:   #00cfff;    /* Secondary accent */
  --neon-purple: #bf5fff;    /* Tertiary accent */
  --dark-bg:     #050a0e;    /* Background */
}
```

### Change Fonts
Edit `:root` in `style.css`:
```css
--font-mono:    'Space Mono', monospace;
--font-display: 'Orbitron', sans-serif;
--font-body:    'Rajdhani', sans-serif;
```

### Adjust Animations
Edit animations in `style.css`:
- `fadeUp` - Initial section reveals
- `scrollBob` - Scroll indicator bobbing
- `bloomExpand` - Project bloom effects
- `bloomPulse` - Center bloom pulsing

## ✅ Pre-Deployment Checklist

- [ ] Update all content in `config.js`
- [ ] Add your photo to `assets/images/photo.jpg`
- [ ] Add your resume to `assets/images/resume.pdf`
- [ ] Update project links and descriptions
- [ ] Set up Formspree Form ID in `index.html`
- [ ] Set up Google Analytics ID in `index.html`
- [ ] Test contact form locally
- [ ] Test all links work
- [ ] Test on mobile device
- [ ] Clear browser cache and test fresh
- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Deploy to Vercel/GitHub Pages/Netlify

## 🔗 Important Links

- **Formspree:** https://formspree.io
- **Google Analytics:** https://analytics.google.com
- **Vercel:** https://vercel.com
- **GitHub:** https://github.com
- **Netlify:** https://netlify.com

## 📞 Support

For issues:
1. Check browser console (F12 → Console tab)
2. Look for red error messages
3. Check file paths are correct
4. Verify all image files exist
5. Clear cache and reload (Ctrl+Shift+Delete, Ctrl+F5)

## 📝 License

This portfolio is your personal project. Feel free to customize and deploy!

---

**Built with ❤️ for your cybersecurity & development career**

Good luck showcasing your amazing skills! 🚀
