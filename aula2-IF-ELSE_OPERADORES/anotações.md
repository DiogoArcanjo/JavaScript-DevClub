# 📘 Aula 02 — Condicionais e operadores de comparação

> **Objetivo:** entender como controlar o fluxo do programa utilizando condições.

---

## 1. Condicionais (if / else)

Permitem executar diferentes blocos de código dependendo de uma condição.

| Estrutura | Significado |
|---|---|
| `if` | Se a condição for verdadeira. |
| `else` | Caso contrário. |

**Exemplo:**

```javascript
const idade = 20;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```

**Fluxo:** se a condição do `if` for verdadeira, executa seu bloco. Caso contrário, executa o `else`.

---

## 2. Operadores de comparação

São utilizados para comparar valores e retornar um resultado booleano (`true` ou `false`).

| Operador | Significado |
|---|---|
| `<` | Menor que |
| `>` | Maior que |
| `<=` | Menor ou igual a |
| `>=` | Maior ou igual a |
| `==` | Igualdade (com conversão de tipo) |
| `===` | Igualdade de valor e tipo |
| `!=` | Diferente (com conversão de tipo) |

**Exemplos:**

```javascript
10 > 5      // true
10 < 5      // false
10 >= 10    // true
10 === "10" // false
10 == "10"  // true
```

> **Atenção:** prefira `===` e `!==` para comparações, evitando conversões automáticas inesperadas.

---

## 3. Operador de atribuição

O sinal `=` não é um operador de comparação. Ele serve para atribuir um valor a uma variável.

```javascript
let idade = 20;

idade = 25;
```

| Operador | Função |
|---|---|
| `=` | Atribuição |
| `==` | Comparação de igualdade |
| `===` | Comparação de valor e tipo |

---

## 4. Resumo rápido

- `if` → executa código quando uma condição é verdadeira.
- `else` → executa código quando a condição é falsa.
- Operadores de comparação → verificam relações entre valores.
- `=` → atribui um valor.
- `===` → compara valor e tipo.
- Comparações retornam `true` ou `false`.

---

<sub>JavaScript • Fundamentos • Aula 02</sub>