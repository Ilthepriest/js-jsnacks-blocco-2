
// let somma = 0;

// for (let i = 0; i < 5; i++) {
    
//     const richiedo_numeri = Number(prompt("Inserisci numero"));

//     somma += richiedo_numeri;
// }

// console.log(somma);


let index = 0;  //contatore
let somma = 0;

while(index < 5){  //condizione

    const richiedo_numeri = Number(prompt("Inserisci numero"));

    somma += richiedo_numeri;

    index++  // incremento
}

console.log(`La somma dei numeri è ${somma}`);