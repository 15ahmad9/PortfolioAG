const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const year = document.querySelector('#year');

const savedTheme = localStorage.getItem('portfolio-theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);

  if (themeIcon) {
    themeIcon.textContent = theme === 'light' ? '☀' : '☾';
  }
}

setTheme(savedTheme || (prefersLight ? 'light' : 'dark'));

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

function closeMobileMenu() {
  if (!navMenu || !navToggle) return;
  navMenu.classList.remove('open');
  navToggle.classList.remove('active');
  navToggle.setAttribute('aria-expanded', 'false');
  body.classList.remove('menu-open');
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    body.classList.toggle('menu-open', isOpen);
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMobileMenu();
});

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fields = contactForm.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    fields.forEach((field) => {
      const group = field.closest('.form-group');
      const fieldIsValid = field.type === 'email'
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())
        : field.value.trim().length > 0;

      group.classList.toggle('invalid', !fieldIsValid);
      field.setAttribute('aria-invalid', String(!fieldIsValid));

      if (!fieldIsValid) isValid = false;
    });

    if (isValid) {
      alert('تم التحقق من النموذج بنجاح. يمكن ربط الإرسال لاحقاً بـ PHP أو Email Service.');
      contactForm.reset();
    }
  });
}
