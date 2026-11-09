# 📘 Aula 04 — DOM (Document Object Model)

> **Objetivo:** entender como o JavaScript interage com os elementos de uma página HTML.

---

## 1. O que é DOM?

DOM (*Document Object Model*) é uma representação do documento HTML em forma de árvore de objetos.

Permite que o JavaScript acesse, modifique e manipule os elementos de uma página.

---

## 2. Como funciona?

O navegador transforma o HTML em uma estrutura que o JavaScript consegue acessar.

**Exemplo de HTML:**

```html
<h1 id="titulo">Olá, mundo!</h1>
```

**Manipulação com JavaScript:**

```javascript
const titulo = document.getElementById("titulo");

titulo.textContent = "Olá, JavaScript!";
```

---

## 3. Principais métodos e propriedades

| Método / Propriedade | Função |
|---|---|
| `document` | Acessa o documento HTML. |
| `getElementById()` | Busca um elemento pelo ID. |
| `querySelector()` | Seleciona o primeiro elemento correspondente. |
| `querySelectorAll()` | Seleciona todos os elementos correspondentes. |
| `textContent` | Lê ou modifica o texto. |
| `innerHTML` | Lê ou modifica o conteúdo HTML interno. |
| `style` | Permite alterar estilos CSS. |

---

## 4. Eventos

Eventos permitem que o JavaScript execute funções em resposta às ações do usuário.

Exemplos:
- `click` → clique.
- `input` → alteração em um campo.
- `submit` → envio de formulário.
- `mouseover` → mouse sobre um elemento.

**Exemplo:**

```html
<button id="botao">Clique aqui</button>
```

```javascript
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
  alert("Botão clicado!");
});
```

---

## 5. Resumo rápido

- DOM → representação do HTML em forma de árvore.
- JavaScript → interage com os elementos da página.
- `document` → acesso ao documento.
- Seletores → encontram elementos HTML.
- Propriedades → permitem acessar ou modificar conteúdos.
- Eventos → permitem responder às ações do usuário.

---

<sub>JavaScript • Fundamentos • Aula 04</sub>