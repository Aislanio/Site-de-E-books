# Site-de-E-books
Meu Primeiro site de E-books que eu to criando para melhora minha Responsividade e meu css e javascript 



# Fazendo um campo de pesquisa so com javascript puro
   Eu peguei como base o modelo de pesquisar com javascript a diferença que e para tabelas você pode ver um demo <a href="http://jsfiddle.net/utluiz/YBLu6/"> clique aqui</a>

   
 Então vamos la, Para isso vamo cria um input para pegar o nome do ebook,coloca assim no html :
 ```html
 <input type="text" placeholder="Buscar Ebooks" name="Buscar" id="filtro-nome">
 ```

No js vamo pegar o valor do inpunt, e dos nomes dos ebooks e tratar esse texto depois disso coloca tudo dentro de um onkeyup que é o evento que ocorre quando o usuário libera uma tecla:
```JavaScript
const filtro = document.getElementById("filtro-nome");

const tabelamae = document.querySelectorAll(".titulo");


filtro.onkeyup = function () {}
```
Agora vamo tratar o input tirando Acentuação e converter as maiúsculas para minúsculas :
```JavaScript
 const nomefiltro = filtro.value.toLowerCase().normalize("NFD")replace(/[\u0300-\u036f]/g, "");
```
Explicando o código: O método `toLowerCase()` retorna o valor da string original convertido para minúsculo, `toLowerCase()` não altera o valor da string original, O `.normalize("NFD")` ele tira todos os acentos da string so que ainda fica os acentos ai vem o `replace(/[\u0300-\u036f]/g, "")` que vai tirar esses acentos que esta na string devolvendo ela formatada.

Agora vamo escreve o codigo dentro de um for
```JavaScript
for (var i = 0; i < tabelamae.length; ++i){}
```

se você de console.log na tabelamae ira ver que e retornado uma nodelist então vamos pegar so o texto e formata ele como fizermos com o input :

```JavaScript
for (var i = 0; i < tabelamae.length; ++i) {
console.log(tabelamae);
const tabela = tabelamae[i].textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
console.log(tabela);
}
```
O console.log da tabelamae ira retorna isso so que com a quantidade de titulo que você tem :
```
NodeList(8)
0: h3.titulo
1: h3.titulo
2: h3.titulo
3: h3.titulo
4: h3.titulo
5: h3.titulo
6: h3.titulo
7: h3.titulo
length: 8
__proto__: NodeList
```
já a tabela ira retorna os nomes de todos os nomes em string :
```
javascript o guia definitiovo
Ebooks.js:139 
apostila matlab
Ebooks.js:139 
programacaoem java 
Ebooks.js:139 
introducao javascript
Ebooks.js:139 
algoritimos parte 1
Ebooks.js:139 
algoritmos e programacao
Ebooks.js:139 
apostila de php
Ebooks.js:139 
apostila de html,css e js
```
Explicando o código :  a tabelamae[i] esse parametro [i] que dizer que to pecorrendo a nodeList e por isso que eu coloque o for porque ele e um sistema de repetição que vai pegar todos os conteudos para um melhor compreensão você pode ler a <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/NodeList"> documentação</a> e uma Duvida com resposta no <a href="https://pt.stackoverflow.com/questions/168270/exibir-o-conte%C3%BAdo-de-object-nodelist"> stack overflow</a>.

Já que temos todos os nomes agora so falta pecorre esses nomes para isso vamos usar o indexOf recomendo você a ler <a href="https://www.devmedia.com.br/javascript-indexof-encontrando-a-posicao-de-um-caractere-ou-string/39422"> A documentação de JavaScript indexOf da DevMedia</a>, agora vamos fazer isso na pratica que vou explicando :

```JavaScript
const corresponde = tabela.indexOf(nomefiltro) >= 0;

```
O indexOf() encontrando a posição de um caractere ou string ou seja ela vai procura na string se tem essa palavra e nos parênteses colocamos o nomefiltro onde o indexOf ira procura pela string se tem aquela palavra ou caractere se nao tiver ele retorna -1 e depois colocamos um parametro que e >= 0 ou seja tem que ser maior ou igual a 0 é isso ums dos pontos chaves do codigo ele vai ja vai fazer uma verificação e ira retorna true ou false e isso e sensacional agora vamo da um console.log(corresponde) para ver a coisa acontecento:
```
No input eu coloque j agora vamos ver o console:

javascript o guia definitiovo
Ebooks.js:141 true
Ebooks.js:139 apostila matlab
Ebooks.js:141 false
Ebooks.js:139 programacaoem java 
Ebooks.js:141 true
Ebooks.js:139 introducao javascript
Ebooks.js:141 true
Ebooks.js:139 algoritimos parte 1
Ebooks.js:141 false
Ebooks.js:139 algoritmos e programacao
Ebooks.js:141 false
Ebooks.js:139 apostila de php
Ebooks.js:141 false
Ebooks.js:139 apostila de html,css e js
Ebooks.js:141 true
```
É algo sensacional agora para finalizar vamos fazer uma verificação se dar true ele ira dar display: ""; se der false ele vai pegar o pai e dar display:none;
```JavaScript
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
```
quando criamos a const pai estou criando o pai do elemto que é o titulo e para pegar o pai colocamos assim parentNode você pode notar também que eu to pecorendo a nodeList você também pode tar console.log para compreender.

no terceiro if eu faço uma verificação se no campo do inpunt esta vazio se for verdadeiro todos os ebooks irao ficar todos normais.

o código final fica assim :
```JavaScript
const filtro = document.getElementById("filtro-nome");
const tabelamae = document.querySelectorAll(".titulo");

filtro.onkeyup = function () {
  const nomefiltro = filtro.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  for (var i = 0; i < tabelamae.length; ++i) {
 
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
  };  
```
O meu código so fica diferente por causar que eu coloque o parametro de pesquisar por ebooks ou por categoria.

Então o seu campo de pesquisa esta pronto =).
