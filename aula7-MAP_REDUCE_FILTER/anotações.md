# Aula 07 — Métodos de Arrays (map, reduce e filter)

> **Objetivo:** aprender a transformar, acumular e filtrar dados dentro de arrays.

## 1. Map — Transformar elementos

Cria um novo array com a mesma quantidade de elementos do array original, permitindo transformar cada item.

**Acessa até 3 informações:**
- Elemento atual.
- Índice atual.
- Array completo.

```js
const numeros = [1, 2, 3, 4];

const dobro = numeros.map(numero => numero * 2);

console.log(dobro); // [2, 4, 6, 8]
```

**Importante:** não modifica o array original. Retorna um novo array.

## 2. Reduce — Acumular valores

Percorre o array e acumula os resultados, reduzindo os elementos a um único valor.

**Acessa até 4 informações:**
- `acumulador`: resultado acumulado.
- `valorAtual`: elemento que está sendo processado.
- `indiceAtual`: posição do elemento.
- `array`: array original.

```js
const numeros = [1, 2, 3, 4];

const soma = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

console.log(soma); // 10
```

**Importante:** o `0` representa o valor inicial do acumulador.

**Exemplo prático:** calcular o faturamento de um estoque:

```js
const faturamento = produtos.reduce((total, produto) => {
  return total + produto.preco * produto.quantidade;
}, 0);
```

## 3. Filter — Filtrar elementos

Cria um novo array contendo apenas os elementos que atendem a uma condição.

**Acessa até 3 informações:**
- Elemento atual.
- Índice atual.
- Array completo.

```js
const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter(numero => {
  return numero % 2 === 0;
});

console.log(pares); // [2, 4, 6]
```

**Exemplo prático:** selecionar produtos em promoção:

```js
const promocao = produtos.filter(produto => produto.temDesconto);
```

**Importante:** o `filter()` mantém os elementos originais que atendem à condição e não modifica o array original.

## 4. Comparação rápida

| Método | O que faz? | Retorno |
|---|---|---|
| `map()` | Transforma elementos | Novo array |
| `reduce()` | Acumula valores | Um único valor |
| `filter()` | Filtra elementos | Novo array |

## Resumo rápido

- `map()`: transforma os elementos de um array.
- `reduce()`: acumula valores, como uma soma ou total.
- `filter()`: seleciona elementos com base em uma condição.
- Os três métodos recebem uma função como argumento.
- Nenhum deles modifica diretamente o array original.

---

<sub>JavaScript • Fundamentos • Aula 07</sub>