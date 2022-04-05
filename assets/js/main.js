/*L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

//PRIMO PASSO - creare una griglia - funzione.



function getGrill(selettore, n_celle, tag, tag_classe) {
    const cells = document.querySelector(selettore)
        //console.log(cells);
    for (let i = 1; i <= (n_celle); i++) {
        const cell = document.createElement(tag)
            //console.log(cell);
            //aggiungo la classe alle celle
        cell.classList.add(tag_classe)
            //console.log(cell);
        cells.append(cell(i))
            // console.log(cells)

    }
}

// LIVELLI DI GIOCO
//Livello facile
// document.getElementById('btn_play').addEventListener('click', generaGioco);

// function generaGioco(event) {
//     //Previene il comportamento della pagina (non refrescia)
//     event.preventDefault()
getGrill('cella_padre', 100, 'div', 'cella_singola')
    // }