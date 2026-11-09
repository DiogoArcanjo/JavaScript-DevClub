/*

    Estrutura de Repetição - Loop

    -For
    1) Inicialização - Criar uma variavel e 
                        colocar um valor inicial

    2) Condição - enquanto for true, o laço continuara iterando.
                        ele ira verificar antes de cada iteração

    3) Expressão final - O que irá ocorrer a cada vez que o 
                            nosso laço der uma volta

    for ([inicialização]; [condição]; [expressão final]) {
        // bloco de código a ser executado
    }


*/


for (i = 0; i < 10; i++) {
    console.log(i);
}

const users = ['João', 'Maria', 'José', 'Pedro', 'Ana']; //legth tamanho do array

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}