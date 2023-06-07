/* CLASSES EM JAVASCRIPT

Em 2015 foi introduzido no JavaScript as Classes. As classes são um conceito antigo em programação e várias linguagens utilizam elas. Mas no JavaScript isso é relativamente novo, por isso mesmo programaores experientes não sabem muito bem utilizar.

Basicamente, as classes são como "fábricas" para criar objetos.
Pode se dizer que são "funções especiais" para criação de objetos.

Assim como uma fábrica da vida real precisa das máquinas para construir os objetos, as Classes no JavaScript usam um método chamado constructor() para fabricar os objetos.

*/

class Carro{ // nome da class sempre definir com a primeira letra Maiuscula.
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.marca + " " + this.modelo + " " + this.ano + " buzinouu: Biiiiii";
    }
}

const fit = new Carro("Honda", "Fit", 2007);
const civic = new Carro("Honda", "Civic",  2010);
    console.log(civic.buzina());
    document.getElementById('car').innerHTML = (`O Carro é <strong>${civic.buzina()}</strong>`);


    // 9:46