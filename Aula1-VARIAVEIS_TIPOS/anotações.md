# 📘 Aula 01 — Variáveis e tipos de dados

> **Objetivo:** entender como armazenar informações e identificar os principais tipos de dados do JavaScript.

---

## 1. Variáveis

São utilizadas para armazenar informações durante a execução do programa.

| Declaração | Característica |
|---|---|
| `let` | Permite alterar o valor. |
| `const` | Não permite uma nova atribuição. |
| `var` | Forma antiga de declaração. |

```javascript
let idade = 20;
idade = 21;

const nome = "Diogo";
```

> **Boa prática:** prefira `const` por padrão e utilize `let` quando precisar alterar o valor. Evite `var` em códigos novos.

---

## 2. Tipos de dados

| Tipo | Descrição | Exemplo |
|---|---|---|
| `string` | Texto | `"Diogo"` |
| `number` | Números | `25`, `10.5` |
| `boolean` | Verdadeiro ou falso | `true` |
| `object` | Conjunto de propriedades | `{ nome: "Lucas" }` |
| `null` | Ausência intencional de valor | `null` |
| `undefined` | Valor não definido | `undefined` |
| `array` | Lista de valores | `[1, 2, 3]` |

---

## 3. Exemplos práticos

**Objeto**

Agrupa informações relacionadas por meio de propriedades.

```javascript
const usuario = {
  nome: "Lucas",
  idade: 20,
  cidade: "São Paulo"
};
```

**Array**

Armazena vários valores em uma única estrutura. Seus índices começam em `0`.

```javascript
const frutas = ["Maçã", "Banana", "Abacate"];

console.log(frutas[0]); // Maçã
```

**Null x Undefined**

| `null` | `undefined` |
|---|---|
| Ausência intencional de valor. | Valor ainda não definido. |

```javascript
const telefone = null;

let email;
console.log(email); // undefined
```

---

## 4. Resumo rápido

- `let` → valor alterável.
- `const` → sem nova atribuição.
- `var` → declaração antiga.
- `string` → texto.
- `number` → número.
- `boolean` → verdadeiro ou falso.
- `object` → propriedades e valores.
- `null` → ausência intencional.
- `undefined` → valor não definido.
- `array` → lista de valores.

---

<sub>JavaScript • Fundamentos • Aula 01</sub>