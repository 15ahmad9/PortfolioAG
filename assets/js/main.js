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
    page: { indexTitle: 'Ahmad Ghanem | Web Developer Portfolio', contactTitle: 'تواصل معي | Ahmad Ghanem', businessTitle: 'AG Solution | خدمات تطوير مواقع' },
    meta: { description: 'Portfolio احترافي لمبرمج ومطور مواقع', contactDescription: 'تواصل مع أحمد غانم لتطوير مواقع الويب', businessDescription: 'AG Solution تقدم حلول تصميم وتطوير مواقع ويب احترافية' },
    common: { skip: 'تخطي إلى المحتوى الرئيسي', switchTheme: 'تبديل الوضع الليلي والنهاري', switchLanguage: 'تبديل اللغة' },
    nav: { aria: 'القائمة الرئيسية', homeAria: 'الانتقال إلى الصفحة الرئيسية', open: 'فتح القائمة', home: 'الرئيسية', about: 'من أنا', skills: 'المهارات', projects: 'المشاريع', services: 'الخدمات', business: 'AG Solution', contact: 'تواصل معي' },
    hero: { eyebrow: 'Software Engineer & Web Developer', title: 'أبني مواقع احترافية بتصميم عصري وتجربة استخدام عالية.', text: 'أنا أحمد غانم، مطور مواقع أعمل على بناء واجهات متجاوبة، مواقع أعمال، لوحات تحكم، وأنظمة ويب عملية باستخدام HTML, CSS, JavaScript, PHP و MySQL.', projectsBtn: 'شاهد مشاريعي', cvBtn: 'تحميل السيرة الذاتية', contactBtn: 'تواصل معي', statsAria: 'إحصائيات مختصرة', statProjects: 'مشاريع', statServices: 'خدمات', imageAria: 'صورة شخصية لأحمد غانم', imagePlaceholder: 'ضع صورتك هنا' },
    about: { eyebrow: 'About Me', title: 'من أنا؟', text: 'أنا أحمد غانم، مهندس برمجيات ومطور مواقع ويب. حاصل على دبلوم عالٍ في هندسة البرمجيات من كلية عبد العزيز الغرير للحوسبة المتقدمة (ASAC)، وبكالوريوس في هندسة البرمجيات من جامعة الزيتونة الأردنية. أعمل على بناء مواقع إلكترونية حديثة ومتجاوبة، مع التركيز على كتابة كود نظيف، تصميم احترافي، وتجربة استخدام واضحة.', skillsAria: 'المهارات التقنية' },
    skills: { eyebrow: 'Skills & Experience', title: 'المهارات والخبرات', text1: 'أمتلك خبرة عملية في تطوير واجهات الويب وبناء مواقع ديناميكية متجاوبة، مع التركيز على كتابة كود نظيف، أداء سريع، وتجربة استخدام واضحة.', text2: 'أعمل على تحويل الأفكار إلى مواقع حقيقية باستخدام تقنيات Frontend و Backend، وأستطيع بناء صفحات تعريفية، أنظمة حجز، لوحات تحكم، ونماذج تواصل قابلة للتطوير.', expAria: 'ملخص الخبرات', orbitAria: 'قائمة مهارات تقنية' },
    projects: { eyebrow: 'My Projects', title: 'المشاريع التي بنيتها', subtitle: 'يمكنك تعديل أسماء المشاريع والصور والروابط لاحقاً حسب أعمالك الفعلية.', imageAria: 'مكان صورة مشروع', imagePlaceholder: 'صورة المشروع', p1: 'نظام حجز صالونات يحتوي على تسجيل دخول، خدمات، مواعيد، ولوحة تحكم للإدارة.', p2: 'موقع شركة مع إعلانات، أعضاء الفريق، رسائل تواصل، وصلاحيات Admin / Editor.', p3: 'موقع شخصي احترافي لعرض المهارات، المشاريع، الخدمات، ومعلومات التواصل.', view: 'عرض المشروع' },
    services: { eyebrow: 'Services', title: 'الخدمات التي أقدمها', subtitle: 'خدمات تطوير ويب مناسبة للأفراد، الشركات، والمتاجر الناشئة.', s1Title: 'تصميم مواقع تعريفية', s1Text: 'تصميم صفحات احترافية للشركات والأشخاص مع تجربة استخدام واضحة ومتجاوبة.', s2Title: 'تطوير Frontend', s2Text: 'تحويل التصاميم إلى صفحات HTML/CSS/JS متوافقة مع جميع الشاشات.', s3Title: 'برمجة Backend', s3Text: 'بناء وظائف ديناميكية مثل تسجيل الدخول، قواعد البيانات، النماذج، ولوحات التحكم.', s4Title: 'لوحات تحكم', s4Text: 'إنشاء Admin Panel لإدارة المحتوى، المستخدمين، الرسائل، والمشاريع بسهولة.' },
    cta: { eyebrow: 'AG Solution', title: 'حوّل فكرتك إلى موقع احترافي مع AG Solution', text: 'AG Solution هو البزنس الخاص بي وله موقع إلكتروني منفصل أقدم من خلاله حلول تصميم وتطوير مواقع ويب احترافية للشركات، المتاجر، والأفراد.', tagsAria: 'خدمات AG Solution المختصرة', tag1: 'مواقع شركات', tag2: 'Landing Pages', tag3: 'لوحات تحكم', businessBtn: 'زيارة موقع AG Solution لبدأ مشروعك', btn: 'ابدأ مشروعك' },
    contact: { eyebrow: 'Contact Me', title: 'تواصل معي', subtitle: 'املأ النموذج التالي أو استخدم معلومات التواصل المباشرة.', name: 'الاسم الكامل', namePlaceholder: 'اكتب اسمك', nameError: 'الرجاء إدخال الاسم.', email: 'البريد الإلكتروني', emailError: 'الرجاء إدخال بريد إلكتروني صحيح.', subject: 'الموضوع', subjectPlaceholder: 'مثال: تصميم موقع شركة', subjectError: 'الرجاء إدخال الموضوع.', message: 'الرسالة', messagePlaceholder: 'اكتب تفاصيل مشروعك أو استفسارك', messageError: 'الرجاء إدخال الرسالة.', send: 'إرسال الرسالة', note: 'هذا النموذج Frontend فقط. يمكن ربطه لاحقاً بـ PHP أو خدمة بريد.', infoAria: 'معلومات التواصل', infoTitle: 'معلومات التواصل', infoText: 'يمكنك تعديل البيانات التالية ووضع بريدك وروابط حساباتك.', emailLabel: 'البريد الإلكتروني', phoneLabel: 'رقم الهاتف', linkedin: 'ضع رابط LinkedIn هنا', github: 'ضع رابط GitHub هنا', success: 'تم التحقق من النموذج بنجاح. يمكن ربط الإرسال لاحقاً بـ PHP أو Email Service.' },
    footer: { text: 'ملف شخصي لأحمد غانم، يجمع بين التصميم الحديث وتجربة المستخدم المميزة لعرض المشاريع والخدمات والمهارات التقنية بأسلوب احترافي يعكس الهوية الشخصية والخبرة العملية.' },
    business: { eyebrow: 'AG Solution', title: 'حلول ويب احترافية تساعد مشروعك على الظهور بثقة', text: 'AG Solution هي علامتي الخاصة لتقديم خدمات تصميم وتطوير المواقع، من صفحات تعريفية بسيطة إلى مواقع أعمال ولوحات تحكم قابلة للإدارة. الهدف هو بناء موقع سريع، واضح، ومتجاوب يعكس هوية مشروعك.', primaryBtn: 'اطلب موقعك الآن', secondaryBtn: 'شاهد الأعمال', brandAria: 'بطاقة علامة AG Solution', brandText: 'تصميم وتطوير مواقع', aboutEyebrow: 'About The Business', aboutTitle: 'ما هي AG Solution؟', aboutText: 'هي خدمة متخصصة في بناء مواقع إلكترونية عصرية للشركات الناشئة، أصحاب الأعمال، والمتاجر الصغيرة. أركز على تصميم واجهات جذابة، تجربة استخدام مريحة، وكود منظم قابل للتطوير لاحقاً.', valueEyebrow: 'What I Deliver', valueTitle: 'القيمة التي أقدمها', valueText: 'أساعدك في تحويل فكرتك إلى موقع واضح وسهل الاستخدام، مع أقسام مرتبة، سرعة تحميل جيدة، توافق مع الموبايل، وإمكانية تطوير الموقع مستقبلاً حسب احتياج مشروعك.', servicesEyebrow: 'Services', servicesTitle: 'خدمات AG Solution', servicesText: 'خدمات عملية لبناء حضور رقمي احترافي.', s1Title: 'مواقع تعريفية للشركات', s1Text: 'تصميم موقع يعرض خدماتك، أعمالك، ومعلومات التواصل بشكل احترافي.', s2Title: 'صفحات هبوط', s2Text: 'Landing Pages مخصصة للحملات التسويقية وجذب العملاء المحتملين.', s3Title: 'لوحات تحكم', s3Text: 'Admin Panels لإدارة المحتوى، الرسائل، المشاريع، والبيانات بسهولة.', s4Title: 'تطوير وتعديل مواقع', s4Text: 'تحسين التصميم، حل المشاكل، إضافة صفحات جديدة، وتحسين تجربة الموبايل.' }
  },
  en: {
    page: { indexTitle: 'Ahmad Ghanem | Web Developer Portfolio', contactTitle: 'Contact Me | Ahmad Ghanem', businessTitle: 'AG Solution | Web Development Services' },
    meta: { description: 'Professional portfolio for a programmer and web developer', contactDescription: 'Contact Ahmad Ghanem for web development projects', businessDescription: 'AG Solution provides professional web design and development services' },
    common: { skip: 'Skip to main content', switchTheme: 'Switch dark and light mode', switchLanguage: 'Switch language' },
    nav: { aria: 'Main navigation', homeAria: 'Go to homepage', open: 'Open menu', home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', services: 'Services', business: 'AG Solution', contact: 'Contact Me' },
    hero: { eyebrow: 'Software Engineer & Web Developer', title: 'I build professional websites with modern design and strong user experience.', text: 'I am Ahmad Ghanem, a web developer focused on responsive interfaces, business websites, admin dashboards, and practical web systems using HTML, CSS, JavaScript, PHP, and MySQL.', projectsBtn: 'View Projects', cvBtn: 'Download CV', contactBtn: 'Contact Me', statsAria: 'Quick statistics', statProjects: 'Projects', statServices: 'Services', imageAria: 'Profile photo of Ahmad Ghanem', imagePlaceholder: 'Place your photo here' },
    about: { eyebrow: 'About Me', title: 'Who am I?', text: 'I am Ahmad Ghanem, a Software Engineer and Web Developer. I hold a Higher Diploma in Software Engineering from Abdul Aziz Al Ghurair School of Advanced Computing (ASAC), and a Bachelor\'s degree in Software Engineering from Al-Zaytoonah University of Jordan. I build modern, responsive websites with clean code, professional design, and a clear user experience.', skillsAria: 'Technical skills' },
    skills: { eyebrow: 'Skills & Experience', title: 'Skills & Experience', text1: 'I have hands-on experience in developing responsive web interfaces and dynamic websites, with attention to clean code, fast performance, and clear user experience.', text2: 'I turn ideas into real websites using Frontend and Backend technologies, including landing pages, booking systems, dashboards, and scalable contact forms.', expAria: 'Experience summary', orbitAria: 'Technical skills list' },
    projects: { eyebrow: 'My Projects', title: 'Projects I Built', subtitle: 'You can edit project names, images, and links later based on your real work.', imageAria: 'Project image placeholder', imagePlaceholder: 'Project Image', p1: 'A salon booking system with login, services, appointments, and an admin dashboard.', p2: 'A company website with announcements, team members, contact messages, and Admin / Editor roles.', p3: 'A professional personal website for showcasing skills, projects, services, and contact information.', view: 'View Project' },
    services: { eyebrow: 'Services', title: 'Services I Provide', subtitle: 'Web development services for individuals, companies, and growing businesses.', s1Title: 'Business Website Design', s1Text: 'Professional pages for companies and individuals with clear and responsive user experience.', s2Title: 'Frontend Development', s2Text: 'Converting designs into HTML/CSS/JS pages compatible with all screen sizes.', s3Title: 'Backend Development', s3Text: 'Building dynamic features such as login, databases, forms, and admin dashboards.', s4Title: 'Admin Dashboards', s4Text: 'Creating admin panels to manage content, users, messages, and projects easily.' },
    cta: { eyebrow: 'AG Solution', title: 'Turn your idea into a professional website with AG Solution', text: 'AG Solution is my business and it has a separate website where I provide professional web design and development solutions for companies, stores, and individuals.', tagsAria: 'AG Solution short services', tag1: 'Business Websites', tag2: 'Landing Pages', tag3: 'Admin Panels', businessBtn: 'Visit the AG Solution website to start your project', btn: 'Start Your Project' },
    contact: { eyebrow: 'Contact Me', title: 'Contact Me', subtitle: 'Fill out the form below or use the direct contact information.', name: 'Full Name', namePlaceholder: 'Write your name', nameError: 'Please enter your name.', email: 'Email Address', emailError: 'Please enter a valid email address.', subject: 'Subject', subjectPlaceholder: 'Example: Company website design', subjectError: 'Please enter the subject.', message: 'Message', messagePlaceholder: 'Write your project details or question', messageError: 'Please enter your message.', send: 'Send Message', note: 'This form is Frontend only. It can be connected later to PHP or an email service.', infoAria: 'Contact information', infoTitle: 'Contact Information', infoText: 'You can edit the following details and add your email and account links.', emailLabel: 'Email Address', phoneLabel: 'Phone Number', linkedin: 'Add your LinkedIn link here', github: 'Add your GitHub link here', success: 'The form was validated successfully. Sending can be connected later to PHP or an Email Service.' },
    footer: { text: 'A personal portfolio for Ahmed Ghanem, combining modern design and a distinctive user experience to showcase projects, services, and technical skills in a professional style that reflects personal identity and practical experience.' },
    business: { eyebrow: 'AG Solution', title: 'Professional web solutions that help your business show up with confidence', text: 'AG Solution is my personal brand for web design and development services, from simple landing pages to business websites and manageable admin dashboards. The goal is to build a fast, clear, and responsive website that reflects your brand.', primaryBtn: 'Request Your Website', secondaryBtn: 'View Work', brandAria: 'AG Solution brand card', brandText: 'Web Design & Development', aboutEyebrow: 'About The Business', aboutTitle: 'What is AG Solution?', aboutText: 'A specialized service for building modern websites for startups, business owners, and small stores. I focus on attractive interfaces, comfortable user experience, and organized code that can be extended later.', valueEyebrow: 'What I Deliver', valueTitle: 'The Value I Provide', valueText: 'I help you turn your idea into a clear and easy-to-use website with structured sections, good loading speed, mobile compatibility, and the ability to scale later based on your business needs.', servicesEyebrow: 'Services', servicesTitle: 'AG Solution Services', servicesText: 'Practical services for building a professional digital presence.', s1Title: 'Business Websites', s1Text: 'A website that presents your services, work, and contact information professionally.', s2Title: 'Landing Pages', s2Text: 'Custom landing pages for marketing campaigns and lead generation.', s3Title: 'Admin Dashboards', s3Text: 'Admin panels to manage content, messages, projects, and data easily.', s4Title: 'Website Development & Updates', s4Text: 'Improving design, fixing issues, adding new pages, and enhancing mobile experience.' }
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
