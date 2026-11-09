# Aula 06 — Math em JavaScript

> O objeto `Math` oferece propriedades e métodos para realizar operações matemáticas em JavaScript.

## 1. Métodos principais

| Método | Função | Exemplo |
|---|---|---|
| `Math.round()` | Arredonda para o inteiro mais próximo | `Math.round(4.6)` → `5` |
| `Math.floor()` | Arredonda para baixo | `Math.floor(4.9)` → `4` |
| `Math.ceil()` | Arredonda para cima | `Math.ceil(4.1)` → `5` |
| `Math.trunc()` | Remove as casas decimais | `Math.trunc(4.9)` → `4` |
| `Math.abs()` | Retorna o valor absoluto | `Math.abs(-10)` → `10` |
| `Math.pow()` | Calcula uma potência | `Math.pow(2, 3)` → `8` |
| `Math.sqrt()` | Calcula a raiz quadrada | `Math.sqrt(25)` → `5` |
| `Math.max()` | Retorna o maior valor | `Math.max(10, 20, 5)` → `20` |
| `Math.min()` | Retorna o menor valor | `Math.min(10, 20, 5)` → `5` |

## 2. Números aleatórios

`Math.random()` gera um número aleatório entre 0 (inclusivo) e 1 (exclusivo).

```js
Math.random();

// Número inteiro entre 1 e 10
Math.floor(Math.random() * 10) + 1;
```

## 3. Casas decimais

O método `toFixed()` permite definir a quantidade de casas decimais.

```js
const valor = 10.5678;

console.log(valor.toFixed(2)); // "10.57"
```

**Atenção:** `toFixed()` retorna uma string, não um número.

## 4. Propriedades do Math

O objeto também possui constantes matemáticas:

```js
Math.PI // Valor de PI (aproximadamente 3.14159)
Math.E  // Número de Euler (aproximadamente 2.71828)
```

## Resumo rápido

- `Math` reúne ferramentas para cálculos matemáticos.
- `round`, `floor` e `ceil` trabalham com arredondamento.
- `random` gera números aleatórios.
- `max` e `min` identificam o maior e o menor valor.
- `toFixed()` formata a quantidade de casas decimais.

---

<sub>JavaScript • Fundamentos • Aula 06</sub>