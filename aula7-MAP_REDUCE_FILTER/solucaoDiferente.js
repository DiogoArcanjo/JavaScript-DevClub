const produtos = [
  {
    id: 1,
    nome: "Smartphone Galaxy S21",
    preco: 3999.99,
    temDesconto: true,
    quantidade: 1,
  },
  {
    id: 2,
    nome: "Notebook Dell Inspiron",
    preco: 4500.0,
    temDesconto: false,
    quantidade: 3,
  },
  {
    id: 3,
    nome: "Smart TV LG 55",
    preco: 2799.0,
    temDesconto: true,
    quantidade: 5,
  },
  {
    id: 4,
    nome: "Fone de Ouvido Bluetooth JBL",
    preco: 299.9,
    temDesconto: false,
    quantidade: 2,
  },
  {
    id: 5,
    nome: "Câmera DSLR Canon",
    preco: 3200.0,
    temDesconto: true,
    quantidade: 1,
  },
  {
    id: 6,
    nome: "Tablet iPad Air",
    preco: 4199.0,
    temDesconto: false,
    quantidade: 8,
  },
  {
    id: 7,
    nome: "Console PlayStation 5",
    preco: 4699.0,
    temDesconto: true,
    quantidade: 2,
  },
  {
    id: 8,
    nome: "Smartwatch Apple Watch",
    preco: 2499.0,
    temDesconto: false,
    quantidade: 7,
  },
  {
    id: 9,
    nome: "Impressora HP Multifuncional",
    preco: 599.9,
    temDesconto: true,
    quantidade: 5,
  },
  {
    id: 10,
    nome: "Caixa de Som Portátil Sony",
    preco: 1000.0,
    temDesconto: false,
    quantidade: 3,
  },
];

// ADICIONAR + 10 EM CADA PRODUTO
// FILTRAR SO OS EM PROMOÇÃO
// QUAL É O FATURAMENTO SE VENDER TODOS EM PROMOÇÃO

const faturamentoTotal = produtos
  .map((produto) => {
    return { ...produto, quantidade: produto.quantidade + 10 };
  })
  .filter((produto) => produto.temDesconto)
  .reduce(
    (acumulador, produto) => acumulador + produto.quantidade * produto.preco,
    0,
  );

console.table(faturamentoTotal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));
