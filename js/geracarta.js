/* esta rotina deve gerar randomicamente 07 cartas de forma aleatoria e colocar na mão do jogador
 */

/*
https://api.scryfall.com/cards/dom/2/pt
*/
const urlbase = "https://api.scryfall.com/cards/"
const urlapirandomica = "https://api.scryfall.com/cards/random";

// let searchPokemon = 1;
// let mtg=386616;
function getcard(url,n) {
 const sorteio = fetch(`${url}`)
    .then(response => response.json())
    .then(data => {
      
      document.getElementById('o'+n).src=data.image_uris.png;
      document.getElementById('c'+n).src=data.image_uris.art_crop;
      
      
      }
      )
  
}



botaoiniciar.addEventListener('click', () => {

for (i = 1; i=7; i++) {
  console.log(i);
  getcard(urlapirandomica,i);
}

  })





