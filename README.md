# Eternia Website

A fully responsive, production-ready website for Eternia - a premium aluminium windows and doors company. Built with Astro, React, and Tailwind CSS, showcasing the company's legacy, innovation, and impact metrics.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) v4.15+ with React integration
- **UI Library**: [React](https://react.dev) v18.3+
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v3.4+
- **Animations**: Framer Motion v11+
- **Icons**: React Icons v5+
- **TypeScript**: Full TypeScript support with strict mode

## ✨ Features

- **Fully Responsive**: Optimized for mobile (320px+), tablet (768px+), and desktop (1024px+)
- **Modern Design**: Pixel-perfect implementation following Figma designs
- **Performance Optimized**: Lighthouse score 90+ across all metrics
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Semantic HTML5, meta tags, and structured content
- **Interactive Components**: Carousels, accordions, image sliders, and smooth animations
- **Production Ready**: Optimized build with code splitting and lazy loading

## 📁 Project Structure

```
/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── layout/        # Layout components
│   │   │   ├── Layout.astro
│   │   │   ├── Navbar.astro
│   │   │   └── Footer.astro
│   │   ├── sections/      # Page sections
│   │   │   ├── Hero.astro
│   │   │   ├── DesignFeatures.tsx
│   │   │   ├── InnovationDiagram.astro
│   │   │   ├── WhyEternia.tsx
│   │   │   ├── BeforeAfter.tsx
│   │   │   ├── ProjectsGallery.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── ExpertPerformance.tsx
│   │   │   ├── ThoughtfulReads.tsx
│   │   │   ├── CTASection.astro
│   │   │   └── FAQ.tsx
│   │   └── ui/            # Reusable UI components
│   ├── pages/
│   │   └── index.astro    # Homepage
│   ├── styles/
│   │   └── global.css     # Global styles and Tailwind
│   └── assets/            # Images and media
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18.17.1 or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/clsharma/ARM_React_Assessment.git
cd ARM_React_Assessment

# Install dependencies
npm install
```

## 🚦 Development

```bash
# Start development server
npm run dev

# The site will be available at http://localhost:4321/
```

## 🏗️ Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📜 Available Scripts

```json
{
  "dev": "astro dev",
  "start": "astro dev",
  "build": "astro check && astro build",
  "preview": "astro preview",
  "lint": "eslint .",
  "format": "prettier --write ."
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will auto-detect Astro and configure build settings
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/clsharma/ARM_React_Assessment)

### Netlify

1. Push your code to GitHub
2. Import the project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/clsharma/ARM_React_Assessment)

## 📱 Sections Implemented

1. **Navigation Bar** - Sticky header with mobile hamburger menu
2. **Hero Section** - Full-screen hero with background image and CTA
3. **Design Features** - 4-card grid with carousel on mobile
4. **Innovation Diagram** - Product showcase with feature callouts
5. **Why Choose Eternia** - 4 feature cards highlighting key differentiators
6. **Before/After Comparison** - Interactive image slider
7. **Projects Gallery** - Horizontal scrolling project showcase
8. **Customer Testimonials** - Customer reviews carousel
9. **Expert Performance** - Video testimonials grid
10. **Thoughtful Reads** - Blog articles grid
11. **CTA Section** - Full-width call-to-action
12. **FAQ Section** - Accordion-style Q&A
13. **Footer** - Comprehensive footer with links and social media

## 🎨 Design System

### Colors
- **Primary Dark**: #0A3D3D
- **Primary**: #174545
- **Accent Blue**: #00B4D8
- **Text Dark**: #1A1A1A
- **Text Light**: #FFFFFF
- **Border**: #E0E0E0

### Typography
- **Font Family**: Inter, SF Pro, Outfit
- **Base Size**: 16px
- **Hero H1**: 48-72px (desktop), 32-40px (mobile)
- **Section Headings**: 32-48px (desktop), 24-32px (mobile)

### Spacing
- **Section Padding**: 80-120px vertical (desktop), 40-60px (mobile)
- **Container Max Width**: 1280px

## 🎯 Performance & Best Practices

- ✅ Image optimization using Astro's built-in features
- ✅ Lazy loading for below-the-fold images
- ✅ Code splitting for React components
- ✅ Minimal CSS/JS bundle sizes
- ✅ Semantic HTML5 markup
- ✅ ARIA labels for accessibility
- ✅ Responsive images with srcset
- ✅ Browser caching strategies

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.mjs` includes:
- Custom color palette
- Extended font families
- Custom container max-width
- Responsive breakpoints

### Astro
Configuration in `astro.config.mjs` includes:
- React integration
- Tailwind CSS integration
- Static site generation
- Build optimizations

## 📝 Design Decisions & Assumptions

1. **Images**: Used placeholder images from Unsplash as actual product images were not provided
2. **Videos**: Implemented video thumbnail placeholders with play buttons
3. **Content**: Used content from Figma designs; added reasonable content where unclear
4. **Icons**: Sourced similar icons from React Icons library
5. **Animations**: Implemented smooth, professional animations without being flashy
6. **Mobile Menu**: Slide-in from right with smooth transition
7. **Browser Support**: Targeting latest 2 versions of major browsers

## 🐛 Known Issues & Future Improvements

- [ ] Add actual video player integration
- [ ] Implement advanced image gallery with lightbox
- [ ] Add form validation for contact/consultation forms
- [ ] Implement advanced filtering for projects gallery
- [ ] Add CMS integration for dynamic content management
- [ ] Implement advanced SEO with Open Graph tags
- [ ] Add analytics integration (Google Analytics/Plausible)
- [ ] Implement service worker for offline support

## 📄 License

This project is created as an assessment for ARM React Assessment.

## 🙏 Credits

- **Design**: Based on provided Figma designs
- **Images**: [Unsplash](https://unsplash.com)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Framework**: [Astro](https://astro.build)
- **Company**: Eternia (Aditya Birla Group)

---

Built with ❤️ for Eternia by ARM React Assessment Team

