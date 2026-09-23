// NAVBAR SCROLL EFFECT
const nav = document.querySelector('.portfolio-nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
});

// HAMBURGER CLOSE ON LINK CLICK
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const collapse = document.getElementById('nav-menu');
        const bsCollapse = bootstrap.Collapse.getInstance(collapse);
        if (bsCollapse) bsCollapse.hide();
    });
});

// ACTIVE LINK STATE (APPROACH 2 - JavaScript automatic)
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
    }
});

// CONTACT FORM VALIDATION
function isEmailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const contactForm = document.getElementById('portfolio-contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById('contact-name');
        const nameError = document.getElementById('name-error');
        if (name.value.trim().length < 2) {
            name.classList.add('is-invalid');
            isValid = false;
        } else {
            name.classList.remove('is-invalid');
            name.classList.add('is-valid');
        }

        const email = document.getElementById('contact-email');
        const emailError = document.getElementById('email-error');
        if (!isEmailValid(email.value.trim())) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
        }

        const msg = document.getElementById('contact-msg');
        if (msg.value.trim().length < 20) {
            msg.classList.add('is-invalid');
            isValid = false;
        } else {
            msg.classList.remove('is-invalid');
            msg.classList.add('is-valid');
        }

        if (isValid) {
            document.getElementById('contact-success').classList.remove('d-none');
            e.target.reset();
            // Remove green borders after reset:
            document.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
        }
    });
}

// FOOTER YEAR
const footerYear = document.getElementById('footer-year');
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}
