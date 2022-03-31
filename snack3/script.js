const lista_nomi_grandeGatsby = ["Gordon", "Silvio", "Jack", "Bud", "Francesco"];

const lista_cognomi_grandeGatsby = ["Rossi", "Del Prete", "Ronaldo", "Messi", "Buffet"];

let lista_nomi_cognomi = [];

let j = 0;

while(j < 10) {
    const nome = lista_nomi_grandeGatsby[Math.floor(Math.random() * 5)]
    const cognome = lista_cognomi_grandeGatsby[Math.floor(Math.random() * 5)]
    lista_nomi_cognomi.push(`${nome} ${cognome}`)
    
    
    j++
}

console.log(lista_nomi_cognomi);