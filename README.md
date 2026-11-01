# ⚛️ QuantumTech

### Obsidian & Gold — A Dark Luxury Electronics Marketplace

**Where cutting-edge technology meets uncompromising craft.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-C9A227?style=flat-square)](./LICENSE)

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Quick Start](#-quick-start)
- [File Structure](#-file-structure)
- [Features](#-features)
- [Design System](#-design-system)
- [Responsive Breakpoints](#-responsive-breakpoints)
- [Component Reference](#-component-reference)
- [Interactive Behaviors](#-interactive-behaviors)
- [Customization Guide](#-customization-guide)
- [Accessibility](#-accessibility)
- [Performance](#-performance)
- [Browser Support](#-browser-support)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Credits](#-credits)
- [License](#-license)

---

## 🌑 Overview

**QuantumTech** is a premium electronics marketplace reimagined through a dark luxury aesthetic. Moving beyond conventional indigo-purple gradients, the design embraces the visual language of high-end horology and contemporary luxury: obsidian surfaces, champagne-gold accents, elegant Cormorant Garamond typography, and carefully restrained motion.

Product photography is presented on studio-white plates, creating a striking contrast against the ink-black interface. Every visual detail follows a unified design language, resulting in a storefront that feels more like an exclusive boutique than a conventional marketplace.

> **Design Philosophy:** Luxury is not more. Luxury is less, executed precisely.

### What It Is

- A complete standalone marketplace homepage.
- A premium dark-themed electronics storefront.
- A collection of modern UI components and interactive shopping experiences.
- A ground-up redesign built around an Obsidian & Gold design system.
- A zero-build, zero-framework frontend experience.

### What It Isn't

- A production backend or database.
- A complete payment processing system.
- A real inventory management platform.
- A fully integrated authentication system.

Cart, wishlist, and search interactions are frontend-only and maintain state in memory.

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/quantumtech.git
cd quantumtech
```

### 2. Open the Project

**Windows:**

```bash
start index.html
```

**macOS:**

```bash
open index.html
```

**Linux:**

```bash
xdg-open index.html
```

No npm installation, build process, or environment variables are required.

### 3. Run a Local Development Server (Optional)

Using Python:

```bash
python3 -m http.server 8000
```

Or using Node.js:

```bash
npx serve .
```

Open the following address:

```text
http://localhost:8000
```

**Note:** Running through a local server is recommended for consistent browser behavior, especially for media and clipboard functionality.

---

## 📁 File Structure

```text
quantumtech/
│
├── index.html          # Complete single-page storefront
├── styles.css          # Design system and responsive styling
├── script.js           # Interactive functionality
│
├── README.md           # Project documentation
├── LICENSE             # MIT License
│
└── assets/
    ├── products/       # Product photography
    ├── hero/           # Hero section assets
    └── testimonials/   # Testimonial images
```

### Project Files

| File | Approx. Lines | Responsibility |
|---|---:|---|
| `index.html` | 1,700 | Semantic structure and page sections |
| `styles.css` | 950 | Design tokens, components and responsive layouts |
| `script.js` | 450 | Interactions, cart logic, animations and countdown |

---

## ✨ Features

### 🎨 Visual Design

- **Obsidian Color Palette:** Layered near-black surfaces create depth and visual hierarchy.
- **Champagne Gold Accents:** A unified gold gradient powers buttons, badges, highlights and interactive elements.
- **Studio-Plate Photography:** Product images sit against elegant radial backgrounds.
- **Film-Grain Texture:** A subtle noise overlay adds visual depth.
- **Dual Typography:** Cormorant Garamond for editorial headings and Inter for functional interface elements.
- **Ambient Mesh Gradients:** Subtle animated lighting creates atmosphere without overwhelming the interface.

### ⚡ Interaction & Motion

- Magnetic hero buttons with cursor-responsive movement.
- Interactive 3D product-card tilt effects.
- Kinetic hero typography with blur-to-sharp reveal animations.
- Canvas-based gold confetti animations.
- Animated stock counters.
- Dynamic social-proof ticker.
- Real-time countdown timer.
- Glass-style toast notifications.

### 🛒 E-Commerce Interface

- Slide-in shopping cart drawer.
- Interactive product quantity controls.
- Automatic subtotal, tax and total calculations.
- Product quick-view modal.
- Synchronized product gallery and thumbnails.
- Interactive wishlist functionality.
- Latest Arrivals carousel powered by Splide.
- Promotional code input interface.

### 📱 Responsive Experience

- Eight individually tuned responsive breakpoints.
- Adaptive product grids and navigation.
- Touch-device-aware interactions.
- Responsive hero layouts.
- Mobile-friendly product browsing.
- Landscape and short-viewport optimizations.
- Reduced-motion support.

### ♿ Accessibility

- Visible keyboard focus indicators.
- ARIA labels for icon-only controls.
- Keyboard-accessible overlays.
- Escape-key support for closing overlays.
- Semantic HTML landmarks.
- Accessible wishlist states.
- Reduced-motion preferences respected.

---

## 🎨 Design System

### Color Palette

The Obsidian & Gold design system uses a carefully controlled palette of dark surfaces, champagne-gold accents and muted typography.

#### Obsidian Surfaces

| Token | Hex | Usage |
|---|---|---|
| `--ink-000` | `#050506` | Absolute black |
| `--ink-050` | `#08080A` | Main background |
| `--ink-100` | `#0C0C0F` | Section surfaces |
| `--ink-150` | `#101014` | Card surfaces |
| `--ink-200` | `#141419` | Elevated surfaces |
| `--ink-300` | `#1A1A20` | Hover states |

#### Champagne Gold Accents

| Token | Hex | Usage |
|---|---|---|
| `--gold-050` | `#FBF6E4` | Highlight text |
| `--gold-200` | `#EDDFAE` | Product prices |
| `--gold-400` | `#D8BE72` | Links and icons |
| `--gold-500` | `#C9A227` | Primary accent |
| `--gold-600` | `#A8851C` | Gradient start |
| `--gold-800` | `#6E5813` | Gradient end |

#### Typography Colors

| Token | Hex | Usage |
|---|---|---|
| `--text-hi` | `#F3F0E9` | Primary headings |
| `--text` | `#C6C2B9` | Body text |
| `--text-mid` | `#8B877E` | Secondary text |
| `--text-low` | `#5C5952` | Tertiary text |

### Signature Gold Gradient

```css
--grad-gold: linear-gradient(
    135deg,
    #6E5813 0%,
    #C9A227 28%,
    #EDDFAE 50%,
    #C9A227 72%,
    #6E5813 100%
);
```

### Studio Photography Background

```css
--plate: radial-gradient(
    ellipse at 50% 32%,
    #FBFAF7 0%,
    #EDEBE5 52%,
    #DCD9D0 100%
);
```

### Typography System

| Role | Font Family | Weight |
|---|---|---|
| Display headings | Cormorant Garamond | 300–500 |
| Body text | Inter | 300 |
| UI labels | Inter | 500 |
| Numbers | Inter | 500 |

### Motion & Animation

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

---

## 📐 Responsive Breakpoints

| Breakpoint | Width | Layout Behavior |
|---|---|---|
| XS | 320–399px | Single-column layout and stacked CTAs |
| SM | 400–639px | Two-column category rail |
| MD | 640–767px | Bento grid and two-column testimonials |
| LG | 768–1023px | Two-column product carousel |
| XL | 1024–1279px | Desktop navigation and compact search |
| 2XL | 1280–1535px | Full navigation and search |
| 3XL | 1536–1919px | Expanded spacing |
| 4XL | 1920px+ | Capped hero height and scalable typography |

### Special Responsive Rules

- Landscape phones: Hero height adjusts automatically.
- Short laptops: Vertical hero padding is reduced.
- Ultra-narrow screens: Typography and logo dimensions scale down.
- Touch devices: Magnetic buttons, card tilt and hover overlays are disabled.

---

## 🧩 Component Reference

### 1. Announcement Marquee

A full-width scrolling announcement bar with duplicated tracks for a seamless infinite animation.

### 2. Sticky Glass Header

A sticky navigation header featuring backdrop blur, a subtle gradient divider, navigation links, search and interactive icon buttons.

### 3. Hero Section

A responsive split-screen layout featuring editorial typography, animated text, primary and secondary CTAs, trust indicators and floating product cards.

### 4. Category Rail

A six-item category grid with icon containers, uppercase labels and gold hover effects.

### 5. Bento Product Grid

A mixed-span CSS grid with large, regular and wide product-card variations.

### 6. Latest Arrivals Carousel

A five-card horizontal product carousel powered by Splide with responsive breakpoint configuration.

### 7. Mega Sale Banner

A promotional section featuring a countdown timer, dark gradient background and highlighted product imagery.

### 8. Product Comparison Table

A structured comparison interface with a sticky label column and horizontal scrolling on smaller screens.

### 9. Testimonials

Three testimonial cards featuring customer photography, quotation marks and star ratings.

### 10. Cart Drawer & Quick-View Modal

Interactive overlays featuring product details, synchronized galleries, quantity controls and cart calculations.

---

## 🎬 Interactive Behaviors

| Trigger | Behavior |
|---|---|
| Page scroll | Gold progress indicator |
| Product mouse movement | 3D perspective tilt |
| Hero button movement | Magnetic cursor interaction |
| Add to Cart | Confetti animation, cart update and toast |
| Wishlist click | Heart animation and wishlist counter |
| Cart button | Opens the shopping cart drawer |
| Quick View | Opens the product details modal |
| Quantity controls | Recalculates subtotal, tax and total |
| Countdown | Updates every second |
| Stock counter | Simulates changing stock availability |
| Search Enter | Displays a toast notification |

---

## 🛠 Customization Guide

### Change the Accent Color

Update the gold design tokens in `styles.css`:

```css
:root {
    --gold-200: #B8E0E8;
    --gold-400: #7EC8D4;
    --gold-500: #4FA8B8;
    --gold-600: #2F7F8E;
    --gold-800: #1A4A55;
}
```

All components using these tokens automatically inherit the new accent color.

### Change the Display Font

Update the Google Fonts import:

```css
@import url(
    'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap'
);
```

Then update the display font variable:

```css
--font-display: 'Playfair Display', serif;
```

### Add a New Product

Duplicate an existing product-card element in `index.html` and update:

- Product image and alt text.
- Product name.
- Product price.
- Product details.
- Add-to-cart button.

The existing JavaScript event handlers bind to the relevant CSS classes.

### Adjust the Tax Rate

Update the tax constant in `script.js`:

```javascript
const TAX_RATE = 0.08;
```

For a 10% tax rate:

```javascript
const TAX_RATE = 0.10;
```

### Customize the Product Photography Background

```css
:root {
    --plate: linear-gradient(
        180deg,
        #F0EDE6 0%,
        #D8D3C6 100%
    );
}
```

---

## ♿ Accessibility

The project targets WCAG 2.1 AA accessibility principles across its interactive interface.

### Implemented

- Color contrast targets.
- Visible `:focus-visible` indicators.
- ARIA labels for icon-only buttons.
- Accessible wishlist states.
- Semantic HTML structure.
- Keyboard-accessible overlay controls.
- Reduced-motion support.

### Known Limitations

- Modal focus trapping is not yet implemented.
- Keyboard focus can leave the quick-view modal.

### Recommended Testing

Use Chrome Lighthouse and axe DevTools to evaluate accessibility and usability.

Target Lighthouse accessibility score: **95+**.

---

## ⚡ Performance

### Approximate Asset Sizes

| Asset | Size |
|---|---:|
| `index.html` | 68 KB |
| `styles.css` | 32 KB |
| `script.js` | 14 KB |
| Local total | 114 KB |
| Google Fonts | 90 KB |

### Existing Optimizations

- Zero dependencies for core interactive behavior.
- CSS custom properties for shared design tokens.
- `font-display: swap`.
- Font preconnect hints.
- IntersectionObserver for scroll-triggered animations.
- `requestAnimationFrame` for animations.
- Lazy-loaded product imagery.
- Transform-based animation techniques.

### Recommended Production Optimizations

- Minify CSS and JavaScript.
- Host fonts locally.
- Convert product images to WebP or AVIF.
- Preload the hero image.
- Self-host Splide.
- Inline critical above-the-fold CSS.

---

## 🌐 Browser Support

| Browser | Minimum Version |
|---|---|
| Chrome | 90+ |
| Microsoft Edge | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Safari iOS | 14+ |
| Samsung Internet | 15+ |
| Chrome Android | 90+ |
| Internet Explorer | Not supported |

The interface is designed for modern browsers supporting CSS Grid, backdrop filters, IntersectionObserver and contemporary JavaScript features.

---

## 🗺 Roadmap

### v2.1 — Accessibility Improvements

- [ ] Implement focus trapping in cart and quick-view overlays.
- [ ] Add an ARIA live region for cart updates.
- [ ] Introduce a skip-to-content link.
- [ ] Improve countdown screen-reader announcements.

### v2.2 — E-Commerce Integration

- [ ] Integrate a backend API for cart persistence.
- [ ] Implement real inventory management.
- [ ] Add promotional-code validation.
- [ ] Integrate a checkout solution.

### v2.3 — Performance Improvements

- [ ] Host fonts locally.
- [ ] Implement WebP and AVIF image optimization.
- [ ] Self-host Splide.
- [ ] Optimize critical CSS delivery.

### v3.0 — Marketplace Expansion

- [ ] Product detail page template.
- [ ] Category listing page template.
- [ ] Multi-theme support.
- [ ] PWA manifest and service worker.

---

## 🤝 Contributing

Contributions are welcome. This project follows a focused development approach that prioritizes maintainability and carefully scoped improvements.

### Contribution Workflow

**1. Fork the repository**

```bash
git clone https://github.com/JahanzaibJameel/ultra-Premium-Electronics-E-Commerce-Website2.git
```

**2. Create a feature branch**

```bash
git checkout -b feat/your-feature-name
```

**3. Implement your changes**

Keep modifications focused and consistent with the existing design system.

**4. Test your changes**

Verify responsive layouts, interactions and browser compatibility.

**5. Commit your changes**

```bash
git commit -m "feat(cart): add empty-state illustration"
```

**6. Push your branch**

```bash
git push origin feat/your-feature-name
```

### Commit Convention

| Type | Description |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `style` | Visual improvements |
| `refactor` | Code restructuring |
| `docs` | Documentation updates |
| `perf` | Performance improvements |
| `a11y` | Accessibility improvements |

### Before Submitting a Pull Request

- [ ] Test at 320px, 375px, 768px, 1024px, 1440px and 1920px.
- [ ] Test in Chrome, Firefox and Safari.
- [ ] Check for console errors and warnings.
- [ ] Verify accessibility.
- [ ] Confirm reduced-motion behavior.
- [ ] Test touch-device interactions.

### Code Style

- **CSS:** Alphabetical property ordering and consistent spacing.
- **JavaScript:** `const` and `let`, arrow functions, four-space indentation and single quotes.
- **HTML:** Semantic elements, accessible attributes and no unnecessary inline styles.

---

## 🎨 Credits

### Design & Development

- Design System: Obsidian & Gold.
- Project: QuantumTech Marketplace.
- Design Direction: Dark luxury, champagne-gold accents and editorial typography.

### Third-Party Resources

| Resource | Source | License |
|---|---|---|
| Cormorant Garamond | Google Fonts | SIL OFL 1.1 |
| Inter | Google Fonts | SIL OFL 1.1 |
| Font Awesome 6 | Font Awesome | CC BY 4.0 / MIT |
| Tailwind CSS 2.2 | Tailwind CSS | MIT |
| Splide 4.1 | Splide | MIT |
| AOS | Animate On Scroll | MIT |
| Product Photography | Pexels | Pexels License |
| Noise Texture | Grainy Gradients | Public |

### Design Inspirations

- **Aesop:** Restrained typography and editorial presentation.
- **Bang & Olufsen:** Minimalist hardware presentation.
- **Mr Porter:** Editorial e-commerce layouts.
- **Hermès:** Consistency and discipline in luxury branding.

---

## 📄 License

This project is licensed under the MIT License.

```text
MIT License

Copyright (c) 2026 QuantumTech

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

**⚛️ QuantumTech**

*Crafted with restraint, in obsidian and gold.*

If this project helped you, consider giving it a ⭐ on GitHub.

**Back to Top ↑**

</div>