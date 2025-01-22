//* Snack 1

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
        // Stampare a schermo la bici con peso minore.
        element = biciDaCorsa[i]
    }
}
console.log(element)


//* Snack2

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

// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
for (let i = 0; i < squadre.length; i++) {
    let element = squadre[i];

    element.puntiFatti = random(1, 50);
    element.falliSubiti = random(1, 20)
}
console.log(squadre);


//! ATTENZIONE questo metodo ELIMINA completamente da TUTTI gli oggetti(a causa del FOR su squadre[i]) "puntiFatti"
//! di conseguenza non ho piu bisogno di pusharli in un nuovo array, basta ri-stampare il vecchio array ripulito 
// const newArray = []; //? qui non serve davvero crearne uno nuovo

// for (let i = 0; i < squadre.length; i++) {
//     delete squadre[i].puntiFatti;
//     // newArray.push(squadre[i]);//?nemmeno questo serve davvero
// }
// console.log(squadre); //? newArray è === a squadre quindi posso non scriverlo


//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const newArray = [];
const newArray1 = [];
for (let i = 0; i < squadre.length; i++) {
    newArray1.push(squadre[i].nome, squadre[i].falliSubiti)
}
console.log(newArray1);

for (const x in squadre) {
    newArray.push(squadre[x].nome, squadre[x].falliSubiti);
}
console.log(newArray);

//* Snack 3 (Bonus)
// La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione compresa tra i due numeri (a e b).

// Array nomi
const nomi = ['Marco', 'Anna', 'Luca', 'Giulia', 'Andrea', 'Sara', 'Davide', 'Elena', 'Matteo', 'Beatrice'];

// Array frutti
const frutti = ['mela', 'pera', 'banana', 'arancia', 'uva', 'fragola', 'kiwi', 'ananas', 'ciliegia', 'pesca'];

// Array colori
const colori = ['rosso', 'verde', 'blu', 'giallo', 'nero', 'bianco', 'viola', 'arancione', 'marrone', 'rosa'];

// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
function trovaciNelMezzo(array, a, b) {

    let trovati = [];

    for (let i = 0; i < array.length; i++) {
        if (a < i && i < b) {
            trovati.push(array[i])
        }
    }
    return trovati;
}

console.log(trovaciNelMezzo(frutti, 2, 6), trovaciNelMezzo(colori, 3, 7), trovaciNelMezzo(nomi, 5, 8));

