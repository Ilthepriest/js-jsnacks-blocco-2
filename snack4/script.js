//Creo la lista di numeri interi attraverso il for

const lista_numeri_interi = [];

for (let i = 1; i <= 10; i++) {
    lista_numeri_interi.push(i);
}

console.log(lista_numeri_interi);


//Somma dei dispari dentro array interi

let somma = 0;

for (let i = 0; i < 10; i++) {
    
    somma += lista_numeri_interi[i++]

    console.log(i);
}   

console.log(`Risultato somma numeri dispari del array ${somma}`);

//Somma dei numeri in posizione dispari

let Somma = 0;

for (let i = 1; i < 10; i++) {
    
    Somma += lista_numeri_interi[i++]

    console.log(i);
}   

console.log(`Risultato somma numeri in posizione dispari nel array ${Somma}`);