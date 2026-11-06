# 📘 Aula 03 — Functions (Funções)

> **Objetivo:** entender como criar, reutilizar e executar blocos de código utilizando funções.

---

## 1. O que são funções?

São blocos de código que executam uma tarefa específica quando chamados.

**Principais vantagens:**
- Reutilização de código.
- Organização do programa.
- Evita repetição desnecessária.

```javascript
function saudacao() {
  console.log("Olá, mundo!");
}

saudacao(); // Chamada da função
```

---

## 2. Função sem retorno (void)

É uma função que executa uma tarefa, mas não retorna um valor explicitamente.

```javascript
function mostrarMensagem() {
  console.log("Bem-vindo!");
}

mostrarMensagem();
```

> Em JavaScript, uma função sem `return` retorna `undefined` implicitamente. `void` não é uma palavra-chave para declarar funções, mas é um termo comum para descrever funções sem retorno útil.

---

## 3. Funções com parâmetros

Parâmetros permitem receber informações para serem utilizadas dentro da função.

```javascript
function saudacao(nome) {
  console.log(`Olá, ${nome}!`);
}

saudacao("Diogo");
```

- `nome` → parâmetro.
- `"Diogo"` → argumento (valor passado na chamada).

---

## 4. Funções com return

O `return` permite devolver um resultado da função para ser utilizado em outras partes do código.

```javascript
function somar(a, b) {
  return a + b;
}

const resultado = somar(10, 5);

console.log(resultado); // 15
```

> O `return` também encerra a execução da função naquele ponto.

---

## 5. Arrow Functions

É uma forma alternativa e mais compacta de escrever funções utilizando `=>`.

```javascript
const somar = (a, b) => {
  return a + b;
};

console.log(somar(10, 5)); // 15
```

Quando existe apenas uma expressão no corpo, podemos simplificar:

```javascript
const somar = (a, b) => a + b;
```

---

## 6. Comparação rápida

| Tipo | Característica |
|---|---|
| Função tradicional | Declarada com `function`. |
| Sem retorno | Executa uma tarefa sem devolver um resultado útil. |
| Com parâmetros | Recebe informações para trabalhar. |
| Com `return` | Devolve um resultado. |
| Arrow Function | Sintaxe alternativa utilizando `=>`. |

---

## 7. Resumo rápido

- Função → bloco de código reutilizável.
- Chamada → executa a função.
- Parâmetro → informação recebida pela função.
- Argumento → valor enviado na chamada.
- `return` → devolve um resultado.
- Sem `return` → retorna `undefined`.
- Arrow Function → forma alternativa de declarar funções.

---

<sub>JavaScript • Fundamentos • Aula 03</sub>