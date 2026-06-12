/* =========================
   HERO SCROLL EFFECT
========================= */
const hero = document.querySelector(".hero-pin");
const video = document.querySelector(".hero-video");
const content = document.querySelector(".hero-content");

function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}

window.addEventListener("scroll", () => {
  if (!hero || !video || !content) return;

  const rect = hero.getBoundingClientRect();

  let progress = -rect.top / (hero.offsetHeight - window.innerHeight);
  progress = clamp(progress, 0, 1);
  progress = 1 - Math.pow(1 - progress, 6);

  const isMobile = window.innerWidth < 900;

  // SCALE
  const scale = 1 - progress * 0.1;

  // BORDER RADIUS
  const radius = progress * 40;

  // BLUR SUAVE EN MOBILE + NORMAL EN DESKTOP
  const blur = isMobile
    ? progress * 2   // MUY SUAVE (mobile)
    : progress * 4;    // desktop más cinematográfico

  // MOVE
  const y = progress * 80;

  video.style.transform =
    `translate(-50%, -50%) scale(${scale}) translateY(${y}px)`;

  video.style.borderRadius = radius + "px";

  video.style.filter = `blur(${blur}px)`;

  content.style.opacity = progress;
  content.style.transform = `translateY(${40 - progress * 40}px)`;
});

/* =========================
   REVEAL ANIMATION
========================= */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

/* =========================
   TOP BUTTON
========================= */
const topBtn = document.getElementById("topBtn");

if (topBtn) {
  window.addEventListener("scroll", () => {
    topBtn.classList.toggle("show", window.scrollY > 500);
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* =========================
   TRANSLATIONS DATA
========================= */
const translations = {
  es: {
    nav1: "Serie Spark",
    nav2: "Eventos & Colaboradores",
    nav3: " FAQs",
    nav4: "Contacto",

    "hero-eyebrow": "ALTA INGENIERÍA APLICADA AL ARTE DEL CORTE",
    "hero-title": "Instrumentos de culto<br>para el dominio absoluto.",
    "hero-desc": "Cuando el oficio trasciende a la obra de arte, las herramientas desaparecen.<br>Solo prevalece la alta precisión.",

    "spark-label": "SERIE SPARK",
    "spark-title": "Concebida por expertos.<br>Desarrollada para los arquitectos de la línea.",

    dash: "Dash Clipper. Arquitectura de torque constante de 8.000 a 9.000 RPM. Bloque mecanizado en aleación aeroespacial anodizada y dinámica de corte sin fricción, respaldado por una celda de energía de 3.200 mAh.",

    strike: "Strike Trimmer. Geometría micrométrica y consistencia matemática a 8.000 RPM. Cuchilla expuesta con disipación térmica estructural sobre un chasis monocasco de alta densidad. El detalle es tu caligrafía.",

    zero: "Zero Shaver. Triple eje cinemático de alta resistencia a 8.000 RPM reales. Sistema de micro-pulido periférico que erradica la refracción de luz y redefine el umbral del fade absoluto.",

    storm: "Storm Blower & Vacuum. Dinámica de fluidos avanzada a 160.000 RPM y una fuerza de descompresión de 12.000 Pa. Preservación y pureza ambiental para entornos de trabajo de alta gama.",

    "support-label": "SOPORTE TÉCNICO",
    "warranty-title": "FAQs & Garantía",
    "warranty-intro": "Certificación y condiciones de cobertura estructural para los sistemas DGR Professional ®.",

    w1: "¿Cuál es mi garantía?",

    w2: "En productos adquiridos a través de distribuidores oficiales, es imprescindible presentar una copia del comprobante de compra para poder hacer válida la garantía. Sin comprobante, el servicio se considerará fuera de garantía, independientemente de la fecha de compra.",

    w3: "¿Cuánto tiempo tengo de garantía?",

    w4: "Todos nuestros productos se fabrican bajo los más altos estándares de calidad y pasan rigurosos controles antes de su comercialización.",

    w5: "Para salones de belleza y uso profesional: 2 años de garantía desde la fecha de la factura para todos los dispositivos eléctricos.",

    w7: "No están cubiertos los daños accidentales, especialmente aquellos en placas, arañazos o desconchados.",

    w8: "La manipulación del producto por terceros durante el periodo de garantía invalida automáticamente la cobertura.",

    w9: "No se ofrece garantía en productos adquiridos a través de distribuidores no autorizados, ya que podrían no ser originales. En estos casos, los derechos corresponden al punto de venta.",

    w10: "Para cualquier gestión, ten preparado el comprobante de compra y los datos del producto. Puedes continuar en soporte o escribirnos a info@dgrprofessional.com",



    "collab-label": "COLABORADORES & EVENTOS",

    "collab-title": "Presencia en escenarios,<br>educación y cultura profesional.",

    "collab-button": "Batalla de Barberos Download",

    "contact-label": "CONTACTO",

    "contact-title": "Estudio técnico de ingeniería,<br>distribución y soporte especializado.",

    "channel-title": "Canal Corporativo",

    "address-title": "Sede Central",

    "distributor-title": "Distribuidor Oficial Sublime Beauty",

    "coverage-title": "Cobertura",

    "coverage": "Toda España",

    "phone-title": "Teléfono",

    "online-title": "Canales Digitales",

    "support-schedule-title": "Horario Atención",
    "support-schedule": "Lunes a Viernes<br>09:00 am · 18:30 pm",

    "store-schedule-title": "Horario Tienda",
    "store-schedule": "Lunes a Viernes<br>8:30 am · 18:30 pm<br>Sábado 9:00 am · 14:00 pm",


    "footer-desc": "Alta ingeniería de precisión para el cuidado masculino de vanguardia.",
    "footer-rights": "DGR Professional © 2026. Todos los derechos reservados.",

    "footer-ig": "Instagram",
    "footer-li": "LinkedIn",
    "footer-yt": "YouTube"
  },

  en: {
    nav1: "Spark Series",
    nav2: "Events & Collabs",
    nav3: " FAQs",
    nav4: "Contact",


    "hero-eyebrow": "HIGH-PRECISION ENGINEERING FOR MASTER CRAFTSMANSHIP",
    "hero-title": "Instruments of cult<br>for absolute mastery.",
    "hero-desc": "When craftsmanship transcends into art, tools disappear.<br>Only high precision remains.",

    "spark-label": "SPARK SERIES",
    "spark-title": "Conceived by experts.<br>Engineered for architects of the line.",

    dash: "Dash Clipper. Uncompromising constant torque architecture from 8,000 to 9,000 RPM. CNC-machined anodized aerospace body with friction-free cutting dynamics, driven by a 3,200 mAh energy cell.",

    strike: "Strike Trimmer. Micrometric geometry and mathematical consistency operating at 8,000 RPM. Exposed blade system with structural thermal dissipation integrated into a high-density monocoque chassis. Detailing is your signature.",

    zero: "Zero Shaver. Triple high-resistance kinematic axes delivering a true 8,000 RPM. Peripheral micro-polishing system that eliminates light refraction and redefines the threshold of the ultimate fade.",

    storm: "Storm Blower & Vacuum. Advanced fluid dynamics at 160,000 RPM with a 12,000 Pa decompression force. Atmospheric preservation and purity for elite workstation aesthetics.",

    "support-label": "TECHNICAL SUPPORT",
    "warranty-title": "FAQs & Warranty",
    "warranty-intro": "Certification and structural coverage terms for DGR Professional ® systems.",

    w1: "What is my warranty?",

    w2: "For products purchased through official distributors, a copy of the proof of purchase is strictly required to validate the warranty. Without proof of purchase, the service will be considered out of warranty regardless of purchase date.",

    w3: "How long is my warranty?",

    w4: "All products are manufactured under the highest quality standards and undergo strict testing before being released to the market.",

    w5: "For salons and professional use: 2 years of warranty from the invoice date for all electrical devices.",

    w7: "Accidental damage is not covered, especially damage to plates, scratches or chipping.",

    w8: "Any third-party tampering with the product during the warranty period will automatically void coverage.",

    w9: "No warranty applies to products purchased through unauthorized distributors, as they may not be genuine. In such cases, consumer rights apply to the point of sale.",

    w10: "For any request, please have your proof of purchase and product details ready. You may proceed to support or contact us directly at info@dgrprofessional.com",


    "collab-label": "COLLABORATORS & EVENTS",

    "collab-title": "Presence across stages,<br>education and professional culture.",

    "collab-button": "Batalla de Barberos Download",

    "contact-label": "CONTACT",

    "contact-title": "Technical engineering studio<br>for distribution and specialized support.",

    "channel-title": "Corporate Channel",

    "address-title": "Technical Headquarters",

    "distributor-title": "Official Distributor Sublime Beauty",

    "coverage-title": "Coverage",
    "coverage": "All Spain",

    "phone-title": "Phone",

    "online-title": "Digital Channels",

    "support-schedule-title": "Customer Support Hours",
    "support-schedule": "Monday to Friday<br>09:00 am · 18:30 pm",

    "store-schedule-title": "Store Hours",
    "store-schedule": "Monday to Friday<br>8:30 am · 18:30 pm<br>Saturday<br>9:00 am · 14:00 pm",


    "footer-desc": "High-precision grooming engineering for vanguard aesthetics.",
    "footer-rights": "DGR Professional © 2026. All rights reserved.",

    "footer-ig": "Instagram",
    "footer-li": "LinkedIn",
    "footer-yt": "YouTube"
  }
};

/* =========================
   ACTIVE LANGUAGE BUTTON
========================= */
function setActiveLang(lang) {
  const esBtn = document.getElementById("lang-es");
  const enBtn = document.getElementById("lang-en");

  if (!esBtn || !enBtn) return;

  esBtn.classList.toggle("active", lang === "es");
  enBtn.classList.toggle("active", lang === "en");
}

/* =========================
   LANGUAGE SWITCH
========================= */
function setLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");

    if (Object.prototype.hasOwnProperty.call(dict, key)) {
      el.innerHTML = dict[key];
    } else {
      console.warn(`Missing translation key: ${key} (${lang})`);
    }
  });

  setActiveLang(lang);
  localStorage.setItem("lang", lang);
}

/* =========================
   INIT LANG SYSTEM (SAFE)
========================= */
function initLanguageSystem() {
  const savedLang = localStorage.getItem("lang") || "en";

  setLanguage(savedLang);

  const btnEs = document.getElementById("lang-es");
  const btnEn = document.getElementById("lang-en");

  if (btnEs) {
    btnEs.addEventListener("click", () => setLanguage("es"));
  }

  if (btnEn) {
    btnEn.addEventListener("click", () => setLanguage("en"));
  }
}

/* =========================
   DOM READY INIT (IMPORTANT)
========================= */
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSystem();
});

/* =========================
   NAV ACTIVE
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

function setActiveNav() {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 150;
    const height = section.clientHeight;

    if (window.scrollY >= top && window.scrollY < top + height) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
}

window.addEventListener("scroll", setActiveNav);

/* =========================
   NAV CLICK
========================= */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

/* =========================
   NAV CLICK button (MOBILE)
========================= */
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {

  // abrir / cerrar con botón
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("open");
  });

  // cerrar al hacer click fuera
  document.addEventListener("click", (e) => {
    const isClickInsideNav = nav.contains(e.target);
    const isClickOnBtn = menuBtn.contains(e.target);

    if (!isClickInsideNav && !isClickOnBtn) {
      nav.classList.remove("open");
    }
  });

  // cerrar al clicar un link
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

/* =========================
   INIT
========================= */
setLanguage(localStorage.getItem("lang") || "en");
setActiveNav();


/* =========================
   LOGO ANIMATION
========================= */
const logo = document.getElementById("logo");

if (logo) {
  const animateLogo = () => {
    logo.classList.remove("animate");
    requestAnimationFrame(() => logo.classList.add("animate"));
  };

  window.addEventListener("load", animateLogo);
  logo.addEventListener("click", animateLogo);
}

/* =========================
   CURSOR FOLLOW
========================= */
const cursorImg = document.querySelector(".cursor-img");

if (cursorImg) {
  let mouseX = 0, mouseY = 0;
  let posX = 0, posY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    posX += (mouseX - posX) * 0.12;
    posY += (mouseY - posY) * 0.12;

    cursorImg.style.left = posX + "px";
    cursorImg.style.top = posY + "px";

    requestAnimationFrame(animateCursor);
  }

  animateCursor();
}

/* =========================
   HAIR PARTICLES
========================= */
const hairContainer = document.getElementById("hair-container");

if (hairContainer) {
  window.addEventListener("mousemove", (e) => {
    for (let i = 0; i < 3; i++) createHair(e.clientX, e.clientY);
  });

  function createHair(x, y) {
    const hair = document.createElement("div");
    hair.className = "hair";

    hair.style.left = x + (Math.random() - 0.5) * 20 + "px";
    hair.style.top = y + (Math.random() - 0.5) * 20 + "px";
    hair.style.width = 2 + Math.random() * 10 + "px";
    hair.style.height = 1 + Math.random() * 2 + "px";
    hair.style.transform = `rotate(${Math.random() * 360}deg)`;
    hair.style.background = `rgba(0,0,0,${0.1 + Math.random() * 0.5})`;

    hairContainer.appendChild(hair);

    setTimeout(() => hair.remove(), 900);
  }
}

/* =========================
   COLLABS CAROUSEL
========================= */

const collabCarousel = document.getElementById("collabCarousel");

const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

if (collabCarousel && prevBtn && nextBtn) {

  const scrollAmount = 460;

  nextBtn.addEventListener("click", () => {
    collabCarousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });

  prevBtn.addEventListener("click", () => {
    collabCarousel.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });
}