/**
 * VOTI STUDENTI
 */

const app = new Vue ( {
    el: '#app',
    data: {
        studenti: [
        {
            nome: "Renato",
            cognome: "Battaglia",
            matricola: 10002350,
            voti: {
                italiano: [9, 8, 6],
                matematica: [3.5, 7, 5.5],
                inglese: [7.5, 5, 5.5],
                informatica: [8.5, 6.5, 5],
            }
        },
        {
            nome: "Domenico",
            cognome: "De Angelis",
            matricola: 10002351,
            voti: {
                italiano: [9, 8, 6],
                matematica: [3.5, 7, 5.5],
                inglese: [7.5, 5, 5.5],
                informatica: [8.5, 6.5, 5],
            }
        },
        {
            nome: "Sabina",
            cognome: "Mariani",
            matricola: 10002352,
            voti: {
                italiano: [9, 8, 6],
                matematica: [3.5, 7, 5.5],
                inglese: [7.5, 5, 5.5],
                informatica: [8.5, 6.5, 5],
            }
        },
        {
            nome: "Edoardo",
            cognome: "Martini",
            matricola: 10002353,
            voti: {
                italiano: [9, 8, 6],
                matematica: [3.5, 7, 5.5],
                inglese: [7.5, 5, 5.5],
                informatica: [8.5, 6.5, 5],
            }
        },
        {
            nome: "Clarissa",
            cognome: "Milani",
            matricola: 10002354,
            voti: {
                italiano: [9, 8, 6],
                matematica: [3.5, 7, 5.5],
                inglese: [7.5, 5, 5.5],
                informatica: [8.5, 6.5, 5],
            }
        },
        {
            nome: "Ornella",
            cognome: "Monti",
            matricola: 10002355,
            voti: {
                italiano: [9, 8, 6],
                matematica: [3.5, 7, 5.5],
                inglese: [7.5, 5, 5.5],
                informatica: [8.5, 6.5, 5],
            }
        },
        {
            nome: "Luigi",
            cognome: "Pagano",
            matricola: 10002356,
            voti: {
                italiano: [9, 8, 6],
                matematica: [3.5, 7, 5.5],
                inglese: [7.5, 5, 5.5],
                informatica: [8.5, 6.5, 5],
            }
        },
        {
            nome: "Alessio",
            cognome: "Rossetti",
            matricola: 10002357,
            voti: {
                italiano: [9, 8, 6],
                matematica: [3.5, 7, 5.5],
                inglese: [7.5, 5, 5.5],
                informatica: [8.5, 6.5, 5],
            }
        },
        {
            nome: "Flaviana",
            cognome: "Russo",
            matricola: 10002358,
            voti: {
                italiano: [2, 2, 2],
                matematica: [2, 2.5, 3.5],
                inglese: [5.5, 3, 4.5],
                informatica: [4.5, 5.5, 3],
            }
        },
        {
            nome: "Romeo",
            cognome: "Serra",
            matricola: 10002359,
            voti: {
                italiano: [9, 8, 6],
                matematica: [3.5, 7, 5.5],
                inglese: [7.5, 5, 5.5],
                informatica: [8.5, 6.5, 5],
            }
        },
    ]
},
    methods: {
        /**
         * Calcolo media su elementi array
         * 
         * @param {array} voti collezione di voti 
         */
        calcMediaVoti(voti) {
            // console.log(voti);

            // Check
            if (voti.length === 0) {
                return  'n.a.';
            }

            // Calc media
            let somma = 0;
            voti.forEach( (voto) => {
                somma += voto;
            });

            const media = somma / voti.length;
            return media.toFixed(1);
        },

        /**
         * Calcolo media totale studente
         * 
         * @param {number} indiceStudente indice di posizione studente nella collezione 
         */
        calcMediaTot(indiceStudente) {

            const votiTotali = [];
            const votiStudente = this.studenti[indiceStudente].voti;

            for (let materia in votiStudente) {
                votiTotali.push(...votiStudente[materia]);
            }

            // console.log(votiTotali);
            const media = this.calcMediaVoti(votiTotali);
            return media;
        },
        
        /**
         * Controllo promozione studente
         * 
         * @param {number} indiceStudente indice di posizione studente nella collezione 
         */
        controlloPromozione(indiceStudente) {
            // a 
            //if ( Math.round( this.calcMediaTot(indiceStudente) ) >= 6 ) {
            //    return true;
            //} else {
            //    return false;
            //}

            // b

            return Math.round( this.calcMediaTot(indiceStudente) ) >= 6;
        }
    }    
});

