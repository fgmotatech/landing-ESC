export function iniciarNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  const links = document.querySelectorAll(".navbar__link");

  // Scroll: adiciona classe scrolled na navbar
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Toggle menu mobile
  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
    toggle.classList.toggle("active");
  });

  // Fecha menu ao clicar em link
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.classList.remove("active");
    });
  });

  // Link ativo com IntersectionObserver
  const sections = document.querySelectorAll("section[id], header[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((s) => observer.observe(s));
}
