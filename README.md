# Botanical Garden Website

A beautiful, modern React + Vite website for a botanical garden with a premium minimalist design aesthetic.

## 🌿 Features

- **Fully Responsive Design** — Mobile-first, works seamlessly across all devices
- **Premium Design System** — Sage green, warm taupe, and cream color palette
- **10 Complete Pages:**
  - Home (with featured collections and newsletter signup)
  - About (mission, history, team, conservation)
  - Plants & Collections (browsable plant database)
  - Events (upcoming workshops and tours)
  - Visit (practical info, hours, admission)
  - Gallery (botanical photography)
  - Shop (plant products and merchandise)
  - Contact (contact form)
  - Blog (plant care tips and news)
  - Membership (supporter programs)

- **Modern Tech Stack** — React 18, Vite, React Router v6
- **Design System Tokens** — Color palette, typography rules, component styles
- **Smooth Animations** — Spring physics, micro-interactions, fade-ins
- **Accessible** — WCAG compliant, semantic HTML, proper contrast ratios

## 📁 Project Structure

```
botanical-garden/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Sticky navbar with logo and menu
│   │   ├── Navigation.css
│   │   ├── Footer.jsx          # Multi-column footer
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx            # Hero, featured collections, newsletter
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── Plants.jsx
│   │   ├── Events.jsx
│   │   ├── Visit.jsx
│   │   ├── Gallery.jsx
│   │   ├── Shop.jsx
│   │   ├── Contact.jsx
│   │   ├── Blog.jsx
│   │   ├── Membership.jsx
│   │   └── PageTemplate.css    # Shared page styling
│   ├── App.jsx                 # Router setup
│   ├── App.css
│   ├── index.css               # Global design system CSS
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── netlify.toml                # Netlify deployment config
└── .gitignore

.stitch/
├── DESIGN.md                   # Semantic design system
├── SITE.md                     # Site structure and roadmap
├── next-prompt.md              # Stitch-Loop baton
├── designs/                    # Stitch design outputs
└── metadata.json               # Stitch project metadata
```

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
```

Output: `dist/` directory ready for deployment

## 📦 Deployment to Netlify

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/botanical-garden.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your GitHub repo
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

3. **Auto-Deploy:**
   - Every push to main triggers automatic deployment
   - Your site will be live at `https://your-site-name.netlify.app`

### Option 2: Manual Deployment

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Visit [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist/` folder
   - Your site is live in seconds!

## 🎨 Design System

All styling follows the design tokens defined in `.stitch/DESIGN.md`:

**Colors:**
- Cream Canvas: `#F5F2ED` (primary background)
- Deep Charcoal: `#2C2C2C` (primary text)
- Sage Green: `#5B8E7D` (primary accent/CTAs)
- Warm Taupe: `#C9B8A3` (secondary text)
- Soft Olive: `#8B9D6F` (highlights)

**Typography:**
- Display: Outfit (Medium 600, track-tight)
- Body: Satoshi (Regular 400, relaxed leading)
- Mono: Geist Mono (metadata, timestamps)

**Components:**
- Buttons with spring physics hover states
- Cards with soft shadows and border accents
- Forms with focus rings and helper text
- Images with organic border radius

## 🔄 Stitch-Loop Integration

This project was built using the Stitch-Loop autonomous build pattern:

- `.stitch/SITE.md` — Project vision and roadmap
- `.stitch/DESIGN.md` — Semantic design system
- `.stitch/next-prompt.md` — Build task baton
- `.stitch/metadata.json` — Stitch project tracking

To continue building pages:
1. Update `.stitch/next-prompt.md` with the next page
2. Run Stitch generation
3. Convert output to React components
4. Commit and push to deploy

## 📋 Pages Built

- ✅ Home — Featured collections, newsletter signup
- ✅ About — Mission, history, team, conservation
- ✅ Plants & Collections — Plant database with filtering
- ✅ Events — Upcoming workshops and tours
- ✅ Visit — Hours, admission, accessibility
- ✅ Gallery — Botanical photography grid
- ✅ Shop — Products with cart functionality
- ✅ Contact — Contact form
- ✅ Blog — Plant care tips and news
- ✅ Membership — Supporter tier comparison

## 🚀 Next Steps

1. **Netlify Deployment:** Push to GitHub and connect to Netlify
2. **Content Updates:** Replace placeholder content and images
3. **E-commerce Integration:** Connect Shop to payment processor
4. **Event Booking:** Integrate with ticketing system
5. **CMS Integration:** Connect Blog to headless CMS (optional)
6. **Analytics:** Add Google Analytics or Plausible
7. **Email Setup:** Configure newsletter signup backend

## 📞 Support

For questions or to expand functionality:
- Update page components in `src/pages/`
- Modify design tokens in `src/index.css`
- Add new routes in `src/App.jsx`

---

Built with ❤️ using Stitch, React, and Vite
