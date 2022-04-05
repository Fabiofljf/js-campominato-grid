/*L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

//PRIMO PASSO - creare una griglia - funzione.




function getGrill(selettore, n_celle, tag, tag_classe1, tag_classe2) {
    //console.log(selettore, n_celle, tag, tag_classe1, tag_classe2)
    const cells = document.querySelector(selettore)
        //console.log(cells);

    //pulire area di gioco
    cells.innerHTML = ''

    for (let i = 1; i <= (n_celle); i++) {
        //console.log(n_celle);
        const cell = document.createElement(tag)
            //console.log(cell);
            //aggiungo la classe alle celle
        cell.classList.add(tag_classe1, tag_classe2)
            //console.log(cell)
        cells.append(cell)
            //console.log(cells)

    }
}

// LIVELLI DI GIOCO

//Livello facile

document.getElementById('btn_play').addEventListener('click', generaGioco_facile);

function generaGioco_facile(event) {
    //Previene il comportamento della pagina(non refrescia)
    event.preventDefault()

    //richiamo l'id di select
    const livelli = document.getElementById('livelli').value
    console.log(livelli)
    if (livelli === "facile") {
        getGrill('.cella_padre', 100, 'div', 'cella_singola', 'misura_lg')
    } else if (livelli === "medio") {
        getGrill('.cella_padre', 81, 'div', 'cella_singola', 'misura_md')
    } else {
        getGrill('.cella_padre', 49, 'div', 'cella_singola', 'misura_sm')
    }

}