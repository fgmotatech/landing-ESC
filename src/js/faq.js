export function iniciarFaq() {
  const itens = document.querySelectorAll(".faq-item");

  itens.forEach((item) => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    btn.addEventListener("click", () => {
      const aberto = btn.getAttribute("aria-expanded") === "true";

      // Fecha todos
      itens.forEach((i) => {
        i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        i.querySelector(".faq-answer").style.maxHeight = null;
        i.classList.remove("open");
      });

      // Abre o clicado (se estava fechado)
      if (!aberto) {
        btn.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
        item.classList.add("open");
      }
    });
  });
}
