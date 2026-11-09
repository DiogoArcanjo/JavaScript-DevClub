/*

    Estrutura de repetição - LOOP
        - FOR IN
        - Usado para iterar objetos 

*/

const user = {
    name: "Diogo",
    age: 22,
    street: "rua dos bobo"
}

console.log(user.name) 

for (let key in user) {
    console.log(` ${key} : ${user[key]} `)
}


