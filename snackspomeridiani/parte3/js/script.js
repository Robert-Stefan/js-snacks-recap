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


/*
    SNACK 4 -> VUE 
    Partendo da un array di oggetti con i contatti di una rubrica con nome, cognome, numero, attivo (true,false)
    Andiamo a stampare nome cognome e numero dentro una lista.
    Fare in modo poi che i contatti non attivi (attivo: false) siano stampati di colore rosso mentre gli altri normalmente di nero. Cliccando sul numero della persona fate in modo che appaia in console il cognome della persona di cui è stato cliccato il numero
*/

const app = new Vue({
    el: "#app",
    data: {
        contatti: [
            {
                nome: "Silvio",
                cognome: "Berlusconi",
                telefono: numeriRandom(1111111111, 9999999999),
                attivo: true,
            },
            {
                nome: "Francesco",
                cognome: "Turco",
                telefono: numeriRandom(1111111111, 9999999999),
                attivo: false,
            },
            {
                nome: "Laura",
                cognome: "Benedetta",
                telefono: numeriRandom(1111111111, 9999999999),
                attivo: false,
            },
            {
                nome: "Pippo",
                cognome: "Mauri",
                telefono: numeriRandom(1111111111, 9999999999),
                attivo: true,
            },
            {
                nome: "Pluto",
                cognome: "Nonsifa",
                telefono: numeriRandom(1111111111, 9999999999),
                attivo: true,
            },
        ]
    },
    methods: {
        lastName(index) {
            console.log(this.contatti[index].cognome);
        }
    }
})




// FUNCTION

function numeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}