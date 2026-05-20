
/* =========================
   REVEAL ANIMATION
========================= */

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.12
});

reveals.forEach(section => {
  observer.observe(section);
});


/* =========================
   TOP BUTTON
========================= */

const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});

topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


/* =========================
   TRANSLATIONS
========================= */

const translations = {
es: {
  nav1: "Serie Spark",
  nav2: "Garantía",
  nav3: "Contacto",

  "hero-eyebrow": "INGENIERÍA PROFESIONAL PARA BARBERÍA",
  "hero-title": "Herramientas diseñadas<br>para el dominio.",
  "hero-desc": "Cuando dominas el oficio,<br>no eliges herramientas. eliges precisión.",

  "spark-label": "SERIE SPARK",
  "spark-title": "Diseñadas por expertos.<br>Construidas para profesionales.",

  dash: "Potencia controlada.<br>Precisión absoluta en cada corte.",
  strike: "El detalle no es el acabado.<br>Es tu firma.",
  zero: "El acabado que distingue lo limpio de lo impecable.",
  storm: "Flujo de aire de alta velocidad para control total del espacio de trabajo.",

  "support-label": "SOPORTE",
  "warranty-title": "Garantía",
  "warranty-intro": "Condiciones de garantía de los productos DGR Professional.",
  w1: "¿Qué cubre la garantía?",
  w2: "Productos adquiridos en distribuidores oficiales con comprobante de compra.",
  w3: "Duración de la garantía",
  w4: "Fabricados bajo estándares profesionales de calidad y testados individualmente.",
  w5: "Uso profesional: 2 años desde la fecha de factura.",
  w7: "No cubre daños accidentales.",
  w8: "La manipulación externa invalida la garantía.",
  w9: "Distribuidores no autorizados quedan excluidos.",

  "contact-label": "CONTACTO",
  "contact-title": "Diseñado para barberos<br>que exigen control absoluto.",
  email: "Correo",
  support: "Atención al cliente",
  schedule: "Lunes a viernes<br>9:00 — 18:00",
  address: "Av. Bon Pastor 33–45<br>08930 Sant Adrià del Besòs<br>Barcelona · España",

  "footer-desc": "Ingeniería de barbería de precisión.",
  "footer-rights": "DGR Professional © 2026. Todos los derechos reservados."
},


en: {
  nav1: "Spark Series",
  nav2: "Warranty",
  nav3: "Contact",

  "hero-eyebrow": "PROFESSIONAL BARBER ENGINEERING",
  "hero-title": "Tools engineered<br>for mastery.",
  "hero-desc": "When you master the craft,<br>you don’t choose tools. you choose precision.",

  "spark-label": "SPARK SERIES",
  "spark-title": "Designed by experts.<br>Built for professionals.",

  dash: "Controlled power.<br>Absolute precision in every cut.",
  strike: "Detail is not the finish.<br>It is your signature.",
  zero: "The finish that separates clean from flawless.",
  storm: "High-speed airflow engineered for full workstation control.",

  "support-label": "SUPPORT",
  "warranty-title": "Warranty",
  "warranty-intro": "Warranty terms for DGR Professional products.",
  w1: "What does the warranty cover?",
  w2: "Products purchased through official distributors with proof of purchase.",
  w3: "Warranty period",
  w4: "Built under professional-grade standards and individually tested.",
  w5: "Professional use: 2 years from invoice date.",
  w7: "Accidental damage not covered.",
  w8: "Third-party tampering voids warranty.",
  w9: "Unauthorized distributors excluded.",

  "contact-label": "CONTACT",
  "contact-title": "Built for barbers<br>who demand absolute control.",
  email: "Email",
  support: "Customer service",
  schedule: "Monday to Friday<br>9:00 — 18:00",
  address: "Av. Bon Pastor 33–45<br>08930 Sant Adrià del Besòs<br>Barcelona · Spain",

  "footer-desc": "Precision barber engineering.",
  "footer-rights": "DGR Professional © 2026. All rights reserved."
}


};


/* =========================
   ACTIVE LANGUAGE BUTTON
========================= */

function setActiveLang(lang) {
  const esBtn = document.getElementById("lang-es");
  const enBtn = document.getElementById("lang-en");

  esBtn.classList.remove("active");
  enBtn.classList.remove("active");

  if (lang === "es") {
    esBtn.classList.add("active");
  } else {
    enBtn.classList.add("active");
  }
}


/* =========================
   LANGUAGE SWITCH
========================= */

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");

    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  setActiveLang(lang);

  localStorage.setItem("lang", lang);
}


/* =========================
   NAV ACTIVE (SCROLL)
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

function setActiveNav() {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 120;
    const height = section.clientHeight;

    if (window.scrollY >= top && window.scrollY < top + height) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveNav);


/* =========================
   NAV CLICK ACTIVE (instant)
========================= */

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});


/* =========================
   EVENTS (LANG BUTTONS)
========================= */

document.getElementById("lang-es").addEventListener("click", () => {
  setLanguage("es");
});

document.getElementById("lang-en").addEventListener("click", () => {
  setLanguage("en");
});


/* =========================
   INIT
========================= */

const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);
setActiveNav();


/* =========================
   LOGO ANIMADO
========================= */

const logo = document.getElementById("logo");

function animateLogo() {
  if (!logo) return;

  logo.classList.remove("animate");

  requestAnimationFrame(() => {
    logo.classList.add("animate");
  });
}

// al cargar
window.addEventListener("load", () => {
  animateLogo();
});

// click logo
logo.addEventListener("click", () => {
  animateLogo();
});



/* =========================
   CURSOR 
========================= */
const cursorImg = document.querySelector(".cursor-img");

let mouseX = 0;
let mouseY = 0;

let posX = 0;
let posY = 0;

// track mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// smooth follow
function animate() {
  posX += (mouseX - posX) * 0.12;
  posY += (mouseY - posY) * 0.12;

  cursorImg.style.left = posX + "px";
  cursorImg.style.top = posY + "px";

  requestAnimationFrame(animate);
}

animate();



/* =========================
   CURSOR ANIMACIÓN HAIRS
========================= */
const hairContainer = document.getElementById("hair-container");

window.addEventListener("mousemove", (e) => {
  // MÁS cantidad (ajusta aquí)
  for (let i = 0; i < 3; i++) {
    createHair(e.clientX, e.clientY);
  }
});

function createHair(x, y) {
  const hair = document.createElement("div");
  hair.classList.add("hair");

  // posición con dispersión (más desorden)
  const offsetX = (Math.random() - 0.5) * 20;
  const offsetY = (Math.random() - 0.5) * 20;

  hair.style.left = x + offsetX + "px";
  hair.style.top = y + offsetY + "px";

  // tamaño más variado
  const width = 2 + Math.random() * 10;
  const height = 1 + Math.random() * 2;

  hair.style.width = width + "px";
  hair.style.height = height + "px";

  // rotación caótica
  const angle = Math.random() * 360;
  hair.style.transform = `rotate(${angle}deg)`;

  // variación de color (ligera sensación de pelo real)
  const opacity = 0.1 + Math.random() * 0.5;
  hair.style.background = `rgba(0,0,0,${opacity})`;

  hairContainer.appendChild(hair);

  // vida corta
  setTimeout(() => {
    hair.remove();
  }, 900);
}