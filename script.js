// Pega o ID da receita pela URL
const id = new URLSearchParams(window.location.search).get("id");

// Títulos, ingredientes, modos separados e a image(src) em arrays simplesl.

const titulos = [
  "",
  "Bolo de Fubá",
  "Escondidinho de Carne Seca",
  "Pudim de Leite",
  "Torta de Frango Cremosa",
  "Lasanha de frango com queijo",
  "Panqueca de Carne Moída",
];

const imagens = [
  "",
  "img/bolofuba.jpg",
  "img/escondidinho.jpg",
  "img/pudim.jpg",
  "img/torta.jpg",
  "img/lasanha.jpg",
  "img/panqueca.jpg",
];

const ingredientes = [
  [],
  [
    "2 xícaras de fubá",
    "1 xícara de farinha de trigo",
    "2 xícaras de açúcar",
    "3 ovos",
    "1 xícara de leite",
    "1/2 xícara de óleo",
    "1 colher de sopa de fermento",
  ],
  [
    "500g de carne seca dessalgada e desfiada",
    "1 kg de mandioca cozida e amassada",
    "1 cebola picada",
    "2 colheres de manteiga",
    "1/2 xícara de leite",
    "200g de queijo muçarela ralado",
    "Sal e cheiro-verde a gosto",
  ],
  [
    "1 lata de leite condensado",
    "2 medidas de leite",
    "3 ovos",
    "Açúcar para caramelizar",
  ],
  [
    "2 xícaras de frango cozido e desfiado",
    "1 lata de milho",
    "1 copo de requeijão",
    "1 cebola picada",
    "2 colheres de farinha de trigo",
    "2 xícaras de leite",
    "3 ovos",
    "1 xícara de óleo",
    "1 xícara de farinha de trigo",
    "1 colher de sopa de fermento",
    "Sal a gosto",
    "Queijo ralado para gratinar",
  ],
  [
    "1 peito de frango",
    "400 g de presunto fatiado",
    "1 pote de requeijão cremoso",
    "2 copos de leite",
    "2 colheres de farinha",
    "1 cebola",
    "500g de queijo",
    "1 pacote de massa pronta para lasanha",
    "2 caldos de galinha",
    "1 caixa de creme de leite",
    "3 colheres de manteiga",
  ],
  [
    "2 xícaras de leite",
    "2 ovos",
    "1 e 1/2 xícara de farinha de trigo",
    "1 pitada de sal",
    "500g de carne moída",
    "1 cebola picada",
    "2 dentes de alho picados",
    "1 lata de molho de tomate",
    "Óleo, sal e pimenta a gosto",
    "Queijo ralado para gratinar",
  ],
];

const modos = [
  "",
  "Misture tudo, coloque em forma untada e asse por 40 minutos.",
  {
    Recheio: [
      "Refogue a cebola com 1 colher de manteiga.",
      "Adicione a carne seca desfiada e misture bem.",
      "Ajuste o sal e adicione cheiro-verde. Reserve.",
    ],
    Purê: [
      "Misture a mandioca amassada com o leite e 1 colher de manteiga.",
      "Mexa até virar um purê cremoso. Ajuste o sal.",
    ],
    Montagem: [
      "Em um refratário, faça uma camada com metade do purê.",
      "Adicione o recheio de carne seca por cima.",
      "Cubra com o restante do purê.",
      "Polvilhe com queijo muçarela e leve ao forno para gratinar por 20 minutos.",
    ],
  },
  "Bata tudo, coloque na forma caramelizada e asse em banho-maria por 1 hora.",
  {
    Massa: [
      "Bata no liquidificador: ovos, óleo, leite, farinha, fermento e uma pitada de sal. Reserve.",
    ],
    Recheio: [
      "Refogue a cebola com um pouco de óleo.",
      "Adicione o frango desfiado e o milho, tempere a gosto.",
      "Desligue o fogo e misture o requeijão ao recheio.",
    ],
    Montagem: [
      "Unte uma forma e despeje metade da massa.",
      "Distribua o recheio sobre a massa.",
      "Cubra com o restante da massa.",
      "Polvilhe queijo ralado por cima e leve ao forno pré-aquecido a 180°C por 35 minutos.",
    ],
  },
  {
    Molho: [
      "Em uma panela, faça um creme homogêneo com as 2 colheres de farinha e 2 colheres de manteiga (reserve 1 colher de manteiga).",
      "Acrescente o leite, 1 caldo de galinha e mexa constantemente.",
      "Retire do fogo e acrescente o creme de leite, reserve.",
    ],
    Frango: [
      "Cozinhe o peito de frango em água (sem óleo), após cozido, desfie-o.",
      "Pique a cebola em pedaços pequenos, coloque em uma panela e doure com a manteiga.",
      "Acrescente o frango e o caldo de galinha, mexa sempre até o frango ficar totalmente dourado.",
    ],
    Montagem: [
      "Em um refratário, coloque 2 conchas de molho.",
      "Faça a base com massa de lasanha, cubra com 1 camada de presunto, 1 de queijo e 1 de frango (nessa ordem).",
      "Sobre o frango, coloque 1 camada de requeijão e 2 conchas de molho.",
      "Cubra o requeijão com 1 camada de presunto, 1 camada de queijo e 1 camada de massa, coloque molho.",
      "Repita esse processo até faltar cerca de 2,5 cm para chegar na borda do refratário.",
      "Para finalizar, cubra a lasanha com muito queijo, requeijão e molho e asse por aproximadamente 20 minutos com fogo baixo.",
    ],
  },
  {
    Massa: [
      "Bata no liquidificador o leite, os ovos, a farinha e o sal até obter uma massa homogênea.",
      "Aqueça uma frigideira untada e faça discos finos com a massa (panquecas). Reserve.",
    ],
    Recheio: [
      "Refogue o alho e a cebola no óleo.",
      "Adicione a carne moída, sal e pimenta, cozinhando até secar bem.",
      "Adicione um pouco de molho de tomate, deixando o recheio cremoso.",
    ],
    Montagem: [
      "Recheie cada panqueca com a carne, enrole e disponha em um refratário.",
      "Cubra com o restante do molho de tomate e polvilhe queijo ralado.",
      "Leve ao forno para gratinar por 15 minutos.",
    ],
  },
];

// Se o ID for válido, preenche a página
if (id >= 1 && id <= 6) {
  document.getElementById("titulo-receita").textContent = titulos[id];
  document.getElementById("ingredientes").innerHTML = ingredientes[id]
    .map((item) => `<li>${item}</li>`)
    .join("");

  document.getElementById("imagem-receita").src = imagens[id];
  document.getElementById("imagem-receita").alt = titulos[id];


  //Busca o elemento do HTML com id="modo-preparo", onde queremos inserir o conteúdo do modo de preparo.
  const modoPreparoContainer = document.getElementById("modo-preparo");
  // modos é um array (ou parcialmente um array misto com strings e objetos), onde cada posição representa o modo de preparo de uma receita.
  //id é o índice da receita atual (provavelmente definido a partir da URL).
  // Essa linha guarda o modo de preparo da receita atual (pode ser uma string simples ou um objeto mais detalhado) na constante modo.
  const modo = modos[id];

  //Verifica se o conteúdo é uma string simples
  if (typeof modo === "string") {
    //Se for, ele insere esse texto dentro de um parágrafo (<p>) no HTML do container.
    modoPreparoContainer.innerHTML = `<p>${modo}</p>`;
    //Se não for string, supõe que é um objeto com seções
  } else if (typeof modo === "object") {
    // Limpa conteúdo
    modoPreparoContainer.innerHTML = ""; //Isso é importante para não sobrepor ou repetir conteúdo na tela.

    //Object.entries(modo) transforma o objeto em uma lista de pares [chave, valor].
    //Estamos dizendo: "Para cada entrada no objeto modo, me dê a chave como secao e o valor como passos."
    //Object.entries() é a melhor escolha quando você precisa:
    //Percorrer objetos (não arrays),
    //E precisa de chave + valor ao mesmo tempo.

    Object.entries(modo).forEach(([secao, passos]) => {
      // Cria e adiciona o título da seção (como um <h2>)
      const h2 = document.createElement("h2");
      h2.textContent = secao;
      modoPreparoContainer.appendChild(h2);

      //Cria uma lista ordenada (<ol>) com os passos
      const ol = document.createElement("ol");

      // Adiciona cada passo como um item da lista (<li>)
      passos.forEach((passo) => {
        const li = document.createElement("li");
        li.textContent = passo;
        ol.appendChild(li);
      });

      //Adiciona a lista completa ao container
      modoPreparoContainer.appendChild(ol);
    });
  }
}
