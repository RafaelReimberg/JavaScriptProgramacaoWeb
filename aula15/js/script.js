/* Laço de Repetição For

Laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes.
*/

/*for (let r = 0; r < 1001; r++){
    document.getElementById("texto").innerHTML += r + ", ";
}*/

var year = new Date().getFullYear();

for (let ano = year; ano >= 1900; ano--){
    document.getElementById("ano").innerHTML += "<option value='" + ano + "'>" + ano + "</option>";
}

const carros = ["Gol", "Fusca", "Brasília", "Del Rey", "Chevette"];
var tamanho = carros.length;

for(let car = 0; car < tamanho; car++){
    document.getElementById("carros").innerHTML += carros[car] + " - ";
}