"use strict";


/**
 
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
 

<div class="grid">
        <div class="box">
          <span>1</span>
        </div>
      </div>


      width: calc(100% / 10);
    height: calc(100% / 10);

*/

const buttonHTML = document.getElementById('btn-play');


function play() {
    console.log('Start the game!')
    let numBox;
    const containerGrid = document.getElementById('container-grid')
    containerGrid.innerHTML = '';
    const levelHTML = document.getElementById('level');
    const level = levelHTML.value;
    const numBomb = 16;
    const bombs = [];



    switch (level) {
        case 'easy':
        default:
            numBox = 100;
            break;
        case 'normal':
            numBox = 81;
            break;
        case 'hard':
            numBox = 49

    }

    while (bombs.length < numBomb) {
        const bomb = randomNumber(1, numBox);
        if (!bombs.includes(bomb)) {
            bombs.push(bomb);
        }
    }
    console.log(bombs)

    // function that generate the boxs
    function generateBox(num) {
        const box = document.createElement('div')
        box.className = "box";
        box.style.width = `calc(100% / ${Math.sqrt(numBox)})`;
        box.style.height = `calc(100% / ${Math.sqrt(numBox)})`;
        box.innerHTML = `
        <span>${num}</span>
        `
        box.addEventListener('click', function () {
            if (bombs.includes(num)) {
                box.classList.add('red')
                box.innerHTML = `
                <i class="fa-solid fa-bomb h-80 v-80"></i>
                `
            }
            else {
                box.classList.add('cyan')
            }
        }
        )

        return box;
    }

    // function that generate the grid
    function generateGrid() {

        const grid = document.createElement('div');
        grid.className = "grid";
        for (let i = 1; i <= numBox; i++) {
            const box = generateBox(i);
            grid.appendChild(box);
        }

        containerGrid.appendChild(grid);
    }

    generateGrid();

}

buttonHTML.addEventListener('click', play)