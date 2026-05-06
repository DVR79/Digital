// Scroll Animations (Intersection Observer)
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.service-full-card, .optimization-card, .process-step, .faq-item, .case-preview-link, .founder-story, .team-section').forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// Animated Counters
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const text = element.textContent;
    const numberMatch = text.match(/[\d.]+/);
    if (!numberMatch) return;

    const target = parseFloat(numberMatch[0]);
    const suffix = text.replace(numberMatch[0], '');
    const duration = 2000;
    const start = Date.now();

    function update() {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(target * progress * 100) / 100;
        element.textContent = current + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = text;
        }
    }
    update();
}

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const nav = document.getElementById('nav');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close menu when clicking links
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-inner') && nav.classList.contains('active')) {
        nav.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Form Submission
function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    // Get form values
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Show success message
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = '✓ Thank you! We\'ll be in touch.';
    submitBtn.style.background = '#10b981';

    // Reset form after 2 seconds
    setTimeout(() => {
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
    }, 2000);

    // In production, you would send this to your server
    console.log('Form submission:', data);
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initCounterAnimation();
});
