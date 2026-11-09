/*

    ForEach(item, index, array)

    item) - Dados/Informações contidas na posição atual do array
    index) - Número de posição. sempre começando em 0.
    array) - Retorna o array completo

*/

/* ESTRUTURA FOR EACH

array.forEach((element, index, array) => {
    // Código executado para cada elemento
});

- forEach: percorre cada elemento de um array.
- element: representa o elemento atual.
- index: representa a posição do elemento (opcional).
- array: representa o array original (opcional).

OBSERVAÇÕES:
- Executa a função uma vez para cada elemento.
- Não retorna um novo array.
- Não altera o array original automaticamente.
- É utilizado principalmente para percorrer arrays.

*/

const Users = [
  { name: "Rodolfo", age: 33, contact: "(19) 94343-3434" },
  { name: "Paulo", age: 21, contact: "(12) 93443-3434" },
  { name: "Aline", age: 40, contact: "(13) 94566-3434" },
  { name: "Maria", age: 12, contact: "(14) 94343-3476" },
];

Users.forEach(function (item, index, array) {
  console.log(item);
//   console.log(index);
//   console.log(array);
});
