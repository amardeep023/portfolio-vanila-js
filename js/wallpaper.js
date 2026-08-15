/**
 * Live Wallpaper Interactive Canvas Engine
 * ----------------------------------------------------
 * High-performance interactive particle mesh, dynamic glowing nodes,
 * connecting neural lines, and floating ambient nebula energy.
 * Supports Dark & Light mode palettes and mouse interaction physics.
 */

class LiveWallpaper {
    constructor() {
        this.canvas = document.getElementById('live-wallpaper-canvas');
        if (!this.canvas) {
            this.createCanvas();
        }
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.nebulaOrbs = [];
        this.mouse = {
            x: null,
            y: null,
            radius: 160,
            active: false
        };
        this.animationFrameId = null;
        this.dpr = Math.min(window.devicePixelRatio || 1, 2);

        this.initThemeConfig();
        this.resize();
        this.initParticles();
        this.initNebulaOrbs();
        this.bindEvents();
        this.animate();
    }

    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'live-wallpaper-canvas';
        this.canvas.className = 'live-wallpaper-canvas';
        document.body.prepend(this.canvas);
    }

    initThemeConfig() {
        const theme = document.documentElement.getAttribute('data-theme') || 'dark';
        this.isDark = theme === 'dark';

        if (this.isDark) {
            this.colors = {
                particles: ['#38bdf8', '#818cf8', '#c084fc', '#34d399'],
                lineBase: 'rgba(56, 189, 248,',
                mouseLine: 'rgba(129, 140, 248,',
                orbs: [
                    { color: 'rgba(56, 189, 248, 0.08)', radius: 350 },
                    { color: 'rgba(129, 140, 248, 0.07)', radius: 400 },
                    { color: 'rgba(192, 132, 252, 0.06)', radius: 320 }
                ]
            };
        } else {
            this.colors = {
                particles: ['#0284c7', '#6366f1', '#9333ea', '#059669'],
                lineBase: 'rgba(2, 132, 199,',
                mouseLine: 'rgba(99, 102, 241,',
                orbs: [
                    { color: 'rgba(14, 165, 233, 0.07)', radius: 350 },
                    { color: 'rgba(99, 102, 241, 0.06)', radius: 400 },
                    { color: 'rgba(168, 85, 247, 0.05)', radius: 320 }
                ]
            };
        }
    }

    updateTheme() {
        this.initThemeConfig();
        this.particles.forEach(p => {
            p.color = this.colors.particles[Math.floor(Math.random() * this.colors.particles.length)];
        });
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width * this.dpr;
        this.canvas.height = this.height * this.dpr;
        this.ctx.scale(this.dpr, this.dpr);
    }

    initParticles() {
        this.particles = [];
        // Calculate particle count dynamically based on screen area
        const count = Math.floor((this.width * this.height) / 14000);
        const particleCount = Math.min(Math.max(count, 45), 110);

        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                vx: (Math.random() - 0.5) * 0.75,
                vy: (Math.random() - 0.5) * 0.75,
                radius: Math.random() * 2.2 + 1.2,
                baseAlpha: Math.random() * 0.6 + 0.3,
                pulseSpeed: Math.random() * 0.02 + 0.01,
                pulseAngle: Math.random() * Math.PI * 2,
                color: this.colors.particles[Math.floor(Math.random() * this.colors.particles.length)]
            });
        }
    }

    initNebulaOrbs() {
        this.nebulaOrbs = [
            { x: this.width * 0.2, y: this.height * 0.25, vx: 0.15, vy: 0.2, config: this.colors.orbs[0] },
            { x: this.width * 0.8, y: this.height * 0.65, vx: -0.2, vy: 0.15, config: this.colors.orbs[1] },
            { x: this.width * 0.5, y: this.height * 0.85, vx: 0.18, vy: -0.15, config: this.colors.orbs[2] }
        ];
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            this.initParticles();
            this.initNebulaOrbs();
        }, { passive: true });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            this.mouse.active = true;
        }, { passive: true });

        window.addEventListener('mouseleave', () => {
            this.mouse.active = false;
            this.mouse.x = null;
            this.mouse.y = null;
        });

        // Touch support for mobile devices
        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.mouse.x = e.touches[0].clientX;
                this.mouse.y = e.touches[0].clientY;
                this.mouse.active = true;
            }
        }, { passive: true });

        window.addEventListener('touchend', () => {
            this.mouse.active = false;
        });

        // Listen for Theme Attribute Changes
        const observer = new MutationObserver(() => {
            this.updateTheme();
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

        // Pause / Resume on Tab Visibility Change to conserve CPU
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(this.animationFrameId);
            } else {
                this.animate();
            }
        });
    }

    drawNebula() {
        this.nebulaOrbs.forEach(orb => {
            orb.x += orb.vx;
            orb.y += orb.vy;

            if (orb.x < -100 || orb.x > this.width + 100) orb.vx *= -1;
            if (orb.y < -100 || orb.y > this.height + 100) orb.vy *= -1;

            const gradient = this.ctx.createRadialGradient(
                orb.x, orb.y, 10,
                orb.x, orb.y, orb.config.radius
            );
            gradient.addColorStop(0, orb.config.color);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(orb.x, orb.y, orb.config.radius, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    drawParticlesAndLines() {
        const connectionDistance = 135;
        const mouseConnectionDistance = this.mouse.radius;

        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];

            // Organic Position Update
            p.x += p.vx;
            p.y += p.vy;

            // Bounce on Canvas Edges
            if (p.x < 0 || p.x > this.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.height) p.vy *= -1;

            // Subtle Alpha Breathing Pulsation
            p.pulseAngle += p.pulseSpeed;
            const currentAlpha = p.baseAlpha + Math.sin(p.pulseAngle) * 0.2;

            // Mouse Interactive Repulsion / Orbit Physics
            if (this.mouse.active && this.mouse.x !== null) {
                const dx = this.mouse.x - p.x;
                const dy = this.mouse.y - p.y;
                const dist = Math.hypot(dx, dy);

                if (dist < mouseConnectionDistance) {
                    const force = (mouseConnectionDistance - dist) / mouseConnectionDistance;
                    const angle = Math.atan2(dy, dx);
                    
                    // Gentle push away
                    p.x -= Math.cos(angle) * force * 1.5;
                    p.y -= Math.sin(angle) * force * 1.5;

                    // Draw glowing tether line to mouse cursor
                    const mouseAlpha = (1 - dist / mouseConnectionDistance) * 0.65;
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `${this.colors.mouseLine} ${mouseAlpha})`;
                    this.ctx.lineWidth = 1.2;
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(this.mouse.x, this.mouse.y);
                    this.ctx.stroke();
                }
            }

            // Draw Node Particle
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = Math.max(0.1, Math.min(currentAlpha, 1));
            this.ctx.fill();
            this.ctx.globalAlpha = 1;

            // Draw Inter-Particle Neural Connections
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.hypot(dx, dy);

                if (dist < connectionDistance) {
                    const alpha = (1 - dist / connectionDistance) * (this.isDark ? 0.32 : 0.2);
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `${this.colors.lineBase} ${alpha})`;
                    this.ctx.lineWidth = 0.85;
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        // 1. Render soft ambient light orbs in background
        this.drawNebula();

        // 2. Render interactive particle constellation network
        this.drawParticlesAndLines();

        this.animationFrameId = requestAnimationFrame(() => this.animate());
    }
}

// Instantiate upon DOM Load
document.addEventListener('DOMContentLoaded', () => {
    window.liveWallpaper = new LiveWallpaper();
});
