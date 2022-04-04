/*L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

//SOLUZIONE 1 !!!!!!!!

//PRIMO PASSO - creare una funzione griglia
function getGrill(selector, n_celle, tag_name, class_name) {
    let elementCells = document.querySelector(selector)

    for (let i = 0; i < n_celle; i++) {
        let cellItem = document.createElement(tag_name);
        cellItem.classList.add(class_name)
        elementCells.append(cellItem)
    }
}

//SECONDO PASSO - Funzione che genera numeri casuali
function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//console.log(getRandomNumbers(1, 100));

//E... - Funzione che crea un N di numeri e mi ritorna un'arrey con i numeri casuali unici che ha creato
function getRandomNumberToCell() {
    const arreyRandomNumbers = [];
    //applico while loop per generare N numeri casuali unici
    while (arreyRandomNumbers.length !== 100) {
        const nRandom = getRandomNumbers(1, 100)
            //se non c'è il numero, lo aggiunge
        if (!arreyRandomNumbers.includes(nRandom)) {
            arreyRandomNumbers.push(nRandom)
        }
    }
    //console.log(arreyRandomNumbers.length);
    return arreyRandomNumbers;
}
//console.log(getRandomNumberToCell('100'));

//TERZO PASSO - Funzione che aggiunge una classe ai nodi della DOM 
function getColor(selector, class_name) {
    //seleziono tutte le celle
    const allCellItem = document.querySelectorAll(selector)
        //console.log(allCellItem);
    for (let i = 0; i < allCellItem.length; i++) {
        const singleCell = allCellItem[i];
        //console.log(singleCell);

        //appendo i singli numeri generati ai singooli nodi della DOM
        const singleNum = getRandomNumberToCell()
        singleCell.innerHTML += (singleNum[i])
        singleCell.addEventListener('click', function() {
            //console.log(this, i);
            this.classList.toggle(class_name)
        })
    }
}


// LIVELLO - Facile
document.getElementById('btn_play').addEventListener('click', generaGioco)

function generaGioco() {
    getGrill('.cella_padre', '100', 'div', 'cella_singola')
    getColor('.cella_singola', 'color')

}





//SOLUZIONE 2 !!!!!!!!

/*PRIMO PASSO - Creo tre livelli differenti (in HTML, usando option) che al click cambiano il numero delle caselle.

//SECONDO PASSO - Inizio a creare una sezione per le mie funzioni e una per i vari livelli.


//FUNZIONI
let elementCell, elementCells, numeriAcaso;

function creare_celle(params, rN) {
    for (i = 0; i < params; i++) {
        elementCell = document.createElement('div')
        elementCell.classList.add('cella_figlio')
        numeriAcaso = genera_numeri_random(1, rN)
        elementCell.append(numeriAcaso)
        elementCells = document.getElementById('cells')
        elementCells.append(elementCell)

    }
}

function genera_numeri_random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


//LIVELLO - facile
creare_celle('100', '100')



//LIVELLO - medio

//LIVELLO - difficile
*/

//PASSO - cambiare colore alle celle al click

//PASSO - genero numeri random da inserire nelle cell