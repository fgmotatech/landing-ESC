async function carregarComponente(path, targetId) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Erro ao carregar: ${path}`);
  const html = await response.text();
  document.getElementById(targetId).innerHTML = html;
}

// 1. Carrega todos os componentes no DOM
await Promise.all([
  carregarComponente("./src/components/Navbar.html", "root-navbar"),
  carregarComponente("./src/components/Hero.html", "root-hero"),
  carregarComponente("./src/components/Solutions.html", "root-solutions"),
  carregarComponente("./src/components/Testimonials.html", "root-testimonials"),
  carregarComponente("./src/components/Faq.html", "root-faq"),
  carregarComponente("./src/components/Footer.html", "root-footer"),
]);

// 2. Só então importa e inicializa os módulos JS
const { iniciarNavbar } = await import("./src/js/navbar.js");
const { iniciarSimulador } = await import("./src/js/simulator.js");
const { iniciarFaq } = await import("./src/js/faq.js");
const { iniciarSlider } = await import("./src/js/slider.js");
const { iniciarAnimacoes } = await import("./src/js/animations.js");

iniciarNavbar();
iniciarSimulador();
iniciarFaq();
iniciarSlider();
iniciarAnimacoes();
