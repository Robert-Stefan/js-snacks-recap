/*
    SNACK 1
    A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
    Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
*/

const nomi = ['pippo', 'PLUTO', 'Paperino'];

console.log(nomi);

const newFormat = nomi.map((element, index) => {
    return element.charAt(0).toUpperCase() + nomi[index].slice(1).toLowerCase()
});

console.log(newFormat);