/* 

    Math -> Matemática
        - pow(2,2) / potencia / 2² = 4
        - sqrt(25,2) / raizQuadrada / √25
        - ceil / teto -> arredondar pra cima
        - floor / chão -> arredondar pra baixo
        - ramdom() / número aleatorio entre 0 e 1


*/

const potencia = Math.pow(5, 2);
const raiz = Math.sqrt(255, 2);

console.log(potencia);
console.log(Math.ceil(raiz));
console.log(Math.floor(raiz));

const aleatorio = Math.random();

console.log(aleatorio);

// math.ramdom * (max - min) + min
const aleatorioEntreMaxMin = Math.random() * (100 - 1) + 1;

console.log(Math.floor(aleatorioEntreMaxMin));
