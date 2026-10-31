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

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    /**
     * Initialize the featured products carousel
     */
    const featuredProducts = new Splide('.splide', {
        type: 'slide',
        perPage: 4,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        breakpoints: {
            1280: {
                perPage: 3,
                gap: '1rem'
            },
            1024: {
                perPage: 2,
                gap: '1rem'
            },
            768: {
                perPage: 2,
                gap: '0.8rem'
            },
            640: {
                perPage: 1,
                gap: '0.5rem'
            },
            320: {
                perPage: 1,
                gap: '0.5rem'
            }
        }
    }).mount();

    /**
     * Toggle mobile menu visibility
     */
    if (!mobileMenuButton || !mobileMenu) {
        console.error('Mobile menu elements not found');
    } else {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
            mobileMenuButton.innerHTML = mobileMenu.classList.contains('hidden') ?
                '<i class="fas fa-bars text-lg md:text-xl text-gray-700"></i>' :
                '<i class="fas fa-times text-lg md:text-xl text-gray-700"></i>';
        });
    }

    /**
     * Toggle shopping cart sidebar
     */
    if (!cartButton || !cartSidebar || !closeCartButton || !overlay) {
        console.error('Cart elements not found');
    } else {
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
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
            if (mobileMenuButton) {
                mobileMenuButton.innerHTML = '<i class="fas fa-bars text-lg md:text-xl text-gray-700"></i>';
            }
            overlay.classList.add('invisible', 'opacity-0');
            document.body.style.overflow = '';
        });
    }

    /**
     * Show/hide back to top button based on scroll position
     */
    if (backToTopButton) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > SCROLL_THRESHOLD) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
            } else {
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });

        backToTopButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /**
     * Adjust product quantity in cart
     */
    document.querySelectorAll('.quantity-adjust button, .quantity-decrease, .quantity-increase').forEach(button => {
        button.addEventListener('click', function () {
            const isDecrease = this.classList.contains('quantity-decrease');
            const quantityElement = this.closest('.flex.items-center').querySelector('.quantity');
            
            if (!quantityElement) return;

            let value = parseInt(quantityElement.textContent);

            if (isDecrease) {
                value = value > 1 ? value - 1 : 1;
            } else {
                value = value + 1;
            }

            quantityElement.textContent = value;
            updateCartTotal();
        });
    });

    /**
     * Toggle wishlist items and update count
     */
    document.querySelectorAll('.wishlist-toggle').forEach(button => {
        button.addEventListener('click', function () {
            const icon = this.querySelector('i');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
            icon.classList.toggle('text-red-500');

            // Update aria-pressed state
            const isActive = icon.classList.contains('fas');
            this.setAttribute('aria-pressed', isActive);

            // Update wishlist count
            const wishlistCount = document.querySelector('.wishlist-count');
            if (wishlistCount) {
                let count = parseInt(wishlistCount.textContent);
                count = icon.classList.contains('fas') ? count + 1 : count - 1;
                wishlistCount.textContent = count;
            }

            // Animate the heart icon
            if (icon.classList.contains('fas')) {
                icon.classList.add('animate-ping');
                setTimeout(() => {
                    icon.classList.remove('animate-ping');
                }, 500);
            }
        });
    });

    /**
     * Add product to cart and update count
     */
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            // Add animation class
            this.classList.add('animate-pulse');

            // Update cart count
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                let count = parseInt(cartCount.textContent);
                count = count + 1;
                cartCount.textContent = count;

                // Animate the cart count
                cartCount.classList.add('animate-bounce');
                setTimeout(() => {
                    cartCount.classList.remove('animate-bounce');
                }, 1000);
            }

            // Remove animation after delay
            setTimeout(() => {
                this.classList.remove('animate-pulse');
            }, 300);
        });
    });

    /**
     * Update cart total, tax, and grand total based on current cart items
     */
    function updateCartTotal() {
        let subtotal = 0;

        document.querySelectorAll('#cart-sidebar .flex.border-b').forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            const priceText = item.querySelector('.font-medium:last-child').textContent;
            const price = parseFloat(priceText.replace('$', '').replace(',', ''));

            subtotal += quantity * price;
        });

        // Update subtotal
        const subtotalElement = document.querySelector('[data-cart-subtotal]');
        if (subtotalElement) {
            subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        }

        // Calculate tax
        const tax = subtotal * TAX_RATE;
        const taxElement = document.querySelector('[data-cart-tax]');
        if (taxElement) {
            taxElement.textContent = `$${tax.toFixed(2)}`;
        }

        // Calculate total
        const total = subtotal + tax;
        const totalElement = document.querySelector('[data-cart-total]');
        if (totalElement) {
            totalElement.textContent = `$${total.toFixed(2)}`;
        }
    }

    /**
     * Update countdown timer display to show time remaining until end of day.
     * Note: endOfDay is set to today's 23:59:59, so days will always be 0.
     * This counts down to the end of the current day.
     */
    function updateCountdown() {
        const now = new Date();
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        const diff = endOfDay - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.querySelector('.countdown-days').textContent = days.toString().padStart(2, '0');
        document.querySelector('.countdown-hours').textContent = hours.toString().padStart(2, '0');
        document.querySelector('.countdown-minutes').textContent = minutes.toString().padStart(2, '0');
        document.querySelector('.countdown-seconds').textContent = seconds.toString().padStart(2, '0');
    }

    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, COUNTDOWN_INTERVAL_MS);

    /**
     * Open/close quick view modal with lazy Splide initialization
     */
    let galleryInitialized = false;
    let productGallery = null;
    let productThumbnails = null;

    const quickViewButtons = document.querySelectorAll('.quick-view');

    if (quickViewModal && closeQuickView) {
        quickViewButtons.forEach(button => {
            button.addEventListener('click', function () {
                quickViewModal.classList.remove('opacity-0', 'invisible');
                document.body.style.overflow = 'hidden';

                // Initialize gallery carousels on first open
                if (!galleryInitialized) {
                    productGallery = new Splide('.product-gallery', {
                        type: 'fade',
                        rewind: true,
                        pagination: false,
                        arrows: false,
                        cover: true,
                        heightRatio: 0.8
                    }).mount();

                    productThumbnails = new Splide('.product-thumbnails', {
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
                            640: {
                                fixedWidth: 60,
                                fixedHeight: 45
                            },
                            320: {
                                fixedWidth: 50,
                                fixedHeight: 40
                            }
                        }
                    }).mount();

                    // Sync the product gallery with thumbnails
                    productGallery.sync(productThumbnails);
                    galleryInitialized = true;
                }

                // Small delay to allow display to update before animating
                setTimeout(() => {
                    const modalContent = quickViewModal.querySelector('.relative');
                    if (modalContent) {
                        modalContent.classList.remove('scale-95');
                    }
                }, 10);
            });
        });

        closeQuickView.addEventListener('click', function () {
            const modalContent = quickViewModal.querySelector('.relative');
            if (modalContent) {
                modalContent.classList.add('scale-95');
            }
            setTimeout(() => {
                quickViewModal.classList.add('opacity-0', 'invisible');
                document.body.style.overflow = '';
            }, 300);
        });
    }

    /**
     * Apply parallax scrolling effect to hero background
     */
    const parallaxBg = document.querySelector('.parallax-bg');

    if (parallaxBg) {
        window.addEventListener('scroll', function () {
            const scrollPosition = window.pageYOffset;
            parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        });
    }

    /**
     * Update CSS custom property for gradient rotation.
     * Note: This animation loop runs indefinitely for visual effect. In a production app
     * with route changes, store the rAF ID and cancel on cleanup.
     */
    function updateGradientRotation() {
        document.documentElement.style.setProperty('--gradient-rotation', `${Date.now() / 1000 % 360}deg`);
        requestAnimationFrame(updateGradientRotation);
    }

    // Start the gradient animation
    updateGradientRotation();

    /**
     * Handle search input and trigger product search on Enter
     */
    if (searchInput) {
        searchInput.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') {
                searchProducts(this.value);
            }
        });
    }

    /**
     * Filter products by category (placeholder implementation)
     * @param {string} category - The category to filter by
     */
    function filterProducts(category) {
        // In a real implementation, this would filter the product list

        // Show loading animation
        const productsContainer = document.querySelector('.products-container');
        if (productsContainer) {
            productsContainer.innerHTML = `
                        <div class="col-span-4 flex justify-center items-center py-12">
                            <div class="spinner"></div>
                        </div>
                    `;

            // Simulate API call delay
            setTimeout(() => {
                // Update products
                productsContainer.innerHTML = `
                            <!-- Filtered products would be inserted here -->
                        `;

                // Animate the update
                AOS.refresh();
            }, 1000);
        }
    }

    /**
     * Sort products by specified criteria (placeholder implementation)
     * @param {string} sortBy - The sort criteria
     */
    function sortProducts(sortBy) {
        // In a real implementation, this would sort the product list

        // Show loading animation
        const productsContainer = document.querySelector('.products-container');
        if (productsContainer) {
            productsContainer.innerHTML = `
                        <div class="col-span-4 flex justify-center items-center py-12">
                            <div class="spinner"></div>
                        </div>
                    `;

            // Simulate API call delay
            setTimeout(() => {
                // Update products
                productsContainer.innerHTML = `
                            <!-- Sorted products would be inserted here -->
                        `;

                // Animate the update
                AOS.refresh();
            }, 1000);
        }
    }

    /**
     * Search products by query string (placeholder implementation)
     * @param {string} query - The search query
     */
    function searchProducts(query) {
        // In a real implementation, this would search the product catalog

        if (query.trim() !== '') {
            // Show loading animation
            const productsContainer = document.querySelector('.products-container');
            if (productsContainer) {
                productsContainer.innerHTML = `
                            <div class="col-span-4 flex justify-center items-center py-12">
                                <div class="spinner"></div>
                            </div>
                        `;

                // Simulate API call delay
                setTimeout(() => {
                    // Update products
                    productsContainer.innerHTML = `
                                <!-- Search results would be inserted here -->
                            `;

                    // Animate the update
                    AOS.refresh();
                }, 1000);
            }
        }
    }
});