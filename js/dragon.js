let urd = "https://api.scryfall.com/cards/search?q=t:dragon";
var pdragons; 
var sdragons; 
const sorte = fetch(`${urd}`)
      .then(response => response.json())
      .then(data => {
        pdragons = data.data;
        pag2 = data.next_page;
        const sorte = fetch(`${pag2}`)
        .then(response => response.json())
        .then(data => {
            sdragons = data.data;
            td= pdragons.length+sdragons.length;
            console.log("Total de dragoes:"+ td);
            sorteio1= Math.floor((Math.random()*pdragons.length));
            sorteio2= Math.floor((Math.random()*sdragons.length));
            console.log("Sortedo de 1pagina "+pdragons[sorteio1].image_uris.large);
            console.log("Sorteado de 2pagina "+sdragons[sorteio2].image_uris.large);
            sorteiounico = Math.floor((Math.random()*td));
            if (sorteiounico>175) {
                sorteiounico = sorteiounico - 175;
                console.log("Dragão sorteado "+sdragons[sorteiounico].image_uris.art_crop);
                console.log("Dragão sorteado "+sdragons[sorteiounico].image_uris.large);
            } else {
                console.log("Dragão sorteado "+pdragons[sorteiounico].image_uris.art_crop);
                console.log("Dragão sorteado "+pdragons[sorteiounico].image_uris.large);
                
            } 
            }
        )
    })

    