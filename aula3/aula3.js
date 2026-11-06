/* 

    Functions / Funções
    
    -Trecho de código que é executado quando chamado (parente gente boa)
    - Trecho de código que pode ser reutilizado varias vezes

    [X] O que é uma função e como usar?
    [X] Função VOID (vazia) - função sem return = VOID
    [X] Função com parâmetros
    [X] Função return
    [X] Arrow Function

    

*/

// /* VOID ------------------------------------------------------------ */ 

// function digaMeuNome() {
//   console.log("Meu nome é Diogo");
// }

// digaMeuNome(); // Chamando a função

// /* PARÂMETROS ------------------------------------------------------------ */

// // // ex-01

// function digaQualquerNome(nome) {
//   console.log(`Meu nome é ${nome}`);
// }

// digaQualquerNome("samuel"); // Chamando a função com parâmetro

// // ex-02

// function soma(numero1, numero2) {
//   const resultado = numero1 + numero2;
//   console.log(`a soma de ${numero1} + ${numero2} = ${resultado}`);
// }

// soma(10, 20); // Chamando a função com parâmetros
// soma(5, 15); // Chamando a função com parâmetros

/* RETURN ------------------------------------------------------------ */

//ex-01

// function soma(numero1, numero2) {
//   const resultado = numero1 + numero2;

//     return resultado;
// }

// const resultadoSoma = soma(10, 20); // Chamando a função com parâmetros

//ex-02

// function estaIndividado(gastos,receita) {
//     if (gastos > receita) {
//         return "Está endividado";
//     } else {
//         return "Não está endividado";
//     }
// }

// const Diogo = estaIndividado(1000, 500);
// const Samuel = estaIndividado(500, 1000);

// console.log(Diogo);
// console.log(Samuel);


/* Arrow Function ------------------------------------------------------------ */

function funcaoNormal() { // Função normal forma clássica
    //conteudo da função
}

const digaMeuNome = () => { // Arrow Function forma moderna
    console.log("Meu nome é Diogo");
} 

digaMeuNome(); // Chamando a função






