# ⚛️ QuantumTech — Futuristic Electronics Marketplace

> **A modern, high-performance electronics storefront landing page built for the future of e-commerce.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Splide](https://img.shields.io/badge/Splide-FF6B6B?style=for-the-badge\&logo=carousel\&logoColor=white)](https://splidejs.com/)
[![AOS](https://img.shields.io/badge/AOS-Animate%20On%20Scroll-7C3AED?style=for-the-badge)](https://michalsnik.github.io/aos/)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge\&logo=fontawesome\&logoColor=white)](https://fontawesome.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 🌟 Overview

**QuantumTech** is a sleek, responsive, and interactive electronics marketplace landing page. It combines modern design trends like glassmorphism, parallax scrolling, 3D transforms, animated gradients, and micro-interactions to deliver a futuristic shopping experience.

Built with pure HTML, Tailwind CSS, and vanilla JavaScript, it requires no build step and runs instantly in any modern browser.

---

## ✨ Key Features

* 🚀 **Announcement Marquee** — Smooth infinite-scrolling promotions bar.
* 🧊 **Glassmorphism Header** — Sticky navigation with backdrop blur and gradient highlights.
* 🔍 **Floating Label Search** — Elegant search input with animated focus states.
* 🛒 **Interactive Cart Sidebar** — Slide-out cart with quantity controls, promo code field, and dynamic totals.
* ❤️ **Wishlist Toggle** — Heart micro-interaction with count badge.
* 🎠 **Splide Carousel** — Responsive featured products slider with breakpoints.
* 🧊 **3D Tech Showcase** — Rotating image card with perspective and backface visibility.
* ⏳ **Live Countdown Timer** — Real-time sales deadline countdown.
* 🧪 **Product Quick View Modal** — Gallery sync, options selection, and add-to-cart functionality.
* 📱 **Mobile-First Navigation** — Slide-down menu with smooth animations.
* ✨ **Scroll Animations (AOS)** — Fade, slide, and reveal effects on scroll.
* 🎨 **Dynamic Gradient Backgrounds** — Continuously rotating hue effects.
* 🖱️ **Custom Scrollbar** — Styled for an enhanced user experience.
* 🔝 **Back-to-Top Button** — Floating button that appears after scrolling.
* 🌙 **Noise Texture Overlay** — Subtle grain effect for a modern aesthetic.

---

## 🛠️ Tech Stack

| Layer         | Technology                    |
| ------------- | ----------------------------- |
| Markup        | HTML5                         |
| Styling       | Tailwind CSS 2.2 + Custom CSS |
| Interactivity | Vanilla JavaScript (ES6+)     |
| Carousel      | Splide.js v4                  |
| Animations    | AOS (Animate On Scroll)       |
| Icons         | Font Awesome 6                |
| Fonts         | Google Fonts — Poppins        |

---

## 🚀 Getting Started

### Prerequisites

* A modern web browser such as Chrome, Edge, Firefox, Safari, or Opera.
* Optional: A local development server such as [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code.

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/ultra-Premium-Electronics-E-Commerce-Website2/quantumtech.git
cd ultra-Premium-Electronics-E-Commerce-Website2
```

#### 2. Open the Project

Simply open `index.html` in your browser.

Alternatively, run a local server:

```bash
# Using Python 3
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

That's it! No build step or dependency installation is required.

---

## 📁 Project Structure

```text
quantumtech/
├── index.html          # Main HTML file (all sections included)
├── styles.css          # Custom CSS (animations, effects, responsive tweaks)
├── script.js           # JavaScript (interactions, carousels, countdown)
└── README.md           # Project documentation
```

### Description of Files

* **`index.html`**
  Contains the complete markup for the landing page, including the header, hero section, categories, featured products, tech showcase, sale banner, comparison table, testimonials, newsletter, footer, cart sidebar, quick-view modal, and overlay elements. External libraries are loaded through CDN.

* **`styles.css`**
  Contains custom styles layered on top of Tailwind CSS. It defines keyframe animations such as `fadeIn`, `slideUp`, `float`, and `marquee`, along with 3D perspective utilities, gradient backgrounds, scrollbar styling, and responsive adjustments for ultra-small screens (≤320px).

* **`script.js`**
  Handles client-side interactivity, including:

  * AOS and Splide initialization.
  * Mobile menu management.
  * Cart sidebar and overlay controls.
  * Back-to-top functionality.
  * Product quantity adjustment.
  * Wishlist toggling.
  * Add-to-cart animations.
  * Dynamic cart total calculations.
  * Countdown timer.
  * Quick-view modal and product gallery synchronization.
  * Parallax scrolling effects.
  * Product filtering and search simulations.

---

## 🎨 Customization Guide

### Change Colors

Edit the Tailwind utility classes directly inside `index.html`.

For example, replace:

```html
indigo-600
```

with:

```html
emerald-600
```

For a more systematic approach, you can define a custom Tailwind configuration. However, since the project uses the CDN build, direct utility-class replacement is the simplest approach.

### Update Product Data

Product cards are defined in the **Featured Products** section.

To add or modify products:

1. Duplicate a `.splide__slide` block.
2. Update the product image.
3. Change the product name.
4. Update the price.
5. Modify the product badge.
6. Update the rating and other product information.

The same approach can be used for the comparison table and cart items.

### Modify Countdown Timer

In `script.js`, the `updateCountdown()` function calculates the remaining time until the end of the current day.

Replace:

```javascript
const endOfDay = new Date();
endOfDay.setHours(23, 59, 59, 999);
```

with:

```javascript
const endOfDay = new Date('2026-12-31T23:59:59');
```

### Integrate a Real Backend

Replace the placeholder functions:

```javascript
searchProducts
filterProducts
sortProducts
```

with actual API integrations using `fetch()` or Axios.

The current implementation simulates product loading with a spinner and placeholder behavior.

---

## 📱 Responsive Behavior

* **Desktop (≥1280px):** Full navigation, four-column carousel, and side-by-side layouts.
* **Tablet (768–1024px):** Collapsed navigation, two-column carousel, and adjusted spacing.
* **Mobile (<768px):** Hamburger menu, single-column carousel, stacked sections, and simplified full-width cart sidebar.
* **Ultra-small (≤320px):** Further condensed typography, smaller icons, and optimized grid layouts.

---

## 🌐 Browser Support

| Browser          | Supported |
| ---------------- | --------- |
| Chrome (latest)  | ✅         |
| Firefox (latest) | ✅         |
| Safari (latest)  | ✅         |
| Edge (latest)    | ✅         |
| Opera (latest)   | ✅         |

> **Note:** Some visual effects, such as `backdrop-filter`, may require fallbacks in older browsers.

---

## 🧪 Performance & Accessibility

### Performance

* Assets are loaded through CDNs.
* Images use browser-native lazy-loading where applicable.
* JavaScript is kept lightweight.
* No build process is required.
* The project is optimized for fast browser-based execution.

### Accessibility

* Semantic HTML structure.
* ARIA labels on interactive icon buttons.
* Keyboard-friendly focus states.
* Descriptive image `alt` attributes.
* Responsive layouts across screen sizes.

> **Accessibility Recommendation:** Because the interface uses multiple animations, consider adding a `prefers-reduced-motion` media query to `styles.css` for users who prefer reduced motion.

---

## 🔮 Future Enhancements — 2026 Roadmap

* [ ] **AI-Powered Product Recommendations** — Use machine learning to suggest products based on browsing behavior.
* [ ] **Web3 Payment Gateway** — Support cryptocurrency payments through wallets such as MetaMask.
* [ ] **AR/VR Product Previews** — Use WebXR to visualize products in real-world environments.
* [ ] **Progressive Web App (PWA)** — Add offline support and installability.
* [ ] **Dark/Light Mode Toggle** — Provide a user-controlled theme switcher.
* [ ] **Voice Search** — Implement speech recognition for hands-free product discovery.
* [ ] **Real-Time Inventory Updates** — Connect the storefront to a backend API for live stock availability.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new feature branch:

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes:

```bash
git commit -m "Add some AmazingFeature"
```

4. Push the branch:

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request.

---

## 📄 License

Distributed under the **MIT License**. See the `LICENSE` file for more information.

---

## 🙏 Acknowledgments

* [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework.
* [Splide](https://splidejs.com/) — Lightweight and flexible carousel.
* [AOS](https://michalsnik.github.io/aos/) — Animate On Scroll library.
* [Font Awesome](https://fontawesome.com/) — Icon library.
* [Google Fonts](https://fonts.google.com/) — Poppins typeface.
* [Pexels](https://www.pexels.com/) — Placeholder images.
* [Grainy Gradients](https://grainy-gradients.vercel.app/) — Noise SVG texture.

---

<p align="center">
  Made with 💜 and a lot of ☕ by
  <a href="https://github.com/your-username">Your Name</a>
</p>
