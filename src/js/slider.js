export function iniciarSlider() {
  const cards = document.querySelectorAll(".depoimento-card");
  const dots = document.querySelectorAll(".dot");

  if (!cards.length || !dots.length) return;

  let atual = 0;
  let timer;

  function irPara(index) {
    cards[atual].classList.remove("active");
    dots[atual].classList.remove("active");
    atual = index;
    cards[atual].classList.add("active");
    dots[atual].classList.add("active");
  }

  function proximo() {
    irPara((atual + 1) % cards.length);
  }

  function reiniciarTimer() {
    clearInterval(timer);
    timer = setInterval(proximo, 5000);
  }

  // Inicializa
  irPara(0);
  reiniciarTimer();

  // Dots manuais
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      irPara(Number(dot.dataset.index));
      reiniciarTimer();
    });
  });
}
