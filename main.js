//* Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const biciDaCorsa = [
    { nome: "Pinarello Dogma", peso: 7.2 },
    { nome: "Specialized Tarmac", peso: 7.5 },
    { nome: "Trek Madone SLR", peso: 7.1 },
    { nome: "Cannondale SuperSix EVO", peso: 7.3 }
];

let element = biciDaCorsa[0].peso;

//ciclo
for (let i = 1; i < biciDaCorsa.length; i++) {

    if (element > biciDaCorsa[i].peso) {
        element = biciDaCorsa[i]
    }
}
console.log(element)


//* Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 }
];

//* randomizer
function random(min, max) {
    return Math.floor(Math.random() * max) + min;
};

for (let i = 0; i < squadre.length; i++) {
    let element = squadre[i];

    element.puntiFatti = random(1, 50);
    element.falliSubiti = random(1, 20)
}
console.log(squadre);


//! attenzione questo metodo ELIMINA completamente da TUTTI gli oggetti i "puntiFatti"
//! di conseguenza non ho piu bisogno di pusharli in un nuovo array, basta ri-stampare il vecchio array ripulito 

// const newArray = []; //? qui non serve davvero crearne uno nuovo

for (let i = 0; i < squadre.length; i++) {
    delete squadre[i].puntiFatti;
    // newArray.push(squadre[i]);//?nemmeno questo serve davvero
}
console.log(newArray, squadre); //? newArray è === a squadre quindi posso non scriverlo




















//* Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array ( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione compresa tra i due numeri (a e b).