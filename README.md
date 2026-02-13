# Eternia Website

A responsive marketing website for Eternia, a premium aluminium windows and doors brand by Hindalco (Aditya Birla Group). Built as part of the ARM React Assessment.

**Live stack:** Astro + React + Tailwind CSS

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Astro](https://astro.build) v4.15+ | Site framework (static output) |
| [React](https://react.dev) v18.3+ | Interactive components |
| [Tailwind CSS](https://tailwindcss.com) v3.4+ | Styling |
| [Framer Motion](https://www.framer.com/motion/) v11+ | Animations |
| [React Icons](https://react-icons.github.io/react-icons/) v5+ | Iconography |
| TypeScript | Type safety (strict mode) |

---

## Getting Started

You'll need **Node.js 18.17.1+** installed.

```bash
git clone https://github.com/lalitnagwan/ARM_React_Assessment.git
cd ARM_React_Assessment
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Other commands

```bash
npm run build      # Type-check + production build
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

---

## Project Structure

```
src/
├── components/
│   ├── layout/           # Navbar, Footer, Layout shell
│   └── sections/         # All page sections (Hero, FAQ, etc.)
├── pages/
│   └── index.astro       # Single-page entry point
└── styles/
    └── global.css        # Tailwind layers + custom utilities
```

Static sections (Hero, CTA, Innovation Diagram) are plain `.astro` files. Sections that need interactivity (carousels, sliders, accordions) are React `.tsx` components loaded with `client:load`.

---

## What's in the Page

The site is a single landing page with these sections, top to bottom:

1. **Navbar** — Fixed header, hamburger menu on mobile, glassmorphic style on desktop
2. **Hero** — Full-viewport background image with headline and CTA
3. **Design Features** — 4-card grid (2x2 on mobile) highlighting product benefits
4. **Innovation Diagram** — Product image with feature callouts pointing to specific parts
5. **Why Eternia** — 4 gradient-bordered cards with checkmark bullet points
6. **Before/After** — Draggable image comparison slider
7. **Projects Gallery** — Image grid with horizontal scroll on mobile
8. **Testimonials** — Quote cards in a carousel
9. **Expert Performance** — Cascading card layout with 3D perspective on desktop
10. **Thoughtful Reads** — Blog article thumbnails, split-background layout
11. **CTA Section** — Full-width banner with button
12. **FAQ** — Accordion with expand/collapse
13. **Footer** — Accordion on mobile, multi-column grid on desktop

---

## Design Tokens

These are defined in `tailwind.config.mjs`:

- **Colors:** Primary `#174545`, Dark `#0A3D3D`, Accent `#00B4D8`
- **Fonts:** Inter, SF Pro, Outfit (falls back to system sans-serif)
- **Max width:** 1280px container

---

## Deployment

Works out of the box on Vercel or Netlify — both auto-detect Astro projects.

**Vercel:** Just import from GitHub and deploy. No config needed.

**Netlify:** Set build command to `npm run build` and publish directory to `dist`.

---

## Notes and Assumptions

- Placeholder images are used where actual product photos weren't available
- Video sections show thumbnails with play buttons (no actual video player wired up)
- Content is pulled from the provided Figma designs; I filled in gaps where the design was ambiguous
- The mobile menu slides in from the right with a full-screen overlay
- Targeting modern browsers (last 2 versions of Chrome, Firefox, Safari, Edge)

## What I'd Improve Next

- Wire up a real video player for the expert testimonials
- Add a lightbox to the projects gallery
- Hook up form submissions for the consultation CTA
- Add Open Graph / social meta tags
- Integrate a CMS for content management
- Add analytics (Plausible or GA4)

---

## License

Created as an assessment project for ARM React Assessment.

---

Built by **Lalit Nagwan**

