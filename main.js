// Mobile nav toggle
const toggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    toggle.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.classList.remove('active');
    });
});

// Form submission
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Replace this with your actual form handler (Formspree, Netlify Forms, etc.)
    console.log('Form submitted:', data);

    // Show success message
    form.innerHTML = `
        <div style="text-align: center; padding: 40px 0;">
            <div style="font-size: 2.5rem; margin-bottom: 16px;">&#10003;</div>
            <h3 style="margin-bottom: 8px;">Message sent!</h3>
            <p style="color: #64748b;">We'll get back to you within 24 hours.</p>
        </div>
    `;
});

// Smooth scroll offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});
