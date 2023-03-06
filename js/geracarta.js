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
      gettraduzida(data.set,data.collector_number,n);
  
      }
      
      )
  
}
function gettraduzida(s,m,n){
  let urlpt = urlbase+s+'/'+m+'/pt';  
  alert(urlpt);
  const sorteio = fetch(`${urlpt}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('o'+n).src=data.image_uris.png;
      document.getElementById('c'+n).src=data.image_uris.small;
  
      }
      
      )
  
}

 function getcartneo(url,i){
  const sorte = fetch(`${url}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('o'+i).src=data.image_uris.png;
      document.getElementById('c'+i).src=data.image_uris.small;
  
      }
      
      )
 } 



botaoiniciar.addEventListener('click', () => {
  for (i = 1; i < 8; i++) {
    var moeda = parseInt(Math.random() * 2)
    var land = 283+ parseInt(Math.random() * 11)
    var nx = parseInt(Math.random() * 294)+1;
    if (moeda > 0) {
      nx = land;
  
   }
    let urlneo = urlbase+'neo/'+nx+'/pt';
    getcartneo(urlneo,i);

  }
  

  })






