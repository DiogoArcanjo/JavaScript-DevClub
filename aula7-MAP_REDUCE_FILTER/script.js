/*

    DOMINANDO ARRAYS No JAVASCRIPT

    Map( Mapear item por item no Array )
        - Criar um movo array com a mesma quantidade de itens do array original.
        - O novo array você pode alterar o que quiser em relação ao array original.
        - Você tem acesso a 3 dados:
            - Item por item dentro do array
            - Posição atual do array
            - Array completo

    Reduce(Reduzir o tamanho do array a um unico valor)
        - Reduz um array inteiro a um UNICO valor
            - Você tem acesso a quatro dados
                - Acumulador 
                - Valor Atual
                - Posição Atual
                - Array Completo

*/

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

// CRIAR UM NOVO ARRAY FORMATANDO A MOEDA E DANDO DESCONTO AOS CLIENTES
const novosProdutos = produtos.map((produto) => {
  const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco;

  return {
    id: produto.id,
    nome: produto.nome,
    preco: novoPreco.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }),
    temDesconto: produto.temDesconto,
    quantidade: produto.quantidade,
  };
});

// console.table(novosProdutos);

// QUAL SERA O FATURAMENTO SE VENDERMOS TODO ESTOQUE?

const totalVendas = produtos.reduce((acumulador, produto) => {
  return acumulador + produto.preco * produto.quantidade;
}, 0);

console.log(
  totalVendas.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  }),
);

//