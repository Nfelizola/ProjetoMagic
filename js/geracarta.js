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
      document.getElementById('c'+n).src=data.image_uris.small;
      document.getElementById('o'+n).src=data.image_uris.png;
      }
      
      )
  
}

botaoiniciar.addEventListener('click', () => {

  let x = parseInt(Math.random() * 3);
  alert (x);

  for (i = x+1; i < 8; i++) {
    getcard(urlapirandomica,i);

  }
  

  })






