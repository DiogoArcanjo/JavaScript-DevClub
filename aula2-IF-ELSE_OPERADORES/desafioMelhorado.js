/* 

    Desafio - Aula 2

    Ultilizando If / Else, crie um codigo que 
    - verfifica se uma cidade é grande ou pequena 
    - cidade grande possui mais de 300mil habitantes

*/

// 1. Criando um array com várias cidades
const cidades = [
    {
        nome: "São Paulo",
        habitantes: 5000000
    } ,
    {
        nome: "Parana",
        habitantes: 120000
    },
    {
        nome: "Rio de Janeiro",
        habitantes: 310000
    }
]

// 2. Definindo o limite de habitantes
const limiteHabitantes = 300000

// 3. Criando uma função para classificar a cidade

function classificarCidade(cidade) {
    if (cidade.habitantes > limiteHabitantes) {
        console.log( ` ${cidade.nome} é uma cidade grande e possui ${cidade.habitantes} habitantes ` )
    } else {
        console.log( ` ${cidade.nome} é uma cidade pequena pois possui ${cidade.habitantes} habitantes` )
    }
}

// 4. Utilizando um loop para percorrer as cidades

for (let i=0; i<cidades.length; i++) {
    classificarCidade(cidades[i])
}

