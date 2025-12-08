/* === TRADUCCIONES === */
const translations = {
  es: {
    "nav-home": "Inicio",
    "nav-about": "Sobre mí",
    "nav-skills": "Habilidades",
    "nav-projects": "Proyectos",
    "nav-contact": "Contacto",
    "hero-intro": "Hola, mi nombre es",
    "hero-role": "Científico de Datos e Ingeniero de Machine Learning",
    "about-title": "Sobre mí",
    "about-desc":
      "Soy graduado en Ciencia e Ingeniería de Datos, apasionado por la inteligencia artificial, el aprendizaje automático y las soluciones basadas en datos. Busco aplicar mis conocimientos en entornos reales y seguir creciendo profesionalmente.",
    "skills-title": "Habilidades",
    "tech-skills-title": "Habilidades Técnicas",
    "soft-skills-title": "Habilidades Blandas",
    "soft1": "Comunicación",
    "soft2": "Trabajo en equipo",
    "soft3": "Liderazgo",
    "soft4": "Pensamiento analítico",
    "soft5": "Adaptabilidad",
    "soft6": "Resolución de problemas",
    "projects-title": "Proyectos Destacados",
    "contact-title": "Contacto",
    "contact-text": "Puedes encontrarme en mis redes o escribirme directamente:"
  },
  en: {
    "nav-home": "Home",
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-contact": "Contact",
    "hero-intro": "Hello, my name is",
    "hero-role": "Data Scientist & Machine Learning Engineer",
    "about-title": "About Me",
    "about-desc":
      "I am a Data Science and Engineering graduate passionate about artificial intelligence, machine learning, and data-driven solutions. I aim to apply my skills in real-world settings while continuing to grow professionally.",
    "skills-title": "Skills",
    "tech-skills-title": "Technical Skills",
    "soft-skills-title": "Soft Skills",
    "soft1": "Communication",
    "soft2": "Teamwork",
    "soft3": "Leadership",
    "soft4": "Analytical thinking",
    "soft5": "Adaptability",
    "soft6": "Problem solving",
    "projects-title": "Featured Projects",
    "contact-title": "Contact",
    "contact-text": "You can find me on my social networks or write to me directly:"
  }
};

// Función de cambio de idioma
function switchLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  renderProjects(lang);
  document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(`.lang-btn[data-lang="${lang}"]`).forEach(b => b.classList.add("active"));
}

// Soporte para múltiples botones de idioma
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    switchLanguage(lang);
  });
});


/* === PARTICULAS EN EL HERO === */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particlesArray = [];
const numParticles = 70;

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < numParticles; i++) {
    particlesArray.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
    });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  particlesArray.forEach((p) => {
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = document.querySelector(".hero").offsetHeight;
  initParticles();
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
animateParticles();

/* === PROYECTOS MANUALES (BILINGÜES) === */
const projectsData = {
  es: [
    {
      name: "rag-youtube",
      desc: "Indexa videos de YouTube, realiza preguntas en lenguaje natural y obtén respuestas concisas con citas directas enlazadas al minuto exacto. Desarrollado con Streamlit, Pinecone y un pipeline RAG multilingüe.",
    },
    {
      name: "handball-penalty-prediction",
      desc: "Predicción de lanzamientos vs fintas en penaltis de balonmano mediante aprendizaje profundo en embeddings de video (HAR). Incluye preprocesamiento, modelos secuenciales (LSTM, GRU, TCN, Transformer) y un script final con el mejor modelo Transformer + SMOTE.",
    },
    {
      name: "InclusIA",
      desc: "Aplicación multiplataforma para detectar y corregir sesgos de género en texto, integrando Firebase (Functions, Firestore, Storage) con Gemini mediante Firebase Extensions.",
    },
    {
      name: "nba-player-stats-analysis",
      desc: "Análisis exploratorio de estadísticas de jugadores de la NBA (temporada 2021–2022) con R. Incluye procesamiento de datos, visualizaciones avanzadas (barras, histogramas, gráficos de radar) e insights de analítica deportiva.",
    },
    {
      name: "PLN-Practicas",
      desc: "Colección de prácticas de Procesamiento del Lenguaje Natural (PLN) sobre representación de texto (BoW, TF-IDF), clasificación de texto, embeddings (GloVe), modelos seq2seq con atención y transformers con self-attention. Implementado en Python con PyTorch, torchtext, spaCy y FastText.",
    },
    {
      name: "f1-weather-rec-system",
      desc: "Proyecto full-stack combinando Java (procesamiento + MongoDB) y Python (Flask API + cliente PyQt) para analizar datos de carreras de F1 con condiciones climáticas. Incluye integraciones, consultas y visualizaciones sobre rendimiento en diferentes climas.",
    },
  ],
  en: [
    {
      name: "rag-youtube",
      desc: "Index YouTube videos, ask natural language questions, and get concise answers with direct citations linked to the exact minute. Built with Streamlit, Pinecone, and a multilingual RAG pipeline.",
    },
    {
      name: "handball-penalty-prediction",
      desc: "Prediction of shots vs feints in handball penalty kicks using deep learning on video embeddings (HAR). Includes preprocessing, multiple sequence models (LSTM, GRU, TCN, Transformer) and a final script with the best-performing Transformer + SMOTE approach.",
    },
    {
      name: "InclusIA",
      desc: "Cross-platform app to detect and correct gender bias in text, integrating Firebase (Functions, Firestore, Storage) with Gemini via Firebase Extensions.",
    },
    {
      name: "nba-player-stats-analysis",
      desc: "Exploratory analysis of NBA player statistics (2021–2022 season) using R. Includes data wrangling, advanced visualizations (bar plots, histograms, radar charts), and sports analytics insights.",
    },
    {
      name: "PLN-Practicas",
      desc: "Collection of Natural Language Processing (NLP) assignments covering text representation (BoW, TF-IDF), text classification, word embeddings (GloVe), seq2seq models with attention, and transformer-based self-attention with masking. Implemented in Python with PyTorch, torchtext, spaCy, and FastText.",
    },
    {
      name: "f1-weather-rec-system",
      desc: "Full-stack project combining Java (data processing + MongoDB) and Python (Flask API + PyQt client) to analyze Formula 1 race data with weather conditions. Includes integrations, queries, and visualizations for race performance under different climates.",
    },
  ],
};

/* === FADE-IN con IntersectionObserver === */
let observer;

function createObserver() {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
}

function registerFadeIns(root = document) {
  const pending = root.querySelectorAll(".fade-in:not([data-observed])");
  pending.forEach((el) => {
    el.setAttribute("data-observed", "true");
    observer.observe(el);
  });
}

function renderProjects(lang = "es") {
  const container = document.getElementById("projects-grid");
  container.innerHTML = "";
  projectsData[lang].forEach((p) => {
    const card = document.createElement("div");
    card.className = "project-card fade-in";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <a href="https://github.com/alebola/${p.name}" target="_blank">
        ${lang === "en" ? "View on GitHub →" : "Ver en GitHub →"}
      </a>
    `;
    container.appendChild(card);
  });
  registerFadeIns(container);
}

/* Inicialización del observer + render inicial */
createObserver();
renderProjects("es");
registerFadeIns(document);
document.querySelectorAll('.lang-btn[data-lang="es"]').forEach(b => b.classList.add('active'));

/* === MENÚ RESPONSIVE === */
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav a");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});

// Cierra el menú al pulsar un enlace
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    nav.classList.remove("active");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

/* === ANIMACIÓN HERO MEJORADA === */
function typeEffect(element, text, delay = 50, callback) {
  element.textContent = "";
  element.classList.add("typing");
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, delay);
    } else {
      element.classList.remove("typing");
      if (callback) setTimeout(callback, 400);
    }
  }
  typing();
}

window.addEventListener("load", () => {
  const intro = document.querySelector("[data-key='hero-intro']");
  const name = document.querySelector(".hero-name");
  const role = document.querySelector("[data-key='hero-role']");

  const introText = intro?.textContent.trim() || "";
  const nameText = name?.textContent.trim() || "";
  const roleText = role?.textContent.trim() || "";

  intro.textContent = "";
  name.textContent = "";
  role.textContent = "";

  typeEffect(intro, introText, 45, () => {
    typeEffect(name, nameText, 35, () => {
      typeEffect(role, roleText, 25);
    });
  });
});


/* === BOTÓN VOLVER ARRIBA === */
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

