document.addEventListener('DOMContentLoaded', function () {
    /* --- Constants --- */
    const TAX_RATE = 0.08;
    const SCROLL_THRESHOLD = 300;
    const COUNTDOWN_INTERVAL_MS = 1000;

    /* --- DOM References --- */
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const cartButton = document.getElementById('cart-button');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartButton = document.getElementById('close-cart');
    const overlay = document.getElementById('overlay');
    const backToTopButton = document.getElementById('back-to-top');
    const quickViewModal = document.getElementById('quick-view-modal');
    const closeQuickView = document.getElementById('close-quick-view');
    const searchInput = document.getElementById('search-input');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Initialize AOS
    try {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    } catch (error) {
        /* AOS unavailable — continue silently */
    }

    /* ==================== */
    /* 1. SCROLL PROGRESS   */
    /* ==================== */
    const scrollProgress = document.getElementById('scroll-progress');
    if (scrollProgress) {
        window.addEventListener('scroll', function () {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight) * 100;
            scrollProgress.style.width = scrolled + '%';
        });
    }

    /* ==================== */
    /* 2. DARK MODE TOGGLE  */
    /* ==================== */
    // Site ships dark by default; toggle still works if user switches to light.
    if (darkModeToggle) {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);

        const icon = darkModeToggle.querySelector('i');
        if (icon) {
            icon.className = savedTheme === 'dark'
                ? 'fas fa-sun text-lg md:text-xl text-gray-700 group-hover:text-indigo-600'
                : 'fas fa-moon text-lg md:text-xl text-gray-700 group-hover:text-indigo-600';
        }

        darkModeToggle.addEventListener('click', function () {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            if (icon) {
                icon.className = newTheme === 'dark'
                    ? 'fas fa-sun text-lg md:text-xl text-gray-700 group-hover:text-indigo-600'
                    : 'fas fa-moon text-lg md:text-xl text-gray-700 group-hover:text-indigo-600';
            }

            showToast('Theme: ' + newTheme + ' mode', 'success');
        });
    }

    /* ==================== */
    /* 3. MAGNETIC BUTTONS  */
    /* ==================== */
    document.querySelectorAll('.btn-magnetic').forEach(button => {
        button.addEventListener('mousemove', function (e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        button.addEventListener('mouseleave', function () {
            button.style.transform = 'translate(0, 0)';
        });
    });

    /* ==================== */
    /* 4. 3D CARD TILT      */
    /* ==================== */
    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;
            card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
        });

        card.addEventListener('mouseleave', function () {
            card.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    /* ==================== */
    /* 5. NUMBER COUNTING   */
    /* ==================== */
    const countElements = document.querySelectorAll('[data-count]');
    const countObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const target = parseInt(entry.target.getAttribute('data-count')) || 0;
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    entry.target.textContent = Math.floor(current);
                }, 16);
            }
        });
    }, { threshold: 0.5, rootMargin: '0px' });

    countElements.forEach(el => countObserver.observe(el));

    /* ==================== */
    /* 6. CONFETTI          */
    /* ==================== */
    function launchConfetti(x, y) {
        const canvas = document.createElement('canvas');
        canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
        document.body.appendChild(canvas);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const ctx = canvas.getContext('2d');
        const particles = [];
        const colors = ['#C9A227', '#EDDFAE', '#D8BE72', '#E8D48B', '#FBF6E4'];

        for (let i = 0; i < 55; i++) {
            particles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 10,
                vy: (Math.random() - 0.5) * 10 - 5,
                color: colors[Math.floor(Math.random() * colors.length)],
                radius: Math.random() * 3.5 + 1.5,
                gravity: 0.3,
                friction: 0.98
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let alive = false;

            particles.forEach(p => {
                p.vy += p.gravity;
                p.vx *= p.friction;
                p.vy *= p.friction;
                p.x += p.vx;
                p.y += p.vy;

                if (p.y < canvas.height && p.radius > 0.1) {
                    alive = true;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.fill();
                } else {
                    p.radius *= 0.95;
                }
            });

            if (alive) {
                requestAnimationFrame(animate);
            } else {
                document.body.removeChild(canvas);
            }
        }

        animate();
    }

    /* ==================== */
    /* 7. TOAST SYSTEM      */
    /* ==================== */
    function showToast(message, type = 'info') {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.className = 'fixed bottom-6 right-6 z-50 space-y-3 pointer-events-none';
            container.style.bottom = '90px';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        const icon = type === 'success' ? 'fa-check-circle'
            : type === 'error' ? 'fa-exclamation-circle'
                : 'fa-info-circle';

        toast.innerHTML = `<i class="fas ${icon}"></i><span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('removing');
            setTimeout(() => {
                if (container.contains(toast)) container.removeChild(toast);
            }, 350);
        }, 3000);
    }

    /* ==================== */
    /* 8. LIVE STOCK        */
    /* ==================== */
    document.querySelectorAll('.stock-counter').forEach(counter => {
        setInterval(() => {
            const current = parseInt(counter.textContent);
            if (current > 1 && Math.random() > 0.5) {
                counter.textContent = current - 1;
            }
        }, (8 + Math.random() * 7) * 1000);
    });

    /* ==================== */
    /* 9. SOCIAL PROOF      */
    /* ==================== */
    const socialProofCount = document.querySelector('.social-proof-count');
    if (socialProofCount) {
        const baseCount = parseInt(socialProofCount.getAttribute('data-count')) || 247;
        setInterval(() => {
            const variation = Math.floor(Math.random() * 7) - 3;
            socialProofCount.textContent = Math.max(1, baseCount + variation);
        }, (5 + Math.random() * 5) * 1000);
    }

    /* ==================== */
    /* 10. SPLIDE CAROUSEL  */
    /* ==================== */
    try {
        new Splide('.splide', {
            type: 'slide',
            perPage: 4,
            perMove: 1,
            gap: '1rem',
            pagination: false,
            arrows: true,
            breakpoints: {
                1280: { perPage: 3, gap: '1rem' },
                1024: { perPage: 2, gap: '1rem' },
                768: { perPage: 2, gap: '0.8rem' },
                640: { perPage: 1, gap: '0.5rem' },
                320: { perPage: 1, gap: '0.5rem' }
            }
        }).mount();
    } catch (error) {
        /* Splide not loaded */
    }

    /* ==================== */
    /* 11. MOBILE MENU      */
    /* ==================== */
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
            mobileMenuButton.innerHTML = mobileMenu.classList.contains('hidden')
                ? '<i class="fas fa-bars text-lg md:text-xl text-gray-700"></i>'
                : '<i class="fas fa-times text-lg md:text-xl text-gray-700"></i>';
        });
    }

    /* ==================== */
    /* 12. CART SIDEBAR     */
    /* ==================== */
    if (cartButton && cartSidebar && closeCartButton && overlay) {
        cartButton.addEventListener('click', function () {
            cartSidebar.classList.remove('translate-x-full');
            overlay.classList.remove('invisible', 'opacity-0');
            document.body.style.overflow = 'hidden';
        });

        closeCartButton.addEventListener('click', function () {
            cartSidebar.classList.add('translate-x-full');
            overlay.classList.add('invisible', 'opacity-0');
            document.body.style.overflow = '';
        });

        overlay.addEventListener('click', function () {
            cartSidebar.classList.add('translate-x-full');
            if (mobileMenu) mobileMenu.classList.add('hidden');
            if (mobileMenuButton) {
                mobileMenuButton.innerHTML = '<i class="fas fa-bars text-lg md:text-xl text-gray-700"></i>';
            }
            overlay.classList.add('invisible', 'opacity-0');
            document.body.style.overflow = '';
        });
    }

    /* ==================== */
    /* 13. BACK TO TOP      */
    /* ==================== */
    if (backToTopButton) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > SCROLL_THRESHOLD) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
            } else {
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });

        backToTopButton.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ==================== */
    /* 14. QUANTITY BUTTONS */
    /* ==================== */
    document.querySelectorAll('.quantity-adjust button, .quantity-decrease, .quantity-increase').forEach(button => {
        button.addEventListener('click', function () {
            const isDecrease = this.classList.contains('quantity-decrease');
            const quantityElement = this.closest('.flex.items-center')?.querySelector('.quantity');
            if (!quantityElement) return;

            let value = parseInt(quantityElement.textContent);
            value = isDecrease ? Math.max(1, value - 1) : value + 1;
            quantityElement.textContent = value;
            updateCartTotal();
        });
    });

    /* ==================== */
    /* 15. WISHLIST         */
    /* ==================== */
    document.querySelectorAll('.wishlist-toggle').forEach(button => {
        button.addEventListener('click', function () {
            const icon = this.querySelector('i');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');

            const isActive = icon.classList.contains('fas');
            this.setAttribute('aria-pressed', isActive);

            const wishlistCount = document.querySelector('.wishlist-count');
            if (wishlistCount) {
                let count = parseInt(wishlistCount.textContent) || 0;
                count = isActive ? count + 1 : Math.max(0, count - 1);
                wishlistCount.textContent = count;
            }

            if (isActive) {
                icon.classList.add('animate-ping');
                setTimeout(() => icon.classList.remove('animate-ping'), 500);
            }
        });
    });

    /* ==================== */
    /* 16. ADD TO CART      */
    /* ==================== */
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            this.classList.add('animate-pulse');

            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                let count = parseInt(cartCount.textContent) || 0;
                cartCount.textContent = count + 1;
                cartCount.classList.add('animate-bounce');
                setTimeout(() => cartCount.classList.remove('animate-bounce'), 1000);
            }

            setTimeout(() => this.classList.remove('animate-pulse'), 300);

            const rect = this.getBoundingClientRect();
            launchConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
            showToast('Added to cart', 'success');
        });
    });

    /* ==================== */
    /* 17. CART TOTAL       */
    /* ==================== */
    function updateCartTotal() {
        let subtotal = 0;

        document.querySelectorAll('#cart-sidebar .cart-item').forEach(item => {
            const quantityEl = item.querySelector('.quantity');
            const priceEl = item.querySelector('.cart-item-price');

            if (quantityEl && priceEl) {
                const quantity = parseInt(quantityEl.textContent) || 0;
                const price = parseFloat(priceEl.textContent.replace('$', '').replace(/,/g, '')) || 0;
                subtotal += quantity * price;
            }
        });

        const subtotalElement = document.getElementById('cart-subtotal');
        if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;

        const tax = subtotal * TAX_RATE;
        const taxElement = document.getElementById('cart-tax');
        if (taxElement) taxElement.textContent = `$${tax.toFixed(2)}`;

        const total = subtotal + tax;
        const totalElement = document.getElementById('cart-total');
        if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`;
    }

    /* ==================== */
    /* 18. COUNTDOWN        */
    /* ==================== */
    function updateCountdown() {
        const daysEl = document.querySelector('.countdown-days');
        const hoursEl = document.querySelector('.countdown-hours');
        const minutesEl = document.querySelector('.countdown-minutes');
        const secondsEl = document.querySelector('.countdown-seconds');

        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

        const now = new Date();
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        const diff = endOfDay - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.textContent = days.toString().padStart(2, '0');
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, COUNTDOWN_INTERVAL_MS);

    /* ==================== */
    /* 19. QUICK VIEW       */
    /* ==================== */
    let galleryInitialized = false;

    const quickViewButtons = document.querySelectorAll('.quick-view');

    if (quickViewModal && closeQuickView) {
        quickViewButtons.forEach(button => {
            button.addEventListener('click', function () {
                quickViewModal.classList.remove('opacity-0', 'invisible');
                document.body.style.overflow = 'hidden';

                if (!galleryInitialized) {
                    try {
                        const productGallery = new Splide('.product-gallery', {
                            type: 'fade',
                            rewind: true,
                            pagination: false,
                            arrows: false,
                            cover: true,
                            heightRatio: 0.8
                        }).mount();

                        const productThumbnails = new Splide('.product-thumbnails', {
                            fixedWidth: 80,
                            fixedHeight: 60,
                            gap: 10,
                            rewind: true,
                            pagination: false,
                            isNavigation: true,
                            cover: true,
                            focus: 'center',
                            arrows: false,
                            breakpoints: {
                                640: { fixedWidth: 60, fixedHeight: 45 },
                                320: { fixedWidth: 50, fixedHeight: 40 }
                            }
                        }).mount();

                        productGallery.sync(productThumbnails);
                        galleryInitialized = true;
                    } catch (error) {
                        /* Gallery failed to init */
                    }
                }

                setTimeout(() => {
                    const modalContent = quickViewModal.querySelector('.relative');
                    if (modalContent) modalContent.classList.remove('scale-95');
                }, 10);
            });
        });

        closeQuickView.addEventListener('click', function () {
            const modalContent = quickViewModal.querySelector('.relative');
            if (modalContent) modalContent.classList.add('scale-95');
            setTimeout(() => {
                quickViewModal.classList.add('opacity-0', 'invisible');
                document.body.style.overflow = '';
            }, 300);
        });
    }

    /* ==================== */
    /* 20. SEARCH           */
    /* ==================== */
    if (searchInput) {
        searchInput.addEventListener('keyup', function (e) {
            if (e.key === 'Enter' && this.value.trim() !== '') {
                showToast(`Searching for "${this.value}"…`, 'info');
            }
        });
    }

    /* ==================== */
    /* 21. LIVE CHAT BUBBLE */
    /* ==================== */
    const liveChat = document.getElementById('live-chat-bubble');
    if (liveChat) {
        liveChat.addEventListener('click', function () {
            showToast('Live chat is warming up — a specialist will be with you shortly.', 'info');
        });
    }

    /* ==================== */
    /* 22. NEWSLETTER       */
    /* ==================== */
    const newsletterForm = document.querySelector('form[action="#"]');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = document.getElementById('newsletter-email');
            if (emailInput && emailInput.value.includes('@')) {
                showToast('Welcome to the inner circle.', 'success');
                emailInput.value = '';
            } else {
                showToast('Please enter a valid email address.', 'error');
            }
        });
    }
    /* ==================== */
    /* 23. HEADER SEARCH ICON → opens mobile menu on mobile */
    /* ==================== */
    document.querySelectorAll('.header-icon[aria-label="Search"]').forEach(btn => {
        btn.addEventListener('click', function () {
            if (window.innerWidth < 1024 && mobileMenu && mobileMenuButton) {
                mobileMenu.classList.remove('hidden');
                mobileMenuButton.innerHTML =
                    '<i class="fas fa-times text-lg md:text-xl text-gray-700"></i>';
                const input = mobileMenu.querySelector('input');
                if (input) setTimeout(() => input.focus(), 120);
            }
        });
    });

    /* ==================== */
    /* 24. DISABLE TILT ON TOUCH DEVICES */
    /* ==================== */
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) {
        document.querySelectorAll('[data-tilt]').forEach(card => {
            card.removeAttribute('data-tilt');
        });
    }
});