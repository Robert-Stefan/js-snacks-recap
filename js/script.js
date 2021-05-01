/*
Snack 1
A:
Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
- Codice giocatore
Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- l'età deve essere compresa tra 18 e 40
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali (array di lettere) e 3 cifre casuali
Stampare poi Codice giocatore, Media punti e percentuale tiri da 3 punti.ù

B:
Creare un array di 10 giocatori di basket, con le regole sopra indicate
Dopo aver creato l'array, stampa codice giocatore e media punti per ogni giocatore.

C:
Creare un nuovo array con i giocatori che hanno una media di punti superiore a 25 e
la percentuale di successo per i tiri da 3 punti superiore all’50%.

*/

const giocatoreBasket = {
    eta : getRandomInt(18, 40),
    mediapunti: getRandomInt(0, 50),
    percentualesuccesso: getRandomInt(0, 100),
    codicegiocatore: lettere(3) + ' ' + randomNum(0, 100),
};

// B

const giocatori =  [];

for( let i = 0; i < 10; i++ ) {
    giocatori.push ({
        eta : getRandomInt(18, 40),
        mediapunti: getRandomInt(0, 50),
        percentualesuccesso: getRandomInt(0, 100),
        codicegiocatore: lettere(3) + ' ' + randomNum(0, 100),
    });
}

console.table(giocatori);

/*giocatori.forEach((element) => {
    console.log( `Codice giocatore: ${giocatoreBasket.codicegiocatore} | Media punti: ${giocatoreBasket.mediapunti}` );
});*/
/*console.log('Codice Giocatore: ' + (giocatoreBasket.codicegiocatore));
console.log('Media punti: ' + (giocatoreBasket.mediapunti));
console.log('La percentuale tiri da 3 punti : ' + (giocatoreBasket.percentualesuccesso) + '%');*/


// C  crea un array e ritorna tutto ciò
const bestPlayer = giocatori.filter( (element) => {
    return element.mediapunti > 25 && element.percentualesuccesso > 50;
});

console.table(bestPlayer);



//FUNZIONI
//Random 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Random lettere
function lettere(length) {
    const result           = [];
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}

// Random 3 numeri 
function randomNum(min, max) { 
    const n = []; 
    for(let i=0; i<3; i++) { 
    n.push(Math.floor(Math.random() * max) + min); 
    } 
    return n; 
} 

/* soluzione per codice giocatore*/
/*

function getPlayerCode() {
    const lettere = ['A', 'B', 'C', 'D', 'E', 'F'];

    let chars = '';
    let numbers = '';

    for (let i = 0; i < 3; i++) {
        chars += lettere[ randomNumber(0, lettere.length - 1) ];
        numbers += randomNumber(0, 9);
    }
    return chars + numbers;
}


${} = interpolazione
*/



/*
Snack
A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]


const numeri =  [1, 2, 3, 4, 5];

const potenze = numeri.map( (number) => {
    return number * number;
});

// forEach  
const potenze = [];
numeri.forEach((number) => {
    potenze.push(number * number);
});

console.log(numeri);
console.log(potenze);*/