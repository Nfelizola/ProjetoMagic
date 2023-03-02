/* esta rotina deve gerar randomicamente 07 cartas de forma aleatoria e colocar na mão do jogador
 */



const urlapirandomica = "https://api.scryfall.com/cards/random";

// let searchPokemon = 1;
// let mtg=386616;
function getcard(url,n) {
 const sorteio = fetch(`${url}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('o'+n).src=data.image_uris.png;
      document.getElementById('c'+n).src=data.image_uris.small;
      }
      )
  
}



botaoiniciar.addEventListener('click', () => {
var qtdland= parseInt(Math.random()*4);
alert("Lands: " + qtdland);
for (i = qtdland+1; i <8; i++) {
  console.log(i);
  getcard(urlapirandomica,i);
}

  })






