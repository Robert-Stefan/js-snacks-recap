/*
    SNACK 1
    A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
    Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
*/

/*const nomi = ['pippo', 'PLUTO', 'Paperino'];

console.log(nomi);

const newFormat = nomi.map((element, index) => {
    return element.charAt(0).toUpperCase() + nomi[index].slice(1).toLowerCase()
});

console.log(newFormat);*/


/*
    SNACK 2
    Un oggetto rappresenta una finestra di un browser e contiene due campi: 
    un array di tab aperte
    un numero che indica l'indice della tab aperta nell'array:
    {
    "tab": ["Facebook", "GitHub", "Gmail"],
    "activeTab": 0
    }
    Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
    Nel caso la tab fosse attiva, deve attivare la successiva.
*/

/*const browser = {
    tab: ["Facebook", "GitHub", "Gmail"],
    activeTab: 0,
};

const filtered = browser.tab.filter((tab,index) => index == browser.activeTab + 1);


console.log(browser);
console.log(filtered);*/

/*
    SNACK 3  -> si potrebbe ottimizzare con una funzione separata per il capitalize
    A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
    Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
*/

/*const nomi = ['pippo', 'PLUTO', 'Paperino'];

console.log(nomi);

const newFormat = nomi.map((element, index) => `${element.charAt(0).toUpperCase()}${nomi[index].slice(1).toLowerCase()}`);

console.log(newFormat);*/