/**
 * Main Portfolio UI Logic & Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initNavbarScroll();
    initMobileNav();
    initActiveScrollSpy();
    initContactForm();
    initCopyToClipboard();
    initCategoryFilters();
    initFooterInfo();
});

/**
 * 1. Dark / Light Theme Switcher with LocalStorage Persistence
 */
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(themeToggleBtn, savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        updateThemeIcon(themeToggleBtn, newTheme);
        showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info', 2000);
    });
}

function updateThemeIcon(btn, theme) {
    if (theme === 'light') {
        // Show Moon icon for switching to dark
        btn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        `;
        btn.setAttribute('aria-label', 'Switch to Dark Mode');
    } else {
        // Show Sun icon for switching to light
        btn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
        `;
        btn.setAttribute('aria-label', 'Switch to Light Mode');
    }
}

/**
 * 2. Sticky Navbar Visual Elevation on Scroll
 */
function initNavbarScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });
}

/**
 * 3. Mobile Navigation Drawer & Hamburger Toggle
 */
function initMobileNav() {
    const hamburger = document.getElementById('hamburger-btn');
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('drawer-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!hamburger || !drawer || !overlay) return;

    const toggleDrawer = () => {
        hamburger.classList.toggle('active');
        drawer.classList.toggle('open');
        overlay.classList.toggle('active');
        document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
    };

    const closeDrawer = () => {
        hamburger.classList.remove('active');
        drawer.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', toggleDrawer);
    overlay.addEventListener('click', closeDrawer);

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });
}

/**
 * 4. Active Scroll-Spy for Navigation Links
 */
function initActiveScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    if (!sections.length || !navLinks.length) return;

    const highlightNav = () => {
        const scrollPosition = window.scrollY + 140;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPosition >= top && scrollPosition < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNav, { passive: true });
    highlightNav();
}

/**
 * 5. Interactive Category Filtering (Skills & Projects)
 */
function initCategoryFilters() {
    const skillTabs = document.querySelectorAll('.skill-tab-btn');
    const skillCards = document.querySelectorAll('.skill-category-card');

    if (skillTabs.length && skillCards.length) {
        skillTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                skillTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const filter = tab.getAttribute('data-filter');

                skillCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
}

/**
 * 6. Copy to Clipboard Utility with Instant Feedback
 */
function initCopyToClipboard() {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const textToCopy = btn.getAttribute('data-copy');
            if (!textToCopy) return;

            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalHtml = btn.innerHTML;
                btn.innerHTML = `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                `;
                btn.classList.add('copied');
                showToast(`Copied "${textToCopy}" to clipboard!`, 'success');

                setTimeout(() => {
                    btn.innerHTML = originalHtml;
                    btn.classList.remove('copied');
                }, 2000);
            }).catch(() => {
                showToast('Failed to copy text', 'info');
            });
        });
    });
}

/**
 * 7. Contact Form Validation & Submission Handling
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const subjectInput = document.getElementById('form-subject');
    const messageInput = document.getElementById('form-message');
    const submitBtn = document.getElementById('form-submit-btn');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateField = (input, condition) => {
        if (!condition) {
            input.classList.add('invalid');
            return false;
        } else {
            input.classList.remove('invalid');
            return true;
        }
    };

    // Live validation on blur
    if (nameInput) nameInput.addEventListener('blur', () => validateField(nameInput, nameInput.value.trim().length >= 2));
    if (emailInput) emailInput.addEventListener('blur', () => validateField(emailInput, emailRegex.test(emailInput.value.trim())));
    if (subjectInput) subjectInput.addEventListener('blur', () => validateField(subjectInput, subjectInput.value.trim().length >= 3));
    if (messageInput) messageInput.addEventListener('blur', () => validateField(messageInput, messageInput.value.trim().length >= 10));

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const isNameValid = validateField(nameInput, nameInput.value.trim().length >= 2);
        const isEmailValid = validateField(emailInput, emailRegex.test(emailInput.value.trim()));
        const isSubjectValid = validateField(subjectInput, subjectInput.value.trim().length >= 3);
        const isMessageValid = validateField(messageInput, messageInput.value.trim().length >= 10);

        if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
            showToast('Please correct the highlighted errors in the form.', 'info');
            return;
        }

        // Simulate Sending State
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
                <path d="M12 2a10 10 0 0 1 10 10" stroke="#ffffff"></path>
            </svg>
            Sending Message...
        `;

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            form.reset();
            showToast(`Thank you, ${nameInput.value.trim() || 'friend'}! Your message has been sent successfully.`, 'success', 5000);
        }, 1200);
    });
}

/**
 * 8. Live Footer Time & Year Info
 */
function initFooterInfo() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}
