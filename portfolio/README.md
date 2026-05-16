# Anup Sahu — Portfolio

## 📁 File Structure

```
portfolio/
├── index.html              ← Page skeleton (don't edit for content)
├── config.js               ← ✏️  YOUR DATA FILE — edit this for ALL changes
├── assets/
│   ├── css/
│   │   └── style.css       ← Visual styles, animations, colours
│   ├── js/
│   │   └── main.js         ← Renders config.js → HTML (don't edit for content)
│   ├── images/
│   │   ├── photo.jpg       ← 📸 Drop your photo here (update config.js → about.photo)
│   │   └── favicon.png     ← Optional favicon
│   └── resume.pdf          ← 📄 Drop your latest resume PDF here
└── README.md               ← This file
```

---

## ✏️ How to Edit Content

**Every piece of content lives in `config.js`.**  
Open it, find the section you want, edit, save, commit — done.

### Common edits:

| What to change | Where in config.js |
|---|---|
| Page title / SEO | `meta.title`, `meta.description`, `meta.keywords` |
| Hero tagline / description | `hero.tagline`, `hero.description` |
| Typewriter roles | `hero.roles[]` |
| About paragraphs | `about.paragraphs[]` |
| Stats (LeetCode solved etc.) | `about.stats[]` |
| Add/remove a skill tag | `skills[].tags[]` |
| Add a project | `projects[]` — copy an existing object |
| PortSwigger progress | `security.portswigger` |
| LeetCode stats | `security.leetcode` |
| Add a job | `experience[]` — copy an existing object, set `current: true` for latest |
| Add a cert | `certifications[]` |
| Social links | `contact.links[]` |
| Footer tagline | `footer.tagline` |

---

## 📸 Adding Your Photo

1. Save your photo as `assets/images/photo.jpg`
2. In `config.js`, make sure `about.photo` is `"assets/images/photo.jpg"`
3. Commit — the placeholder disappears automatically

For a different filename/format:
```js
about: {
  photo: "assets/images/anup.png",   // ← change to your actual filename
```

---

## 📄 Adding Your Resume

Drop your resume PDF into `assets/resume.pdf`.  
The "Resume ↗" button in the navbar links to it automatically.

---

## 🚀 Free Hosting Options

### Option 1 — GitHub Pages (recommended)
1. Push this folder to a GitHub repo named `<yourusername>.github.io`
2. Go to Settings → Pages → Source: `main` / `root`
3. Live at `https://superanup07.github.io` in ~1 minute

### Option 2 — Vercel
1. `npm i -g vercel` then `vercel` inside this folder  
   OR drag the folder to vercel.com
2. Live in ~30 seconds with a free `.vercel.app` domain

### Option 3 — Netlify Drop
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `portfolio/` folder
3. Live instantly with a free `.netlify.app` domain

---

## 🎨 Changing Colors / Fonts

Open `assets/css/style.css` and edit the `:root` block at the top:

```css
:root {
  --neon-green:  #00ff88;   /* primary accent */
  --neon-blue:   #00cfff;   /* secondary accent */
  --neon-purple: #bf5fff;   /* tertiary accent */
  --neon-orange: #ff6b35;   /* warning/cert accent */
  --dark-bg:     #050a0e;   /* page background */
  --dark-card:   #0a1520;   /* card background */
  --dark-card2:  #0d1f2d;   /* darker card */
  --text-primary:#e8f4f8;   /* main text */
  --text-muted:  #7a9bb5;   /* secondary text */
}
```

---

## 🔧 Adding a New Section

1. Add your data object to `config.js`  
2. Add a `<section>` block with placeholder divs in `index.html`  
3. Add a `renderMySection()` function in `main.js` that reads from config  
4. Call it in the `DOMContentLoaded` listener at the top of `main.js`

---

*Last updated: 2025*
