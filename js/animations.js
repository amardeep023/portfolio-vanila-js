/**
 * Animations & Micro-Interactions Controller
 */

class AnimationController {
    constructor() {
        this.typewriterElement = document.getElementById('typewriter-text');
        this.initScrollReveal();
        this.initTypewriter();
        this.initStatsCounter();
    }

    /**
     * Typewriter effect for Hero section roles
     */
    initTypewriter() {
        if (!this.typewriterElement) return;

        const roles = (window.PORTFOLIO_CONFIG && window.PORTFOLIO_CONFIG.personal.rolesList) || [
            "B.Tech CSE Student",
            "Full-Stack Developer",
            "Cloud & DevOps Enthusiast",
            "Problem Solver"
        ];

        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 90;
        const deletingSpeed = 45;
        const delayBetweenRoles = 2000;

        const type = () => {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                this.typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                this.typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            let nextSpeed = isDeleting ? deletingSpeed : typingSpeed;

            if (!isDeleting && charIndex === currentRole.length) {
                nextSpeed = delayBetweenRoles;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                nextSpeed = 400;
            }

            setTimeout(type, nextSpeed);
        };

        type();
    }

    /**
     * IntersectionObserver for Scroll Reveal
     */
    initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal-init, .reveal-left, .reveal-right');
        
        if (!('IntersectionObserver' in window)) {
            revealElements.forEach(el => el.classList.add('revealed'));
            return;
        }

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    }

    /**
     * Animated number counter for Statistics Cards
     */
    initStatsCounter() {
        const statCounters = document.querySelectorAll('.stat-number');
        if (!statCounters.length) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-target'), 10);
                    const suffix = entry.target.getAttribute('data-suffix') || '';
                    this.animateCount(entry.target, target, suffix);
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statCounters.forEach(counter => observer.observe(counter));
    }

    animateCount(element, target, suffix) {
        let current = 0;
        const duration = 1600;
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, stepTime);
    }
}

// Global Toast Notification Helper
function showToast(message, type = 'success', duration = 3500) {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const iconSvg = type === 'success' 
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

    toast.innerHTML = `
        ${iconSvg}
        <span>${message}</span>
    `;

    container.appendChild(toast);

    // Trigger reveal
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, duration);
}

document.addEventListener('DOMContentLoaded', () => {
    window.animationController = new AnimationController();
});
