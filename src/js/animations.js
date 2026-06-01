export function iniciarAnimacoes() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document
    .querySelectorAll(".solucao-card, .feature-item, .depoimento-card, .faq-item")
    .forEach((el) => {
      el.classList.add("fade-up");
      observer.observe(el);
    });
}
