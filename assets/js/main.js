const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const year = document.querySelector('#year');
const languageToggle = document.querySelector('.language-toggle');
const languageLabel = document.querySelector('.language-label');

const translations = {
  ar: {
    page: { indexTitle: 'Ahmad Ghanem | Web Developer Portfolio', contactTitle: 'تواصل معي | Ahmad Ghanem' },
    meta: { description: 'Portfolio احترافي لمبرمج ومطور مواقع', contactDescription: 'تواصل مع أحمد غانم لتطوير مواقع الويب' },
    common: { skip: 'تخطي إلى المحتوى الرئيسي', switchTheme: 'تبديل الوضع الليلي والنهاري', switchLanguage: 'تبديل اللغة' },
    nav: { aria: 'القائمة الرئيسية', homeAria: 'الانتقال إلى الصفحة الرئيسية', open: 'فتح القائمة', home: 'الرئيسية', about: 'من أنا', skills: 'المهارات', projects: 'المشاريع', services: 'الخدمات', contact: 'تواصل معي' },
    hero: { eyebrow: 'Software Engineer & Web Developer', title: 'أبني مواقع احترافية بتصميم عصري وتجربة استخدام عالية.', text: 'أنا أحمد غانم، مطور مواقع أعمل على بناء واجهات متجاوبة، مواقع أعمال، لوحات تحكم، وأنظمة ويب عملية باستخدام HTML, CSS, JavaScript, PHP و MySQL.', projectsBtn: 'شاهد مشاريعي', contactBtn: 'تواصل معي', statsAria: 'إحصائيات مختصرة', statProjects: 'مشاريع', statServices: 'خدمات', imageAria: 'مكان صورة شخصية سيتم إضافتها لاحقاً', imagePlaceholder: 'ضع صورتك هنا' },
    about: { eyebrow: 'About Me', title: 'من أنا؟', text: 'مطور مواقع أركز على كتابة كود نظيف، تصميم واضح، وسرعة تحميل جيدة. أستطيع بناء صفحات تعريفية، مواقع شركات، أنظمة حجز، ولوحات تحكم قابلة للإدارة والتطوير.', skillsAria: 'المهارات التقنية' },
    skills: { eyebrow: 'Skills & Experience', title: 'المهارات والخبرات', text1: 'أمتلك خبرة عملية في تطوير واجهات الويب وبناء مواقع ديناميكية متجاوبة، مع التركيز على كتابة كود نظيف، أداء سريع، وتجربة استخدام واضحة.', text2: 'أعمل على تحويل الأفكار إلى مواقع حقيقية باستخدام تقنيات Frontend و Backend، وأستطيع بناء صفحات تعريفية، أنظمة حجز، لوحات تحكم، ونماذج تواصل قابلة للتطوير.', expAria: 'ملخص الخبرات', orbitAria: 'قائمة مهارات تقنية' },
    projects: { eyebrow: 'My Projects', title: 'المشاريع التي بنيتها', subtitle: 'يمكنك تعديل أسماء المشاريع والصور والروابط لاحقاً حسب أعمالك الفعلية.', imageAria: 'مكان صورة مشروع', imagePlaceholder: 'صورة المشروع', p1: 'نظام حجز صالونات يحتوي على تسجيل دخول، خدمات، مواعيد، ولوحة تحكم للإدارة.', p2: 'موقع شركة مع إعلانات، أعضاء الفريق، رسائل تواصل، وصلاحيات Admin / Editor.', p3: 'موقع شخصي احترافي لعرض المهارات، المشاريع، الخدمات، ومعلومات التواصل.', view: 'عرض المشروع' },
    services: { eyebrow: 'Services', title: 'الخدمات التي أقدمها', subtitle: 'خدمات تطوير ويب مناسبة للأفراد، الشركات، والمتاجر الناشئة.', s1Title: 'تصميم مواقع تعريفية', s1Text: 'تصميم صفحات احترافية للشركات والأشخاص مع تجربة استخدام واضحة ومتجاوبة.', s2Title: 'تطوير Frontend', s2Text: 'تحويل التصاميم إلى صفحات HTML/CSS/JS متوافقة مع جميع الشاشات.', s3Title: 'برمجة Backend', s3Text: 'بناء وظائف ديناميكية مثل تسجيل الدخول، قواعد البيانات، النماذج، ولوحات التحكم.', s4Title: 'لوحات تحكم', s4Text: 'إنشاء Admin Panel لإدارة المحتوى، المستخدمين، الرسائل، والمشاريع بسهولة.' },
    cta: { eyebrow: 'Let’s Work Together', title: 'هل لديك فكرة موقع؟', text: 'أستطيع مساعدتك في تحويل فكرتك إلى موقع احترافي، سريع، ومتجاوب.', btn: 'ابدأ مشروعك' },
    contact: { eyebrow: 'Contact Me', title: 'تواصل معي', subtitle: 'املأ النموذج التالي أو استخدم معلومات التواصل المباشرة.', name: 'الاسم الكامل', namePlaceholder: 'اكتب اسمك', nameError: 'الرجاء إدخال الاسم.', email: 'البريد الإلكتروني', emailError: 'الرجاء إدخال بريد إلكتروني صحيح.', subject: 'الموضوع', subjectPlaceholder: 'مثال: تصميم موقع شركة', subjectError: 'الرجاء إدخال الموضوع.', message: 'الرسالة', messagePlaceholder: 'اكتب تفاصيل مشروعك أو استفسارك', messageError: 'الرجاء إدخال الرسالة.', send: 'إرسال الرسالة', note: 'هذا النموذج Frontend فقط. يمكن ربطه لاحقاً بـ PHP أو خدمة بريد.', infoAria: 'معلومات التواصل', infoTitle: 'معلومات التواصل', infoText: 'يمكنك تعديل البيانات التالية ووضع بريدك وروابط حساباتك.', emailLabel: 'البريد الإلكتروني', phoneLabel: 'رقم الهاتف', linkedin: 'ضع رابط LinkedIn هنا', github: 'ضع رابط GitHub هنا', success: 'تم التحقق من النموذج بنجاح. يمكن ربط الإرسال لاحقاً بـ PHP أو Email Service.' },
    footer: { text: 'Portfolio شخصي بتصميم Liquid Glass لعرض المشاريع والخدمات بشكل احترافي.' }
  },
  en: {
    page: { indexTitle: 'Ahmad Ghanem | Web Developer Portfolio', contactTitle: 'Contact Me | Ahmad Ghanem' },
    meta: { description: 'Professional portfolio for a programmer and web developer', contactDescription: 'Contact Ahmad Ghanem for web development projects' },
    common: { skip: 'Skip to main content', switchTheme: 'Switch dark and light mode', switchLanguage: 'Switch language' },
    nav: { aria: 'Main navigation', homeAria: 'Go to homepage', open: 'Open menu', home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', services: 'Services', contact: 'Contact Me' },
    hero: { eyebrow: 'Software Engineer & Web Developer', title: 'I build professional websites with modern design and strong user experience.', text: 'I am Ahmad Ghanem, a web developer focused on responsive interfaces, business websites, admin dashboards, and practical web systems using HTML, CSS, JavaScript, PHP, and MySQL.', projectsBtn: 'View Projects', contactBtn: 'Contact Me', statsAria: 'Quick statistics', statProjects: 'Projects', statServices: 'Services', imageAria: 'Profile image placeholder to be added later', imagePlaceholder: 'Place your photo here' },
    about: { eyebrow: 'About Me', title: 'Who am I?', text: 'I am a web developer focused on clean code, clear design, and good loading performance. I can build landing pages, company websites, booking systems, and admin dashboards that are easy to manage and extend.', skillsAria: 'Technical skills' },
    skills: { eyebrow: 'Skills & Experience', title: 'Skills & Experience', text1: 'I have hands-on experience in developing responsive web interfaces and dynamic websites, with attention to clean code, fast performance, and clear user experience.', text2: 'I turn ideas into real websites using Frontend and Backend technologies, including landing pages, booking systems, dashboards, and scalable contact forms.', expAria: 'Experience summary', orbitAria: 'Technical skills list' },
    projects: { eyebrow: 'My Projects', title: 'Projects I Built', subtitle: 'You can edit project names, images, and links later based on your real work.', imageAria: 'Project image placeholder', imagePlaceholder: 'Project Image', p1: 'A salon booking system with login, services, appointments, and an admin dashboard.', p2: 'A company website with announcements, team members, contact messages, and Admin / Editor roles.', p3: 'A professional personal website for showcasing skills, projects, services, and contact information.', view: 'View Project' },
    services: { eyebrow: 'Services', title: 'Services I Provide', subtitle: 'Web development services for individuals, companies, and growing businesses.', s1Title: 'Business Website Design', s1Text: 'Professional pages for companies and individuals with clear and responsive user experience.', s2Title: 'Frontend Development', s2Text: 'Converting designs into HTML/CSS/JS pages compatible with all screen sizes.', s3Title: 'Backend Development', s3Text: 'Building dynamic features such as login, databases, forms, and admin dashboards.', s4Title: 'Admin Dashboards', s4Text: 'Creating admin panels to manage content, users, messages, and projects easily.' },
    cta: { eyebrow: 'Let’s Work Together', title: 'Do you have a website idea?', text: 'I can help you turn your idea into a professional, fast, and responsive website.', btn: 'Start Your Project' },
    contact: { eyebrow: 'Contact Me', title: 'Contact Me', subtitle: 'Fill out the form below or use the direct contact information.', name: 'Full Name', namePlaceholder: 'Write your name', nameError: 'Please enter your name.', email: 'Email Address', emailError: 'Please enter a valid email address.', subject: 'Subject', subjectPlaceholder: 'Example: Company website design', subjectError: 'Please enter the subject.', message: 'Message', messagePlaceholder: 'Write your project details or question', messageError: 'Please enter your message.', send: 'Send Message', note: 'This form is Frontend only. It can be connected later to PHP or an email service.', infoAria: 'Contact information', infoTitle: 'Contact Information', infoText: 'You can edit the following details and add your email and account links.', emailLabel: 'Email Address', phoneLabel: 'Phone Number', linkedin: 'Add your LinkedIn link here', github: 'Add your GitHub link here', success: 'The form was validated successfully. Sending can be connected later to PHP or an Email Service.' },
    footer: { text: 'A Liquid Glass personal portfolio for showcasing projects and services professionally.' }
  }
};

function getValue(path, lang) {
  return path.split('.').reduce((obj, key) => obj && obj[key], translations[lang]);
}

function applyLanguage(lang) {
  const activeLang = translations[lang] ? lang : 'ar';
  document.documentElement.lang = activeLang;
  document.documentElement.dir = activeLang === 'ar' ? 'rtl' : 'ltr';
  localStorage.setItem('portfolio-lang', activeLang);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = getValue(element.dataset.i18n, activeLang);
    if (value) element.textContent = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const value = getValue(element.dataset.i18nPlaceholder, activeLang);
    if (value) element.setAttribute('placeholder', value);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const value = getValue(element.dataset.i18nAriaLabel, activeLang);
    if (value) element.setAttribute('aria-label', value);
  });

  document.querySelectorAll('[data-i18n-content]').forEach((element) => {
    const value = getValue(element.dataset.i18nContent, activeLang);
    if (value) element.setAttribute('content', value);
  });

  const titleElement = document.querySelector('[data-i18n-title]');
  if (titleElement) {
    const value = getValue(titleElement.dataset.i18nTitle, activeLang);
    if (value) document.title = value;
  }

  if (languageLabel) languageLabel.textContent = activeLang === 'ar' ? 'EN' : 'AR';
}

const savedTheme = localStorage.getItem('portfolio-theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
  if (themeIcon) themeIcon.textContent = theme === 'light' ? '☀' : '☾';
}

setTheme(savedTheme || (prefersLight ? 'light' : 'dark'));
applyLanguage(localStorage.getItem('portfolio-lang') || 'ar');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  });
}

if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    const currentLang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
    applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
    closeMobileMenu();
  });
}

if (year) year.textContent = new Date().getFullYear();

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

navLinks.forEach((link) => link.addEventListener('click', closeMobileMenu));
window.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMobileMenu(); });

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
      const lang = document.documentElement.lang === 'en' ? 'en' : 'ar';
      alert(translations[lang].contact.success);
      contactForm.reset();
    }
  });
}
