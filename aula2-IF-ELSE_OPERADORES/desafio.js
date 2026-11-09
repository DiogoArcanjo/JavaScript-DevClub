/* 

    Desafio - Aula 2

    Ultilizando If / Else, crie um codigo que 
    - verfifica se uma cidade é grande ou pequena 
    - cidade grande possui mais de 300mil habitantes

*/


const cidade = {
    nome: "São Paulo",
    habitantes: 12000000
}

const habitantes = 300000

if (cidade.habitantes >= habitantes) {
    console.log( ` ${cidade.nome} é uma cidade grande ` )
} else {
    console.log( ` ${cidade.nome} é uma cidade pequena ` )
}