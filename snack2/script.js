const chiedo_numero = Number(prompt("Inserisci un numero"));

if (chiedo_numero % 2 === 0) {
    console.log(`Hai inserito un numero pari e lo stampo ${chiedo_numero}`);
}else if(chiedo_numero % 2 === 1){
    console.log(`Hai inserito un numero dispari stampo quello dopo ${chiedo_numero + 1}`);
}