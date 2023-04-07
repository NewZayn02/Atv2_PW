const inputItem = document.querySelector("#inputItem");
const inputQuantidade = document.querySelector("#inputQuantidade");
const inputPreco = document.querySelector("#inputPreco");
const btAdicionar = document.querySelector("#btAdicionar");
const btLimpar = document.querySelector("#btLimpar");
const lista = document.querySelector("#lista tbody");

btAdicionar.addEventListener("click", () => {
  const item = inputItem.value;
  const quantidade = inputQuantidade.value;
  const preco = inputPreco.value;

  if (item && quantidade && preco) {
    const linha = document.createElement("tr");

    const colunaDescricao = document.createElement("td");
    colunaDescricao.textContent = item;
    linha.appendChild(colunaDescricao);

    const colunaQuantidade = document.createElement("td");
    colunaQuantidade.textContent = quantidade;
    linha.appendChild(colunaQuantidade);

    const colunaPreco = document.createElement("td");
    colunaPreco.textContent = preco;
    linha.appendChild(colunaPreco);

    lista.appendChild(linha);
  }
});

btLimpar.addEventListener("click", () => {
  lista.innerHTML = "";
});