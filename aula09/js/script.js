/* OBJETOS 

Objetos são basicamente variáveis com muitos valores dentro.

Exemplo:

const carro = { marca: "ford", modelo: "ka", ano: 2005}

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um Método é uma função colocadas dentro de uma propriedade.
*/

const carro = {
    marca: "honda", 
    modelo: "fit", 
    ano: 2007, 
    placa: "DWM-4345",
    buzina: function() {alert('Biiiiiii')},
    completo: function(){
        return "A marca é "+this.marca+" e o modelo é:"+this.modelo;
    }
};

console.log(carro.completo());
