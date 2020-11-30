
const pai = document.querySelector(".pai")
/*seçoes*/
const sectionCards = document.querySelector(".cards");
const sectionCards1 = document.querySelector(".mark");


/*script*/ 
const card = document.querySelector(".card");

const videos = [
  {
    img:"img/img_Ebooks/ebook1.png",
    title: "JavaScript O Guia Definitiovo",
    autor: "David Flanagan",
    id: "prog/JavaScript O Guia Definitivo_v2.pdf"
  },
  {
    img:"img/img_Ebooks/ebook2.png",
    title: "Apostila Matlab",
    autor: "Alex Jenaro Becker,...",
    id: "prog/Apostila_Matlab.pdf"
  },
  {
    img:"img/img_Ebooks/ebook3.png",
    title: "Programaçãoem JAVA ",
    autor: "Daniela Barreiro Claro,...",
    id: "prog/0031.pdf"
  },
  {
    img:"img/img_Ebooks/ebook4.png",
    title: "Introdução JavaScript",
    autor: "Prof. Vilson Heck Junior",
    id: "prog/04_introducao_javaScript.pdf"
  },
  {
    img:"img/img_Ebooks/ebook1.png",
    title: "JavaScript O Guia Definitiovo",
    autor: "David Flanagan",
    id: "prog/JavaScript O Guia Definitivo_v2.pdf"
  },
  {
    img:"img/img_Ebooks/ebook2.png",
    title: "Apostila Matlab",
    autor: "Alex Jenaro Becker,...",
    id: "prog/Apostila_Matlab.pdf"
  },
  {
    img:"img/img_Ebooks/ebook3.png",
    title: "Programaçãoem JAVA ",
    autor: "Daniela Barreiro Claro,...",
    id: "prog/0031.pdf"
  },
  {
    img:"img/img_Ebooks/ebook4.png",
    title: "Introdução JavaScript",
    autor: "Prof. Vilson Heck Junior",
    id: "prog/04_introducao_javaScript.pdf"
  },
  {
    img:"img/img_Ebooks/ebook1.png",
    title: "JavaScript O Guia Definitiovo",
    autor: "David Flanagan",
    id: "prog/JavaScript O Guia Definitivo_v2.pdf"
  },
  {
    img:"img/img_Ebooks/ebook2.png",
    title: "Apostila Matlab",
    autor: "Alex Jenaro Becker,...",
    id: "prog/Apostila_Matlab.pdf"
  },
  {
    img:"img/img_Ebooks/ebook3.png",
    title: "Programaçãoem JAVA ",
    autor: "Daniela Barreiro Claro,...",
    id: "prog/0031.pdf"
  },
  {
    img:"img/img_Ebooks/ebook4.png",
    title: "Introdução JavaScript",
    autor: "Prof. Vilson Heck Junior",
    id: "prog/04_introducao_javaScript.pdf"
  },
  {
    img:"img/img_Ebooks/ebook1.png",
    title: "JavaScript O Guia Definitiovo",
    autor: "David Flanagan",
    id: "prog/JavaScript O Guia Definitivo_v2.pdf"
  },
  {
    img:"img/img_Ebooks/ebook2.png",
    title: "Apostila Matlab",
    autor: "Alex Jenaro Becker,...",
    id: "prog/Apostila_Matlab.pdf"
  },
  {
    img:"img/img_Ebooks/ebook3.png",
    title: "Programaçãoem JAVA ",
    autor: "Daniela Barreiro Claro,...",
    id: "prog/0031.pdf"
  },
  {
    img:"img/img_Ebooks/ebook4.png",
    title: "Introdução JavaScript",
    autor: "Prof. Vilson Heck Junior",
    id: "prog/04_introducao_javaScript.pdf"
  },
  {
    img:"img/img_Ebooks/ebook1.png",
    title: "JavaScript O Guia Definitiovo",
    autor: "David Flanagan",
    id: "prog/JavaScript O Guia Definitivo_v2.pdf"
  },
  {
    img:"img/img_Ebooks/ebook2.png",
    title: "Apostila Matlab",
    autor: "Alex Jenaro Becker,...",
    id: "prog/Apostila_Matlab.pdf"
  },
  {
    img:"img/img_Ebooks/ebook3.png",
    title: "Programaçãoem JAVA ",
    autor: "Daniela Barreiro Claro,...",
    id: "prog/0031.pdf"
  },
  {
    img:"img/img_Ebooks/ebook4.png",
    title: "Introdução JavaScript",
    autor: "Prof. Vilson Heck Junior",
    id: "prog/04_introducao_javaScript.pdf"
  },
  
  
];
videos.map(video => {
  const card_clone = card.cloneNode(true);
  card_clone.querySelector("img").src = video.img;
  card_clone.querySelector(".titulo").innerHTML = video.title;
  card_clone.querySelector(".resum").innerHTML =video.autor;
  card_clone.setAttribute("id", video.id);
  sectionCards.appendChild(card_clone);
  sectionCards.style.opacity = "1";
});

const modal = document.querySelector(".page");
const cards = [...document.querySelectorAll(".cards .card")];
 
cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      ".dow"
    )
    
    .href = `ebooks/${card.getAttribute("id")}`;
    modal.classList.add("active")
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close_page").addEventListener("click", () => {
   modal.classList.remove("active");
   modal.querySelector(".dow").href = ``;
  document.querySelector("body").style.overflow = "initial";
});
















//fixando header
window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("header").style.position = "fixed"
  } else {
    document.querySelector("header").style.position = ""
  }  
};

card.remove();


//campode de pesquiar com filtro
document.querySelector("option").addEventListener("click", () => {
  const comboCidades = document.querySelector("select");
console.log("O texto é: " + comboCidades.options[comboCidades.selectedIndex].text);
} );

/*
const filtro = document.getElementById('filtro-nome');
const tabela = document.querySelector(".pai")
filtro.onkeyup = function() {
    const nomeFiltro = filtro.value;
    for (const i = 1; i < tabela.length; i++) {
        const conteudoCelula = tabela.innerText;
        const corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
        tabela.rows[i].style.display = corresponde ? '' : 'none';
    }
};

*/
const filtro = document.getElementById('filtro-nome');
const tabelamae = document.querySelectorAll(".titulo")

filtro.onkeyup = function() {
  const nomefiltro = filtro.value.toLowerCase();
  for (var i = 0; i < tabelamae.length; ++i) {
//  const conteudoCelula = tabela[i].textContent;

  const tabela = tabelamae[i].textContent.toLowerCase();
  const corresponde = tabela.indexOf(nomefiltro) >= 0;

  //tabela[i].style.display = corresponde ? '' : 'none';
  if(corresponde === false){
    const pai = tabelamae[i].parentNode;
    pai.style.display = "none";
  } else if(corresponde === true){
    const pai = tabelamae[i].parentNode;
    pai.style.display = "";
  }
   if(nomefiltro.value == ""){
      document.querySelectorAll(".cad").style.display = ""
    }

 


console.log("tabela/nome");
 console.log(tabela);
 console.log("corresponde");
 console.log(corresponde);
 console.log("filho");
 console.log(tabelamae[i]);
 console.log("pai");
 console.log(tabelamae[i].parentNode);
 
}
}
