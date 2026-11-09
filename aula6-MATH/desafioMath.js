/*

    Exercício 01 — Calculadora de desconto

        Você recebeu o preço de um produto e precisa calcular o desconto de 15%.

*/

const produto = [
  {
    nome: "Teclado",
    preco: 250.75,
    desconto: 15,
  },
];

// Função Listar Produtos ---

function listarProduto() {
  console.log("--- LISTA DE PRODUTOS:\n");
  produto.forEach(function (item,index) {
    console.log(` ID: ${index}\n Produto: ${item.nome}\n Preço: ${item.preco}\n  `);
  });
  console.log("--- Fim Da Lista");
}

// Função Calcular Desconto do Produto ---

function calcularDesconto() {
  console.log("--- LISTA DE PRODUTOS COM DESCONTO:\n");

  produto.forEach(function (item,index) {
    const valorDesconto = item.preco * (item.desconto / 100);
    const valorFinal = item.preco - valorDesconto;

    console.log(
      ` ID: ${index}\n Produto: ${item.nome}\n Preço Original: ${item.preco}\n Desconto: R$${valorDesconto.toFixed(2)}\n Preço Final: R$${valorFinal.toFixed(2)}\n `,
    );
  });

  console.log("--- Fim Da Lista");
}

// calcularDesconto();
// listarProduto()


