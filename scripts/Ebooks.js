const o = 1;
const pai = document.querySelector(".pai");
/*seçoes*/
const sectionCards = document.querySelector(".cards");
const sectionCards1 = document.querySelector(".mark");

const card = document.querySelector(".card");

const ebooks = [
  {
    img: "img/img_Ebooks/ebook1.png",
    title: "JavaScript O Guia Definitiovo",
    autor: "David Flanagan",
    Categoria: "programação",
    linguagem: "Português",
    id: "JavaScript O Guia Definitivo_v2.pdf",
  },
  {
    img: "img/img_Ebooks/ebook2.png",
    title: "Apostila Matlab",
    Categoria: "programação",
    linguagem: "Português",
    autor: "Alex Jenaro Becker,...",
    id: "Apostila_Matlab.pdf",
  },
  {
    img: "img/img_Ebooks/ebook3.png",
    title: "Programaçãoem JAVA ",
    Categoria: "programação",
    linguagem: "Português",
    autor: "Daniela Barreiro Claro,...",
    id: "0031.pdf",
  },
  {
    img: "img/img_Ebooks/ebook4.png",
    title: "Introdução JavaScript",
    Categoria: "programação",
    linguagem: "Português",
    autor: "Prof. Vilson Heck Junior",
    id: "04_introducao_javaScript.pdf",
  },
  {
    img: "img/img_Ebooks/ebook5.png",
    title: "Algoritimos parte 1",
    Categoria: "programação",
    linguagem: "Português",
    autor: "Universidade do Rio... ",
    id: "algoritmos_parte1.pdf",
  },
  {
    img: "img/img_Ebooks/ebook6.png",
    title: "Algoritmos e Programação",
    Categoria: "programação",
    linguagem: "Português",
    autor: "Adolfo José e Francisco",
    id: "algoritmos-e-programacao.pdf",
  },
  {
    img: "img/img_Ebooks/ebook7.png",
    title: "Apostila de PHP",
    Categoria: "programação",
    linguagem: "Português",
    autor: "Bruno Rodrigues",
    id: "apostila_php.pdf",
  },
  {
    img: "img/img_Ebooks/ebook8.png",
    title: "Apostila de html,css e js",
    Categoria: "programação",
    linguagem: "Português",
    autor: "Caelum",
    id: "apostila-html-css-javascript.pdf",
  },

];
ebooks.map((video) => {
  const card_clone = card.cloneNode(true);
  card_clone.querySelector("img").src = video.img;
  card_clone.querySelector(".titulo").innerHTML = video.title;
  card_clone.querySelector(".Categoria").innerHTML = video.Categoria;
  card_clone.querySelector(".linguagem").innerHTML = video.linguagem;
  card_clone.querySelector(".resum").innerHTML = video.autor;
  card_clone.setAttribute("id", video.id);
  sectionCards.appendChild(card_clone);
  sectionCards.style.opacity = "1";
});

const modal = document.querySelector(".page");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach((card) => {
  card.addEventListener("click", () => {
    modal.querySelector(".dow").href = `ebooks/${card.getAttribute("id")}`;
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close_page").addEventListener("click", () => {
  modal.classList.remove("active");
  modal.querySelector(".dow").href = ``;
  document.querySelector("body").style.overflow = "initial";
});

//fixando header
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("header").style.position = "fixed";
  } else {
    document.querySelector("header").style.position = "";
  }
}

card.remove();

//Filtro para pesquisas por ebooks
const filtro = document.getElementById("filtro-nome");
const tabelamae = document.querySelectorAll(".titulo");
const tabelamae_categoria = document.querySelectorAll(".Categoria");

filtro.onkeyup = function () {
  const nomefiltro = filtro.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  for (var i = 0; i < tabelamae.length; ++i) {
    

    const box = document.querySelector("#box");
    const selecionado = box.options[box.selectedIndex].text;

    if(selecionado === "Ebooks"){
   //pesquisar por ebooks

  const tabela = tabelamae[i].textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      console.log(tabela);
  const corresponde = tabela.indexOf(nomefiltro) >= 0;
      console.log(corresponde);
  if(corresponde === false){
    const pai2 = tabela.parentNode;
    console.log(pai2);
    const pai = tabelamae[i].parentNode;
    pai.style.display = "none";
  } else if(corresponde === true){
    const pai = tabelamae[i].parentNode;
    pai.style.display = "";
  };
   if(nomefiltro.value == ""){
    document.querySelectorAll(".card").style.display = "";
  };
 
  }else if (selecionado === "Categoria"){ //Pesquisar por categorias
    

    
  const tabela = tabelamae_categoria[i].textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  const corresponde = tabela.indexOf(nomefiltro) >= 0;
  

  //tabela[i].style.display= corresponde ? '' : 'none';
  if(corresponde === false){
  
    const pai = tabelamae[i].parentNode;
    pai.style.display = "none";
  } else if(corresponde === true){
    const pai = tabelamae[i].parentNode;
    pai.style.display = "";
  };
   if(nomefiltro.value == ""){
    document.querySelectorAll(".card").style.display = "";
  };
 
  }

}
};
