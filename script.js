// === Idiomas ===
const translations = {
  es: {
    "nav-home": "Inicio",
    "nav-about": "Sobre mí",
    "nav-skills": "Habilidades",
    "nav-projects": "Proyectos",
    "nav-contact": "Contacto",
    "hero-intro": "Hola, mi nombre es",
    "hero-role": "Científico de Datos e Ingeniero de Machine Learning"
  },
  en: {
    "nav-home": "Home",
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-contact": "Contact",
    "hero-intro": "Hello, my name is",
    "hero-role": "Data Scientist & Machine Learning Engineer"
  }
};

function switchLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Botones de idioma
document.getElementById("es-btn").addEventListener("click", () => switchLanguage("es"));
document.getElementById("en-btn").addEventListener("click", () => switchLanguage("en"));
