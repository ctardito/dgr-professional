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
  const blur = isMobile ? progress * 4 : progress * 4;

  // MOVE
  const y = progress * 80;

  video.style.transform = `translate(-50%, -50%) scale(${scale}) translateY(${y}px)`;
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
   NAV CLICK BUTTON (MOBILE)
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

/* =========================
   PRODUCT PAGE MEDIA CHANGER
========================= */
function changeMedia(media) {
  const mainImage = document.getElementById("mainImage");
  const mainVideo = document.getElementById("mainVideo");

  // Quitar active de todas las miniaturas
  document.querySelectorAll(".thumbs img, .thumbs video").forEach(item => {
    item.classList.remove("active");
  });

  // Activar la seleccionada
  media.classList.add("active");

  // Si es una imagen
  if (media.tagName === "IMG" && mainImage) {
    mainImage.src = media.src;
    mainImage.style.display = "block";
    if (mainVideo) mainVideo.style.display = "none";
  } else if (media.tagName === "VIDEO" && mainVideo) {
    mainVideo.src = media.src;
    mainVideo.style.display = "block";
    if (mainImage) mainImage.style.display = "none";
  }
}

/* ==========================================================================
   SISTEMA DE IDIOMAS MODULAR (Organizado para fácil escalabilidad)
   ========================================================================== */

/* =========================
   ACTIVE LANGUAGE BUTTON VISUALS
========================= */
function setActiveLang(lang) {
  const esBtn = document.getElementById("lang-es");
  const enBtn = document.getElementById("lang-en");

  if (!esBtn || !enBtn) return;

  esBtn.classList.toggle("active", lang === "es");
  enBtn.classList.toggle("active", lang === "en");
}

/* =========================
   LANGUAGE SWITCH ACTIONS
========================= */
function setLanguage(lang) {
  const dict = translations[lang] || translations.es; // Fallback al español por defecto

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
  document.documentElement.lang = lang; // Actualización semántica para SEO/Accesibilidad
}

/* =========================
   INIT LANG SYSTEM (SAFE)
========================= */
function initLanguageSystem() {
  const savedLang = localStorage.getItem("lang") || "es"; // Idioma inicial predeterminado: Español

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
   DOM READY INIT (CENTRALIZADO)
========================= */
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSystem();
  setActiveNav();
});

/* ==========================================================================
   DICTIONARY DATA (ORGANIZADO PARA ESCALABILIDAD)
   ========================================================================== */


/* ==========================================================================
   ESPAÑOL
   ========================================================================== */

const translations = {
  es: {
    nav1: "Serie Spark",
    nav2: "Eventos & Colaboradores",
    nav3: "Garantía",
    nav4: "Contacto",

    "hero-eyebrow": "ALTA INGENIERÍA APLICADA AL ARTE DEL CORTE",
    "hero-title": "Instrumentos de culto<br>para el dominio absoluto.",
    "hero-desc": "Cuando el oficio trasciende a la obra de arte, las herramientas desaparecen.<br>Solo prevalece la alta precisión.",

    "spark-label": "SERIE SPARK",
    "spark-title": "Concebida por expertos.<br>Desarrollada para los arquitectos de la línea.",

    // Tags de productos
    "tag-clipper": "CLIPPER",
    "tag-trimmer": "TRIMMER",
    "tag-shaver": "SHAVER",
    "tag-blower": "BLOWER",
    "tag-soldout": "AGOTADO",
    "tag-event": "EVENTO",
    "tag-collab": "COLABORACIÓN",

    dash: "Dash Clipper. Arquitectura de torque constante de 8.000 a 9.000 RPM. Bloque mecanizado en aleación aeroespacial anodizada y dinámica de corte sin fricción, respaldado por una celda de energía de 3.200 mAh.",
    strike: "Strike Trimmer. Geometría micrométrica y consistencia matemática a 8.000 RPM. Cuchilla expuesta con disipación térmica estructural sobre un chasis monocasco de alta densidad. El detalle es tu caligrafía.",
    zero: "Zero Shaver. Triple eje cinemático de alta resistencia a 8.000 RPM reales. Sistema de micro-pulido periférico que erradica la refracción de luz y redefine el umbral del fade absoluto.",
    storm: "Storm Blower & Vacuum. Dinámica de fluidos avanzada a 160.000 RPM y una fuerza de descompresión de 12.000 Pa. Preservación y pureza ambiental para entornos de trabajo de alta gama.",

    "delantal-title": "Delantal Good Fade",
    "delantal-desc": "Delantal de barbero. Diseño ergonómico y materiales premium.",
    "tshirt-title": "Playera Good Fade",
    "tshirt-desc": "Playera 100% algodón. Confort y diseño profesional.",

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
    "collab-button": "Álbum de nuestros eventos",
    "collab-sublime": "Taller de @sublimebw",

    "contact-label": "CONTACTO",
    "contact-title": "Estudio técnico de ingeniería,<br>distribución y soporte especializado.",
    "channel-title": "Canal Corporativo",
    "address-title": "Sede Central",
    "address": "Av. Bon Pastor 33–45<br>08930 Sant Adrià de Besòs<br>Barcelona · España",
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
    "footer-yt": "YouTube",

    // ================= DETALLE PRODUCTO: STRIKE.HTML =================
    trust_1: "Disponibilidad inmediata",
    trust_2: "Soporte técnico especializado",
    trust_3: "Garantía estructural DGR",

    motor: "Motor",
    battery: "Batería",
    blade: "Cuchilla",
    body: "Cuerpo",
    charge: "Carga",

    "strike_category": "TRIMMER · ARQUITECTURA DE LA LÍNEA",
    "strike_title": "DGR Strike",
    "strike_hook": "Geometría micrométrica y consistencia matemática a 8.000 RPM.",
    "strike_description": "Concebida para el control absoluto en entornos de alta gama, la DGR Strike presenta un sistema de cuchilla expuesta con disipación térmica estructural sobre un chasis monocasco de alta densidad. Diseñada para eliminar la fricción y mantener la estabilidad arquitectónica durante un uso continuo, es el instrumento definitivo para contornos técnicos y detalles de línea ultra precisos.",
    "buy_cta": "Ver Oferta",
    "eng_label": "INGENIERÍA",
    "eng_title": "Precisión operativa",
    "story_label": "FILOSOFÍA DGR",
    "story_title": "Herramientas desarrolladas para la disciplina operativa",
    "story_text": "El verdadero dominio rechaza el artificio innecesario. DGR Strike está desarrollada estrictamente para el rendimiento, la fiabilidad estructural y la precisión milimétrica, integrándose sin interrupciones en flujos de trabajo profesionales de alta gama.",
    "eco_label": "SISTEMA INTEGRADO DGR",
    "eco_title": "Ecosistema de ingeniería para el corte",
    "box_label": "CONTENIDO",
    "box_title": "Dotación Profesional",
    "box_1": "Unidad DGR Strike",
    "box_2": "Cable de carga USB-C",
    "box_3": "Kit técnico de mantenimiento",
    "box_4": "Protector estructural de cuchilla",
    "box_5": "Manual de ingeniería y uso",
    "v1_title": "Consistencia operativa",
    "v1_text": "Rendimiento lineal y estable en jornadas de uso intensivo.",
    "v2_title": "Control absoluto del corte",
    "v2_text": "Precisión matemática en arquitectura de líneas y contornos técnicos.",
    "v3_title": "Arquitectura metálica monobloque",
    "v3_text": "Chasis forjado en aluminio estructural para máxima absorción térmica.",

    // ================= DETALLE PRODUCTO: DASH.HTML =================
    "dash_category": "CLIPPER · PRECISIÓN MECÁNICA",
    "dash_title": "DGR Dash",
    "dash_hook": "Diseñada por expertos para dominar el corte con precisión.",
    "dash_description": "La Dash Clipper trabaja entre 8.000 y 9.000 rpm, un rango pensado para cortar con firmeza, sin atropellarse y sin perder la línea. Su robusto motor mecánico 360° entrega una fuerza constante y estable. Entregando hasta 12 cortes con una sola carga gracias a su batería de 3.200 mAh.",
    "dash_eng_title": "Rendimiento y temperatura bajo control",
    "dash_story_title": "Estabilidad y dominio en cada pasada",
    "dash_story_text": "La robustez de su cuerpo de metal aporta un peso específico para brindar estabilidad. Combinado con una cuchilla de grafeno bañada en titanio con una abertura de 45° y un agarre ergonómico de caucho antideslizante, es la herramienta definitiva.",
    "dash_box_1": "Unidad DGR Dash Clipper",
    "dash_box_2": "Cable de carga USB-C",
    "dash_box_3": "Kit técnico de mantenimiento",
    "dash_v1_title": "Pantalla inteligente",
    "dash_v1_text": "Visualiza la batería restante y las revoluciones de trabajo en tiempo real.",
    "dash_v2_title": "Disipación térmica",
    "dash_v2_text": "Carcasa de aluminio que mantiene la máquina en temperatura óptima.",
    "dash_v3_title": "Agarre antideslizante",
    "dash_v3_text": "Caucho incorporado para evitar accesorios adicionales.",

    // ================= DETALLE PRODUCTO: ZERO.HTML =================
    "zero_category": "SHAVER · ACABADO IMPECABLE",
    "zero_title": "DGR Zero",
    "zero_hook": "El acabado que distingue un corte correcto de un corte perfecto.",
    "zero_description": "Equipada con un sistema de tres cuchillas de acero inoxidable, cuenta con dos rodillos externos que apuran al cero y pulen la superficie, más una cuchilla central que atrapa el pelo resistente. No deja franjas ni 'nubes' de sombra.",
    "zero_eng_title": "Eficacia milimétrica",
    "zero_story_title": "Ejecución infalible",
    "zero_story_text": "Aporta 8.000 rpm reales junto a un robusto cuerpo metálico que le da el peso ideal para maniobrar con soltura y precisión. Deja el trabajo limpio, como debe ser.",
    "zero_box_1": "Unidad DGR Zero Shaver",
    "zero_box_2": "Cable de carga USB-C",
    "zero_box_3": "Cubierta protectora",
    "zero_v1_title": "Batería optimizada",
    "zero_v1_text": "1.400 mAh controlables a través de su pantalla incorporada.",
    "zero_v2_title": "Triple acción",
    "zero_v2_text": "Tres cuchillas de acero inoxidable para un fade sin fricción.",
    "zero_v3_title": "Cuerpo metálico",
    "zero_v3_text": "Peso perfectamente calibrado para la máxima maniobrabilidad.",

    // ================= DETALLE PRODUCTO: STORM.HTML =================
    "storm_category": "BLOWER & VACUUM · PUREZA AMBIENTAL",
    "storm_title": "DGR Storm",
    "storm_hook": "Una herramienta compacta y versátil para mantener la barbería limpia con rapidez y precisión.",
    "storm_description": "Combina soplador y aspiradora en un solo dispositivo de alta gama. Su motor de alta velocidad alcanza hasta 160.000 rpm y 12.000 Pa, garantizando una limpieza profunda y eficiente del entorno de trabajo.",
    "storm_eng_title": "Dinámica de fluidos avanzada",
    "storm_story_title": "Adaptabilidad y eficiencia",
    "storm_story_text": "Diseñada para integrarse sin esfuerzo en el flujo de trabajo, cuenta con tres niveles de potencia ajustables (20, 22 y 25 m/s) e incluye un completo set de boquillas para cualquier escenario.",
    "storm_box_1": "Unidad DGR Storm Air Blower",
    "storm_box_2": "Cable de carga rápida USB-C",
    "storm_box_3": "Set de 6 boquillas intercambiables",
    "storm_v1_title": "Doble función",
    "storm_v1_text": "Soplador y aspiradora integrados en un diseño ultracompacto.",
    "storm_v2_title": "Potencia regulable",
    "storm_v2_text": "Tres velocidades operativas de 20, 22 y 25 m/s.",
    "storm_v3_title": "Carga eficiente",
    "storm_v3_text": "Sistema de alimentación mediante USB-C con tecnología de carga rápida."

  },


  /* ==========================================================================
     ENGLISH
     ========================================================================== */


  en: {
    nav1: "Spark Series",
    nav2: "Events & Collabs",
    nav3: "Warranty",
    nav4: "Contact",

    "hero-eyebrow": "HIGH-PRECISION ENGINEERING FOR MASTER CRAFTSMANSHIP",
    "hero-title": "Instruments of cult<br>for absolute mastery.",
    "hero-desc": "When craftsmanship transcends into art, tools disappear.<br>Only high precision remains.",

    "spark-label": "SPARK SERIES",
    "spark-title": "Conceived by experts.<br>Engineered for architects of the line.",

    // Product Tags
    "tag-clipper": "CLIPPER",
    "tag-trimmer": "TRIMMER",
    "tag-shaver": "SHAVER",
    "tag-blower": "BLOWER",
    "tag-soldout": "SOLD OUT",
    "tag-event": "EVENT",
    "tag-collab": "COLLAB",

    dash: "Dash Clipper. Uncompromising constant torque architecture from 8,000 to 9,000 RPM. CNC-machined anodized aerospace body with friction-free cutting dynamics, driven by a 3,200 mAh energy cell.",
    strike: "Strike Trimmer. Micrometric geometry and mathematical consistency operating at 8,000 RPM. Exposed blade system with structural thermal dissipation integrated into a high-density monocoque chassis. Detailing is your signature.",
    zero: "Zero Shaver. Triple high-resistance kinematic axes delivering a true 8,000 RPM. Peripheral micro-polishing system that eliminates light refraction and redefines the threshold of the ultimate fade.",
    storm: "Storm Blower & Vacuum. Advanced fluid dynamics at 160,000 RPM with a 12,000 Pa decompression force. Atmospheric preservation and purity for elite workstation aesthetics.",

    "delantal-title": "Good Fade Apron",
    "delantal-desc": "Barber apron. Ergonomic design and premium materials.",
    "tshirt-title": "Good Fade T-Shirt",
    "tshirt-desc": "100% cotton t-shirt. Comfort and professional design.",

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
    "collab-button": "Our events album",
    "collab-sublime": "@sublimebw Workshop",

    "contact-label": "CONTACT",
    "contact-title": "Technical engineering studio<br>for distribution and specialized support.",
    "channel-title": "Corporate Channel",
    "address-title": "Technical Headquarters",
    "address": "Av. Bon Pastor 33–45<br>08930 Sant Adrià de Besòs<br>Barcelona · Spain",
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
    "footer-yt": "YouTube",

    // ================= PRODUCT DETAIL: STRIKE.HTML =================
    trust_1: "Immediate availability",
    trust_2: "Specialized technical support",
    trust_3: "DGR structural warranty",

    motor: "Motor",
    battery: "Battery",
    blade: "Blade",
    body: "Body",
    charge: "Charge",

    "strike_category": "TRIMMER · LINE ARCHITECTURE",
    "strike_title": "DGR Strike",
    "strike_hook": "Micrometric geometry and mathematical consistency at 8,000 RPM.",
    "strike_description": "Engineered for absolute control in high-end environments, the DGR Strike features an exposed blade system with structural thermal dissipation over a high-density monocoque chassis. Designed to eliminate friction and maintain architectural stability during continuous use, it is the definitive instrument for technical outlines and ultra-precise line detailing.",
    "buy_cta": "View Deal",
    "eng_label": "ENGINEERING",
    "eng_title": "Operational precision",
    "story_label": "DGR PHILOSOPHY",
    "story_title": "Tools engineered for operational discipline",
    "story_text": "True mastery rejects unnecessary artifice. The DGR Strike is engineered strictly for performance, structural reliability, and pinpoint precision, seamlessly integrating into premium professional workflows without interruption.",
    "eco_label": "INTEGRATED DGR SYSTEM",
    "eco_title": "Engineering ecosystem for vanguard grooming",
    "box_label": "IN THE BOX",
    "box_title": "Professional kit",
    "box_1": "DGR Strike unit",
    "box_2": "USB-C charging cable",
    "box_3": "Technical maintenance kit",
    "box_4": "Structural blade guard",
    "box_5": "Engineering user manual",
    "v1_title": "Operational consistency",
    "v1_text": "Stable, linear performance during extended, high-intensity sessions.",
    "v2_title": "Absolute cutting control",
    "v2_text": "Mathematical precision in technical line architecture and detailing.",
    "v3_title": "Monobloc metal architecture",
    "v3_text": "Chassis forged in structural aluminum for advanced thermal mitigation.",

    // ================= PRODUCT DETAIL: DASH.HTML =================
    "dash_category": "CLIPPER · MECHANICAL PRECISION",
    "dash_title": "DGR Dash",
    "dash_hook": "Designed by experts to master cutting with precision.",
    "dash_description": "The Dash Clipper operates between 8,000 and 9,000 rpm, a range designed for firm cutting without rushing or losing the line. Its robust 360° mechanical motor delivers constant, stable power. Delivering up to 12 cuts on a single charge thanks to its 3,200 mAh battery.",
    "dash_eng_title": "Performance and temperature under control",
    "dash_story_title": "Stability and mastery in every pass",
    "dash_story_text": "The sturdiness of its metal body provides specific weight for stability. Combined with a titanium-plated graphene blade featuring a 45° opening and an ergonomic anti-slip rubber grip, it is the ultimate tool.",
    "dash_box_1": "DGR Dash Clipper unit",
    "dash_box_2": "USB-C charging cable",
    "dash_box_3": "Technical maintenance kit",
    "dash_v1_title": "Smart Display",
    "dash_v1_text": "View remaining battery and working revolutions in real-time.",
    "dash_v2_title": "Thermal Dissipation",
    "dash_v2_text": "Aluminum casing that keeps the machine at an optimal temperature.",
    "dash_v3_title": "Anti-slip Grip",
    "dash_v3_text": "Built-in rubber to avoid the need for additional accessories.",

    // ================= PRODUCT DETAIL: ZERO.HTML =================
    "zero_category": "SHAVER · FLAWLESS FINISH",
    "zero_title": "DGR Zero",
    "zero_hook": "The finish that distinguishes a correct cut from a perfect cut.",
    "zero_description": "Equipped with a three-blade stainless steel system, it features two external rollers that shave down to zero and polish the surface, plus a central blade that catches resistant hair. It leaves no stripes or shadow 'clouds'.",
    "zero_eng_title": "Millimetric effectiveness",
    "zero_story_title": "Infallible execution",
    "zero_story_text": "Delivers a true 8,000 rpm alongside a robust metallic body that provides the ideal weight for smooth, precise maneuvering. Leaves the work clean, as it should be.",
    "zero_box_1": "DGR Zero Shaver unit",
    "zero_box_2": "USB-C charging cable",
    "zero_box_3": "Protective cover",
    "zero_v1_title": "Optimized Battery",
    "zero_v1_text": "1,400 mAh controllable via its built-in screen.",
    "zero_v2_title": "Triple Action",
    "zero_v2_text": "Three stainless steel blades for a friction-free fade.",
    "zero_v3_title": "Metallic Body",
    "zero_v3_text": "Perfectly calibrated weight for maximum maneuverability.",

    // ================= PRODUCT DETAIL: STORM.HTML =================
    "storm_category": "BLOWER & VACUUM · ENVIRONMENTAL PURITY",
    "storm_title": "DGR Storm",
    "storm_hook": "A compact and versatile tool to keep the barbershop clean with speed and precision.",
    "storm_description": "Combines a blower and vacuum into a single high-end device.",
    "storm_eng_title": "Advanced fluid dynamics",
    "storm_story_title": "Adaptability and efficiency",
    "storm_story_text": "Designed to seamlessly integrate into the workflow, it features three adjustable power levels (20, 22, and 25 m/s) and includes a complete set of nozzles for any scenario.",
    "storm_box_1": "DGR Storm Air Blower unit",
    "storm_box_2": "USB-C fast charging cable",
    "storm_box_3": "Set of 6 interchangeable nozzles",
    "storm_v1_title": "Dual Function",
    "storm_v1_text": "Blower and vacuum integrated into an ultra-compact design.",
    "storm_v2_title": "Adjustable Power",
    "storm_v2_text": "Three operational speeds of 20, 22, and 25 m/s.",
    "storm_v3_title": "Efficient Charging",
    "storm_v3_text": "Power system via USB-C with fast charging technology."

  }
};