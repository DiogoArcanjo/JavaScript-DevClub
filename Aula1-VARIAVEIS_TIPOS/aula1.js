/*
    varivaeis

    let - variavel que pode ser alterada
    const - variavel que não pode ser alterada
    var - variavel que pode ser alterada, mas não é mais utilizada

    string - texto
    number - numero
    boolean - verdadeiro ou falso
    objeto - Objetos
    null & undefined - valores nulos e indefinidos
    array - lista de valores


*/

const abacate = "variavel const abacate" 
const numero = 10
const textos = `variavel const textos ${numero}`

const usuario1 = {
    nome: "Lucas",
    idade: 20,
    cidade: "São Paulo",
    casado: false,
    conjuge: null,
}

const usuario2 = {
    nome: "Jose",
    idade: 28,
    cidade: "Peabiru",
    casado: true,
    conjuge: "Maria",
}

const clientes = ["ana", "joão", "maria", "jose"]

console.log(clientes)
console.log(clientes[2])
