// Idiomas
const translations = {
  es: {
    "nav-about": "Sobre mí",
    "nav-skills": "Habilidades",
    "nav-projects": "Proyectos",
    "nav-contact": "Contacto",
    "hero-title": "Científico de Datos e Ingeniero de Machine Learning",
    "hero-desc": "Apasionado por la inteligencia artificial, el aprendizaje profundo y las soluciones basadas en datos.",
    "hero-projects": "Ver proyectos",
    "hero-cv": "Descargar CV",
    "about-title": "Sobre mí",
    "about-text": "Graduado en Ciencia e Ingeniería de Datos (ULPGC), apasionado por la inteligencia artificial, el aprendizaje automático y las soluciones impulsadas por datos. Busco seguir desarrollando mi carrera profesional en el campo de la ciencia de datos y la IA.",
    "skills-title": "Habilidades",
    "projects-title": "Proyectos Destacados",
    "contact-title": "Contacto"
  },
  en: {
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-contact": "Contact",
    "hero-title": "Data Scientist & Machine Learning Engineer",
    "hero-desc": "Passionate about artificial intelligence, deep learning, and data-driven solutions.",
    "hero-projects": "View projects",
    "hero-cv": "Download CV",
    "about-title": "About me",
    "about-text": "Data Science and Engineering graduate (ULPGC) passionate about AI, machine learning, and data-driven innovation. Seeking to grow professionally in data science and artificial intelligence.",
    "skills-title": "Skills",
    "projects-title": "Featured Projects",
    "contact-title": "Contact"
  }
};

// Cambiar idioma
function changeLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    el.textContent = translations[lang][el.dataset.key];
  });
  document.documentElement.lang = lang;
}
document.getElementById("lang-es").addEventListener("click", () => changeLanguage("es"));
document.getElementById("lang-en").addEventListener("click", () => changeLanguage("en"));

// Repos destacados
const featuredRepos = [
  "rag-youtube",
  "handball-penalty-prediction",
  "InclusIA",
  "nba-player-stats-analysis",
  "f1-weather-rec-system",
  "PLN-Practicas"
];
const container = document.getElementById("projects-container");

fetch("https://api.github.com/users/alebola/repos")
  .then(res => res.json())
  .then(repos => {
    repos
      .filter(repo => featuredRepos.includes(repo.name))
      .forEach(repo => {
        const card = document.createElement("div");
        card.classList.add("project-card");
        card.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description || "Sin descripción disponible."}</p>
          <a href="${repo.html_url}" target="_blank">Ver en GitHub →</a>
        `;
        container.appendChild(card);
      });
  })
  .catch(err => console.error(err));
