export function iniciarSimulador() {
  const range = document.getElementById("simRange");
  const valorDisplay = document.getElementById("simValue");
  const parcelaDisplay = document.getElementById("simParcela");
  const selectPrazo = document.getElementById("simPrazo");
  const selectFinalidade = document.getElementById("simFinalidade");

  // Guard: elementos devem existir no DOM
  if (!range || !valorDisplay || !parcelaDisplay || !selectPrazo || !selectFinalidade) {
    console.warn("[Simulador] Elementos não encontrados no DOM. Verifique se Hero.html foi carregado.");
    return;
  }

  // Taxa mensal por finalidade
  const taxas = {
    giro: 0.0179,
    equipamentos: 0.0159,
    recebiveis: 0.0139,
  };

  function formatBRL(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function calcularParcela() {
    const principal = Number(range.value);
    const prazo = Number(selectPrazo.value);
    const taxa = taxas[selectFinalidade.value];

    // Fórmula Price: PMT = PV * [i(1+i)^n] / [(1+i)^n - 1]
    const fator = Math.pow(1 + taxa, prazo);
    const parcela = (principal * (taxa * fator)) / (fator - 1);

    valorDisplay.textContent = formatBRL(principal);
    parcelaDisplay.textContent = formatBRL(parcela);

    // Atualiza a cor do range dinamicamente
    const pct = ((principal - Number(range.min)) / (Number(range.max) - Number(range.min))) * 100;
    range.style.setProperty("--pct", `${pct}%`);
  }

  range.addEventListener("input", calcularParcela);
  selectPrazo.addEventListener("change", calcularParcela);
  selectFinalidade.addEventListener("change", calcularParcela);

  // Inicializa com valores padrão
  calcularParcela();
}
