# 📘 Aula 05 — Estruturas de repetição (for, for...of, for...in e forEach)

> **Objetivo:** entender como repetir blocos de código e percorrer arrays, strings e objetos.

---

## 1. For

Utilizado para repetir um bloco de código enquanto uma condição for verdadeira.

**Estrutura:**

```javascript
for (inicialização; condição; incremento) {
  // Código executado
}
```

**Exemplo:**

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

**Resultado:** `0, 1, 2, 3, 4`

---

## 2. For...of

Utilizado para percorrer os **valores** de estruturas iteráveis, como arrays e strings.

**Exemplo:**

```javascript
const frutas = ["Maçã", "Banana", "Uva"];

for (let fruta of frutas) {
  console.log(fruta);
}
```

**Resultado:**

```text
Maçã
Banana
Uva
```

---

## 3. For...in

Utilizado para percorrer as **chaves (propriedades)** de um objeto.

**Exemplo:**

```javascript
const user = {
  name: "Diogo",
  age: 22,
  street: "Rua dos Bobos"
};

for (let key in user) {
  console.log(key);
}
```

**Resultado:**

```text
name
age
street
```

Para acessar os valores, utilizamos `objeto[chave]`:

```javascript
for (let key in user) {
  console.log(user[key]);
}
```

**Resultado:**

```text
Diogo
22
Rua dos Bobos
```

---

## 4. ForEach

Método utilizado para executar uma função para cada elemento de um array.

**Estrutura:**

```javascript
array.forEach((element, index) => {
  // Código executado para cada elemento
});
```

**Exemplo:**

```javascript
const frutas = ["Maçã", "Banana", "Uva"];

frutas.forEach((fruta, index) => {
  console.log(`${index} - ${fruta}`);
});
```

**Resultado:**

```text
0 - Maçã
1 - Banana
2 - Uva
```

**Parâmetros:**

- `element` → elemento atual do array.
- `index` → posição do elemento (opcional).
- `array` → array original (opcional).

> **Atenção:** `forEach` não retorna um novo array e não altera o array original automaticamente.

---

## 5. Comparação rápida

| Estrutura | Utilização |
|---|---|
| `for` | Repetições controladas por condição. |
| `for...of` | Percorrer valores de iteráveis. |
| `for...in` | Percorrer chaves de objetos. |
| `forEach` | Executar uma função para cada elemento de um array. |

---

## 6. Resumo rápido

- `for` → repete código enquanto uma condição for verdadeira.
- `for...of` → percorre valores.
- `for...in` → percorre chaves ou propriedades.
- `forEach` → executa uma função para cada elemento de um array.
- `objeto[key]` → acessa o valor de uma propriedade usando sua chave.

> **Dica:** use `for...of` ou `forEach` para percorrer arrays. Use `for...in` para percorrer propriedades de objetos. Utilize `for` quando precisar controlar manualmente a repetição.

---

<sub>JavaScript • Fundamentos • Aula 05</sub>