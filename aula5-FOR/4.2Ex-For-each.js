// Sistema de pedidos

/*

    Imagine que você está desenvolvendo um sistema para uma loja. 
    Você recebeu uma lista de pedidos e precisa percorrer todos eles para identificar algumas informações.

    FUNÇÕES CRIADAS: 
        listarPedidos() | identificarPedidosEntregues() | identificarPedidosPendentes() | pedidosDeAltoValor()

*/

const pedidos = [
  { cliente: "Carlos", produto: "Notebook", valor: 3500, status: "entregue" },
  { cliente: "Ana", produto: "Mouse", valor: 120, status: "pendente" },
  { cliente: "Pedro", produto: "Teclado", valor: 250, status: "entregue" },
  { cliente: "Mariana", produto: "Monitor", valor: 1200, status: "cancelado" },
  { cliente: "Lucas", produto: "Headset", valor: 450, status: "pendente" },
  { cliente: "Julia", produto: "Webcam", valor: 300, status: "entregue" },
];

// Exercico 01 - Listar pedidos

function listarPedidos() {
  pedidos.forEach(function (item, index) {
    console.log(
      ` Nome do Cliente: ${item.cliente}\n Produto Comprado: ${item.produto}\n ID Pedido: ${index}\n  `, //aprender a chamar função forEach so quando eu chamar
    );
  });
}

// ----------------------------------------------

//Exercicio 02 - Identificar pedidos entregues

function identificarPedidosEntregues() {
  pedidos.forEach(function (item) {
    if ((item.status === "entregue")) {
      console.log(
        ` Cliente: ${item.cliente}\n Produto: ${item.produto}\n Status: ${item.status}\n `,
      );
    }
  });
}

// ----------------------------------------------

//Exercicio03 - Identificar pedidos pendentes

function identificarPedidosPendentes() {
  pedidos.forEach(function (item, index) {
    if (item.status === "pendente") {
      console.log(`ID: ${index} Status: ${item.status}. Precisa ser enviado! `);
    } else {
      console.log(`ID: ${index} Status: ${item.status}. `);
    }
  });
}

// ----------------------------------------------

//04 - Pedidos de alto valor

function pedidosDeAltoValor() {
  pedidos.forEach(function (item) {
    if (item.valor > 500) {
      console.log(
        ` Cliente: ${item.cliente}\n Valor: ${item.valor}\n Pedido de alto valor!\n `,
      );
    }
  });
}

identificarPedidosPendentes()