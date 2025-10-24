/* OBJETOS 

Objetos são basicamente variáveis com muitos valores dentro.

Exemplo:

const carro = { marca: "ford", modelo: "ka", ano: 2005}

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um Método é uma função colocadas dentro de uma propriedade.
*/

const carro = {
    marca: "Honda", 
    modelo: "HR-v", 
    ano: 2016, 
    placa: "KQX3C10",
    buzina: function() {alert('Biiiiiii')},
    completo: function(){
        return "A marca é um "+this.marca+", e o modelo é "+this.modelo+ ", e o ano é "+this.ano+ ", sua placa é "+this.placa;
    }
};

console.log(carro.completo());
document.getElementById('carro') . innerHTML = carro.completo();
