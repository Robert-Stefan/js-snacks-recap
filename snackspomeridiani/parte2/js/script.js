//SNACK 1
// Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe.
// Crea un nuovo array con la lista dei mammiferi.
// [
// { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
// { nome: 'cane', 'famiglia: 'canidi', classe: 'mammiferi' },
// { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]

/*const animali = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        class: 'mammiferi'
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        class: 'mammiferi'
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        class: 'uccelli'
    },

];

const mammiferi = animali.filter( (element) => {
    return element.class === "mammiferi";
});

console.log(mammiferi);*/



// SNACK 2
// Crea un array di 8 oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un'età.
// Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.


/*const persone = [
    {
        nome: 'Laura',
        cognome: 'Iaroni',
        eta: 18
    },
    {
        nome: 'Marco',
        cognome: 'Piurelli',
        eta: 45
    },
    {
        nome: 'Tizio',
        cognome: 'Caio',
        eta: 30
    },
    {
        nome: 'Paperino',
        cognome: 'Pluto',
        eta: 10
    },
    {
        nome: 'Marco',
        cognome: 'Tizzoni',
        eta: 12
    },
    {
        nome: 'Isabella',
        cognome: 'Veroni',
        eta: 14
    },
    {
        nome: 'Lorenzo',
        cognome: 'Casini',
        eta: 26
    },
    {
        nome: 'Giacomo',
        cognome: 'Ronzi',
        eta: 22
    }
]

//const guidatori = [];

//persone.forEach((e) => {
    //if(e.eta >= 18) {
    //    guidatori.push({
    //        frase: `${e.nome} ${e.cognome} può guidare`,
    //    })
    //} else {
    //    guidatori.push({
    //        frase: `${e.nome} ${e.cognome} non può guidare`
    //    })
    //}

   
//});

const guidatori = persone.map ( e =>  `${e.nome} ${e.cognome}${e.eta >= 18 ? '' : ' non'} può guidare`);

console.log(guidatori);*/


// SNACK 3
// Crea un array di 8 oggetti che rappresenti i pc in vendita nel nostro negozio: ogni pc ha un nome, una marca, un booleano 
// che indica se esce con Windows come OS di fabbrica (hasWindows: true oppure hasWindows: false) ed il prezzo
// Creiamo un nuovo array che indichi i pc che hanno Windows e di questi andiamo a tirar fuori la differenza tra prezzo originale e scontato.
 

const computer = [
    {
        nome: '255',
        marca: 'HP',
        hasWindows: true,
        price: 500,
        discountPrice: 300,
    },
    {
        nome: 'Essential',
        marca: 'Lenovo',
        hasWindows: false,
        price: 800,
        discountPrice: 500,
    },
    {
        nome: 'Lapbook',
        marca: 'Chuwi',
        hasWindows: true,
        price: 900,
        discountPrice: 700,
    },
    {
        nome: '245',
        marca: 'HP',
        hasWindows: false,
        price: 1000,
        discountPrice: 950,
    },
    {
        nome: 'V15',
        marca: 'Lenovo',
        hasWindows: false,
        price: 350,
        discountPrice: 250,
    },
    {
        nome: 'Ultrabook',
        marca: 'HP',
        hasWindows: true,
        price: 150,
        discountPrice: 100,
    },
    {
        nome: 'CoreBook',
        marca: 'Microtech',
        hasWindows: true,
        price: 750,
        discountPrice: 550,
    },
    {
        nome: 'X509JA',
        marca: 'Asus',
        hasWindows: false,
        price: 460,
        discountPrice: 245,
    }
]


const windows = computer.filter( element => element.hasWindows).map(element => {
    return {
        ...element,
        diffPrice: (element.price - element.discountPrice)
    }
})

console.table(windows);