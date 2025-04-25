// ——— Tema Butonu ———
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
  // Sayfa yüklenirken kayıtlı tercihi uygula
  const saved = localStorage.getItem('theme') === 'dark';
  document.body.classList.toggle('dark', saved);
  themeBtn.textContent = saved ? '☀️' : '🌓';

  themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeBtn.textContent = isDark ? '☀️' : '🌓';
  });
}

// ——— Mobil Menü ———
const navToggle = document.querySelector('.nav-toggle');
const navMenu   = document.querySelector('.nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// ——— Scroll-reveal Kart Animasyonu ———
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card').forEach(card => observer.observe(card));

/* Çoklu dil özelliği */
document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById('lang-toggle');
  let currentLang = localStorage.getItem('lang') || 'tr';

  const translations = {
    tr: {
      home: "Anasayfa",
      projects: "Projeler",
      about: "Hakkımda",
      contact: "İletişim",

      heroTitle: "Merhaba, ben İbrahim.",
      heroDesc: "Kod ile hayat bulan dijital gezgin.",

      aboutTitle: "Hakkımda",
      aboutP1: "Merhaba! Ben İbrahim Can Düven, bilgisayar programcılığı okuyan, kodun peşinden koşan dijital bir gezginim.",
      aboutP2: "Litvanya’da Erasmus serüvenim, bana farklı kültürlerden ilham alma ve global bakış açısı geliştirme fırsatı sundu.",
      aboutP3: "Hayalim? Londra’da bir teknoloji şirketinde çalışarak yenilikçi projelere imza atmak.",

      projectsTitle: "Projelerim",
      project1Title: "Yapılacaklar Listesi",
      project1Desc: "Yapılacaklar listesi oluşturmak için yapılan bir uygulama.",
      project2Title: "Hesap Makinesi",
      project2Desc: "Basit işlemler yapmak için kullanılan bir hesap makinesi uygulaması.",

      contactTitle: "İletişim",
      submit: "Gönder",
      placeholderName: "Adınız",
      placeholderEmail: "E-posta adresiniz",
      placeholderMsg: "Mesajınız..."
    },
    en: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",

      heroTitle: "Hello, I'm İbrahim.",
      heroDesc: "A digital nomad bringing life to code.",

      aboutTitle: "About Me",
      aboutP1: "Hi! I'm İbrahim Can Öğrenci, a computer programming student and a digital explorer chasing code.",
      aboutP2: "My Erasmus adventure in Lithuania gave me the chance to draw inspiration from different cultures.",
      aboutP3: "My dream? To work in a tech company in London and contribute to innovative projects.",

      projectsTitle: "My Projects",
      project1Title: "My To Do List",
      project1Desc: "An application used to create to-do lists",
      project2Title: "Calculator App",
      project2Desc: "A calculator application used to perform simple operations.",

      contactTitle: "Contact",
      submit: "Send",
      placeholderName: "Your Name",
      placeholderEmail: "Email Address",
      placeholderMsg: "Your message..."
    }
  };

  function applyLanguage(lang) {
    const trans = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (trans[key]) {
        el.textContent = trans[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (trans[key]) {
        el.placeholder = trans[key];
      }
    });
  }

  // Başlangıçta uygula
  applyLanguage(currentLang);

  // Düğmeye basınca değiştir
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'tr' ? 'en' : 'tr';
      localStorage.setItem('lang', currentLang);
      applyLanguage(currentLang);
    });
  }
});


// Sayfa yüklendiğinde dil uygula
setLanguage(currentLang);




