/** SNACK */
/*
// Snack 1
Crea un array composto da 10 brand famosi (Sony, Gucci, Apple, Samsung, Dolce&Gabbana). 
- Partendo da questo array creare un nuovo array dove tutti i brand dovranno essere "normalizzati" (le lettere maiuscole saranno convertite in minuscolo quindi Gucci diventerà gucci) e aggiungere, sempre in questo contesto di "clonazione", una nuova proprietà denominata "foundationYear". Quest'ultima proprietà conterrà l'anno (mettete un valore voi, è necessario inserire valore reale) in cui l'azienda è stata fondata. 
*/

/*const brand = [
    {
        name: 'Gucci'
    },
    {
        name: 'Ford'
    },
    {
        name: 'Samsung'
    },
    {
        name: 'Nokia'
    },
    {
        name: 'Square Enix'
    },
    {
        name: 'Ubisoft'
    },
    {
        name:  'Sony'
    },
    {
        name: 'Mercedes'
    },
    {
        name: 'Fiat'
    },
    {
        name: 'D&G'
    }
];

const newArray = [];

//è più giusto con forEach - filter: posso filtrare e verificare condizioni
brand.forEach( (obj) => {
    newArray.push({
        name: obj.name.toLowerCase(),
        year: randomNum(1980, 2040),
    })
});

/*const minuscolo = brand.map( (minuscole) => {
    //return minuscole.name.toLowerCase();

    return {
        name: minuscole.name.toLowerCase(),
        Year: 
    }
});*/

/*console.log(newArray);

//FUNZIONI
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}*/


/*
// Snack 2
Crea un array composto da 10 automobili. 
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
- Dividi in 3 array separati. Inserire nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo e ultimo il resto delle auto. 
- Infine stampa separatamente i 3 array.
*/

const automobili = [
    {
        marca: "Fiat",
        modello: "Panda",
        alimentazione: "benzina",
    },
    {
        marca: "Lancia",
        modello: "Ypsilon",
        alimentazione: "diesel",
    },
    {
        marca: "Opel",
        modello: "Corsa",
        alimentazione: "benzina",
    },
    {
        marca: "Dacia",
        modello: "Sandero",
        alimentazione: "diesel",
    },
    {
        marca: "Citroen",
        modello: "C1",
        alimentazione: "gpl",
    },
    {
        marca: "Peugeot",
        modello: "108",
        alimentazione: "metano",
    },
    {
        marca: "Renault",
        modello: "Twingo",
        alimentazione: "elettrica",
    },
    {
        marca: "Kia",
        modello: "Picanto",
        alimentazione: "gpl",
    },
    {
        marca: "Toyota",
        modello: "Aygo",
        alimentazione: "diesel",
    },
    {
        marca: "Mahindra",
        modello: "Kuv",
        alimentazione: "benzina",
    }
]

const benzina = automobili.filter( (element) => {
    return element.alimentazione === "benzina";
});

const diesel = automobili.filter( (element) => {
    return element.alimentazione === "diesel";
});

const altro = automobili.filter( (element) => {
    return element.alimentazione !== "diesel" && element.alimentazione !== "benzina";
});

console.log(benzina);
console.log(diesel);
console.log(altro);