# 🍲 Cozinha da Vovó

**Cozinha da Vovó** é uma página simples e afetuosa dedicada ao resgate das receitas tradicionais de família. A ideia é criar um espaço digital que valorize o sabor de casa e a memória afetiva da culinária da vovó.

Este projeto foi desenvolvido como parte de estudos sobre **HTML**, **CSS**, **JS** e **estruturação de páginas web**, com foco na organização do layout, responsividade e estilização com CSS moderno.
## 🎥 Demonstração

![Demo](./preview.gif)


## 🎨 Layout e Estilo

A aplicação apresenta um layout limpo e aconchegante, com:

- Cores suaves e tipografia agradável
- Imagem de capa com destaque
- Botão de navegação para a página de receitas
- Lista com todas as receitas
- Detalhamento da receita
- Rodapé estilizado com créditos da equipe

## 🧩 Estrutura do Projeto

- `index.html`: Página principal com imagem de destaque e botão para acessar as receitas
- `receitas.html`: Página que exibe os detalhes da receita, alimentada dinamicamente via JavaScript
- `styles/base.css`: Estilos globais da aplicação
- `styles/home.css`: Estilos específicos da página inicial
- `script.js`: Responsável pelo dinamismo e uso de apenas uma página para mostrar todas as receitas. Fazendo o código mais limpo

## 💻 Alimentação Dinâmica da Página de Receitas

A página de receitas (`receitas.html`) utiliza um script JavaScript para carregar dinamicamente os dados das receitas com base no parâmetro `id` da URL.

Os dados de receitas (títulos, imagens, ingredientes e modo de preparo) são organizados em arrays no arquivo JS e inseridos na página via DOM. Isso evita a necessidade de páginas estáticas para cada receita e facilita manutenção e escalabilidade.

Exemplo do que é alimentado via JS:

- Título da receita
- Imagem da receita
- Lista de ingredientes
- Modo de preparo (que pode ser simples em texto ou dividido em seções com listas ordenadas)

## 🚀 Funcionalidades

- Layout responsivo para diferentes tamanhos de tela
- Animação sutil na imagem de capa ao passar o mouse
- Rodapé moderno com estrutura em flexbox
- Organização modular de arquivos CSS
- Dinamismo na página de receitas via JavaScript

## 📂 Tecnologias Utilizadas

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=flat)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=flat)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat)

## 👨‍🍳 Créditos

Desenvolvido com carinho por:

- Daniel Correia Costa
- Tatyanne Vitoria Bianor Guedes
- Karolyne Silva de Souza Paes

Projeto criado como parte do curso **Aplicações para Internet**.
