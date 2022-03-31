const primo_array = ["calcio", "tennis", "bacsketball", "ping pong", "pallavolo"];

const secondo_array = ["medico", "web delevoper"];


console.log("Array inziale con 2 elementi");
console.log(secondo_array);

let i = 0;

while(primo_array.length !== secondo_array.length){

    const elementi = ["designer", "postino", "dentista", "calciatore", "chimico"]

    secondo_array.push(elementi[i])

    i++
}
console.log("Array finale con elementi aggiunti");
console.log(secondo_array);