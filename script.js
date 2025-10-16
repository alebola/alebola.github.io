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
    "projects-title": "Featured Projects",
    "contact-title": "Contact",
    "contact-text": "You can find me on my social networks or write to me directly:"
  }
};

function switchLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.getElementById("es-btn").addEventListener("click", () => switchLanguage("es"));
document.getElementById("en-btn").addEventListener("click", () => switchLanguage("en"));

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
  ctx.fillStyle = "white";
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

/* === CARGA AUTOMÁTICA DE PROYECTOS GITHUB === */
const username = "alebola";
const projectContainer = document.getElementById("projects-grid");

async function fetchPinnedRepos() {
  try {
    const response = await fetch(`https://gh-pinned-repos.egoist.dev/?username=${username}`);
    const repos = await response.json();

    repos.forEach((repo) => {
      const card = document.createElement("div");
      card.classList.add("project-card");

      card.innerHTML = `
        <h3>${repo.repo}</h3>
        <p>${repo.description || "Sin descripción"}</p>
        <a href="https://github.com/${username}/${repo.repo}" target="_blank">Ver en GitHub →</a>
      `;

      projectContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error al cargar los repositorios:", error);
    projectContainer.innerHTML =
      "<p style='text-align:center;color:#999;'>No se pudieron cargar los proyectos.</p>";
  }
}

fetchPinnedRepos();
