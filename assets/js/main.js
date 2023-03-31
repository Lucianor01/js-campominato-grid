/* 
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

function creaElementoHtml(tagHtml, classi, text) {

    let elemento = document.createElement(tagHtml)
    elemento.className = classi;
    elemento.innerText = text;

    return elemento;

}

const griglia = document.querySelector('.griglia')

const button = document.querySelector('button')

button.addEventListener('click', function () {
    this.classList.add('button')
    let difficoltà = document.querySelector('#difficoltà').value;
    griglia.innerHTML = '';

    if (difficoltà === 'easy') {
        for (let i = 1; i <= 100; i++) {
            const divbox = creaElementoHtml("div", "box", i);
            divbox.addEventListener('click', function () {
                this.classList.toggle('bg_light_green');
            });
            griglia.append(divbox);
        }
    } else if (difficoltà === 'medium') {
        for (let i = 1; i <= 81; i++) {
            const divbox = creaElementoHtml("div", "box_medium", i);
            divbox.addEventListener('click', function () {
                this.classList.toggle('bg_light_green');
            });
            griglia.append(divbox);
        }
    } else if (difficoltà === 'hard') {
        for (let i = 1; i <= 49; i++) {
            const divbox = creaElementoHtml('div', 'box_hard', i);
            divbox.addEventListener('click', function () {
                this.classList.toggle('bg_light_green');
            });
            griglia.append(divbox);
        }
    }

})

/* divbox.addEventListener('click', function () {

    this.classList.toggle('bg_light_green')
}) */
