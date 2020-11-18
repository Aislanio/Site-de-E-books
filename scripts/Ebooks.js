
const pai = document.querySelector(".pai")
/*seçoes*/
const sectionCards = document.querySelector(".cards");
const sectionCards1 = document.querySelector(".mark");


/*script*/ 
const card = document.querySelector(".card");

const b = 1;
const videos = [
  {
    img:"lalala",
    title: "1",
    autor: "Aislanio",
    resumo: "Gyanfkoanfo"
  },
  {
    img:"lalala",
    title: "1",
    autor: "Aislanio",
    resumo: "Gyanfkoanfo"
  },
  {
    img:"lalala",
    title: "1",
    autor: "Aislanio",
    resumo: "Gyanfkoanfo"
  },
  {
    img:"lalala",
    title: "1",
    autor: "Aislanio",
    resumo: "Gyanfkoanfo"
  },
  {
    img:"lalala",
    title: "1",
    autor: "Aislanio",
    resumo: "Gyanfkoanfo"
  },
   {
    img:"lalala",
    title: "1",
    autor: "Aislanio",
    resumo: "Gyanfkoanfo"
  },
  {
    img:"lalala",
    title: "1",
    autor: "Aislanio",
    resumo: "Gyanfkoanfo"
  },
  {
    img:"lalala",
    title: "1",
    autor: "Aislanio",
    resumo: "Gyanfkoanfo"
  },
  {
    img:"lalala",
    title: "1",
    autor: "Aislanio",
    resumo: "Gyanfkoanfo"
  },
  {
    img:"lalala",
    title: "1",
    autor: "Aislanio",
    resumo: "Gyanfkoanfo"
  },
];
videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.querySelector("img").src = video.img;
  cardClone.querySelector(".titulo").innerHTML = video.title;
  cardClone.querySelector(".resum").innerHTML =video.autor;
  sectionCards.appendChild(cardClone);
  sectionCards.style.opacity = "1";
});


const mark = [
  {
    img:"lalala",
    title: "2",
    autor: "22",
    resumo: "Gyanfkoanfo"
  },
  {
    img:"lalala",
    title: "2",
    autor: "22",
    resumo: "Gyanfkoanfo"
  },
  {
    img:"lalala",
    title: "1",
    autor: "Aislanio",
    resumo: "Gyanfkoanfo"
  },
   {
    img:"lalala",
    title: "1",
    autor: "Aislanio",
    resumo: "Gyanfkoanfo"
  },
  {
    img:"lalala",
    title: "1",
    autor: "Aislanio",
    resumo: "Gyanfkoanfo"
  },
  {
    img:"lalala",
    title: "1",
    autor: "Aislanio",
    resumo: "Gyanfkoanfo"
  },
  {
    img:"lalala",
    title: "1",
    autor: "Aislanio",
    resumo: "Gyanfkoanfo"
  },
  {
    img:"lalala",
    title: "1",
    autor: "Aislanio",
    resumo: "Gyanfkoanfo"
  },
];
mark.map(vide => {
  const cardClon = card.cloneNode(true);
  card.remove();
  cardClon.querySelector("img").src = vide.img;
  cardClon.querySelector(".titulo").innerHTML = vide.title;
  cardClon.querySelector(".resum").innerHTML =vide.autor;
  sectionCards1.appendChild(cardClon);
  
});




window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header").style.position = "fixed"
  } else {
    document.querySelector("header").style.position = ""
  }  
}