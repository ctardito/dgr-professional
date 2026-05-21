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

if (topBtn) {
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
}


/* =========================
   TRANSLATIONS DATA
========================= */
const translations = {
  "es": {
    "nav1": "Serie Spark",
    "nav2": "Garantía",
    "nav3": "Contacto",
    "hero-eyebrow": "ALTA INGENIERÍA APLICADA AL ARTE DEL CORTE",
    "hero-title": "Instrumentos de culto<br>para el dominio absoluto.",
    "hero-desc": "Cuando el oficio trasciende a la obra de arte, las herramientas desaparecen.<br>Solo prevalece la alta precisión.",
    "spark-label": "SERIE SPARK",
    "spark-title": "Concebida por expertos.<br>Desarrollada para los arquitectos de la línea.",
    "dash": "Dash Clipper. Arquitectura de torque constante de 8.000 a 9.000 RPM. Bloque mecanizado en aleación aeroespacial anodizada y dinámica de corte sin fricción, respaldado por una celda de energía de 3.200 mAh.",
    "strike": "Strike Trimmer. Geometría micrométrica y consistencia matemática a 8.000 RPM. Cuchilla expuesta con disipación térmica estructural sobre un chasis monocasco de alta densidad. El detalle es tu caligrafía.",
    "zero": "Zero Shaver. Triple eje cinemático de alta resistencia a 8.000 RPM reales. Sistema de micro-pulido periférico que erradica la refracción de luz y redefine el umbral del fade absoluto.",
    "storm": "Storm Blower & Vacuum. Dinámica de fluidos avanzada a 160.000 RPM y una fuerza de descompresión de 12.000 Pa. Preservación y pureza ambiental para entornos de trabajo de alta gama.",
    "support-label": "SOPORTE TÉCNICO",
    "warranty-title": "Garantía de Ingeniería",
    "warranty-intro": "Certificación y condiciones de cobertura estructural para los sistemas DGR Professional.",
    "w1": "¿Qué parámetros abarca el protocolo?",
    "w2": "Dispositivos adquiridos exclusivamente a través de la red de distribución autorizada y validados mediante acreditación de compra oficial.",
    "w3": "Vigencia del ciclo de cobertura",
    "w4": "Sistemas calibrados bajo estándares de grado industrial y auditados mediante control de calidad individualizado.",
    "w5": "Uso profesional de alta intensidad: 24 meses de cobertura integral a partir de la fecha de facturación.",
    "w7": "Quedan excluidos de este protocolo los fallos derivados de impactos directos o agentes externos accidentales.",
    "w8": "Cualquier apertura del chasis o alteración de la arquitectura interna invalida de forma inmediata la certificación.",
    "w9": "Los puntos de venta no autorizados quedan estrictamente revocados de todo derecho de asistencia técnica.",
    "contact-label": "SEDE CENTRAL",
    "contact-title": "Diseñado para profesionales<br>que no negocian el control.",
    "email": "Canal Corporativo",
    "support": "División de Asistencia Especializada",
    "schedule": "Lunes a viernes<br>9:00 a.m. — 18:00 p.m.",
    "address": "Av. Bon Pastor 33–45<br>08930 Sant Adrià de Besòs<br>Barcelona · España",
    "footer-desc": "Alta ingeniería de precisión para el cuidado masculino de vanguardia.",
    "footer-rights": "DGR Professional © 2026. Todos los derechos reservados."
  },
  "en": {
    "nav1": "Spark Series",
    "nav2": "Warranty",
    "nav3": "Contact",
    "hero-eyebrow": "HIGH-PRECISION ENGINEERING FOR MASTER CRAFTSMANSHIP",
    "hero-title": "Instruments of cult<br>for absolute mastery.",
    "hero-desc": "When craftsmanship transcends into art, tools disappear.<br>Only high precision remains.",
    "spark-label": "SPARK SERIES",
    "spark-title": "Conceived by experts.<br>Engineered for architects of the line.",
    "dash": "Dash Clipper. Uncompromising, constant torque architecture from 8,000 to 9,000 RPM. CNC-machined anodized aerospace body with friction-free cutting dynamics, driven by a 3,200 mAh energy cell.",
    "strike": "Strike Trimmer. Micrometric geometry and mathematical consistency operating at 8,000 RPM. Exposed blade system with structural thermal dissipation integrated into a high-density monocoque chassis. Detailing is your signature.",
    "zero": "Zero Shaver. Triple high-resistance kinematic axes delivering a true 8,000 RPM. Peripheral micro-polishing system that eliminates light refraction and redefines the threshold of the ultimate fade.",
    "storm": "Storm Blower & Vacuum. Advanced fluid dynamics at 160,000 RPM with a 12,000 Pa decompression force. Atmospheric preservation and purity for elite workstation aesthetics.",
    "support-label": "TECHNICAL SUPPORT",
    "warranty-title": "Engineering Warranty",
    "warranty-intro": "Certification and structural coverage terms for DGR Professional systems.",
    "w1": "What parameters are covered under this protocol?",
    "w2": "Devices acquired exclusively through the authorized distribution network and verified by official proof of purchase.",
    "w3": "Validity period",
    "w4": "Systems calibrated under industrial-grade guidelines and individually audited through rigorous quality control.",
    "w5": "High-intensity professional deployment: 24 months of comprehensive coverage from the invoice date.",
    "w7": "Damage resulting from direct impact or accidental external factors is strictly excluded.",
    "w8": "Any breach of the chassis or alteration of the internal architecture voids certification immediately.",
    "w9": "Non-authorized points of sale are entirely barred from accessing technical assistance.",
    "contact-label": "HEADQUARTERS",
    "contact-title": "Engineered for professionals<br>who refuse to compromise on control.",
    "email": "Corporate Channel",
    "support": "Specialized Assistance Division",
    "schedule": "Monday to Friday<br>9:00 a.m. — 18:00 p.m.",
    "address": "Av. Bon Pastor 33–45<br>08930 Sant Adrià de Besòs<br>Barcelona · Spain",
    "footer-desc": "High-precision grooming engineering for vanguard aesthetics.",
    "footer-rights": "DGR Professional © 2026. All rights reserved."
  }
};


/* =========================
   ACTIVE LANGUAGE BUTTON
========================= */
function setActiveLang(lang) {
  const esBtn = document.getElementById("lang-es");
  const enBtn = document.getElementById("lang-en");

  if (esBtn && enBtn) {
    esBtn.classList.remove("active");
    enBtn.classList.remove("active");

    if (lang === "es") {
      esBtn.classList.add("active");
    } else {
      enBtn.classList.add("active");
    }
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
    const top = section.offsetTop - 150; // Ajustado umbral para mayor precisión visual
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
   NAV CLICK ACTIVE (Instant)
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
const btnEs = document.getElementById("lang-es");
const btnEn = document.getElementById("lang-en");

if (btnEs) btnEs.addEventListener("click", () => setLanguage("es"));
if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));


/* =========================
   INIT
========================= */
const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);
setActiveNav();


/* =========================
   ANIMATED LOGO
========================= */
const logo = document.getElementById("logo");

function animateLogo() {
  if (!logo) return;
  logo.classList.remove("animate");
  requestAnimationFrame(() => {
    logo.classList.add("animate");
  });
}

window.addEventListener("load", animateLogo);
if (logo) logo.addEventListener("click", animateLogo);


/* =========================
   CURSOR CINÉTICO (SMOOTH FOLLOW)
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
   DYNAMIC HAIR PARTICLES
========================= */
const hairContainer = document.getElementById("hair-container");

if (hairContainer) {
  window.addEventListener("mousemove", (e) => {
    for (let i = 0; i < 3; i++) {
      createHair(e.clientX, e.clientY);
    }
  });

  function createHair(x, y) {
    const hair = document.createElement("div");
    hair.classList.add("hair");

    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;

    hair.style.left = x + offsetX + "px";
    hair.style.top = y + offsetY + "px";

    const width = 2 + Math.random() * 10;
    const height = 1 + Math.random() * 2;

    hair.style.width = width + "px";
    hair.style.height = height + "px";

    const angle = Math.random() * 360;
    hair.style.transform = `rotate(${angle}deg)`;

    const opacity = 0.1 + Math.random() * 0.5;
    hair.style.background = `rgba(0,0,0,${opacity})`;

    hairContainer.appendChild(hair);

    setTimeout(() => {
      hair.remove();
    }, 900);
  }
}