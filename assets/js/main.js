/*L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

//PRIMO PASSO - Creo tre livelli differenti (in HTML, usando option) che al click cambiano il numero delle caselle.

//SECONDO PASSO - Inizio a creare una sezione per le mie funzioni e una per i vari livelli.


//FUNZIONI
let elementCell, elementCells, numeriAcaso;

function creare_celle(params) {
    for (i = 0; i < params; i++) {
        elementCell = document.createElement('div')
        elementCell.classList.add('cella_figlio')
        numeriAcaso = genera_numeri_random(1, params)
        elementCell.append(numeriAcaso)
        elementCells = document.getElementById('cells')
        elementCells.append(elementCell)

    }
}

function genera_numeri_random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



//LIVELLO - facile
const livelloFacile = creare_celle(100)




//LIVELLO - medio

//LIVELLO - difficile