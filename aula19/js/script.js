/** JSON **
 
JSON significa JavaScript Object Notation que traduzido pro português fica algo como notação de objeto JavaScript.

Explicando de um modo simples JSON é basicamente uma forma de converter um objeto
em texto e o contrário também, um texto em um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por praticamente toda linguagem de programação.

Para trabalha com JSON e no JavaScript usamos dois métodos:

JSON.parse() -> Converte texto no padrão JSON em objetos
JSON.stringify() -> Converte objetos em texto padrão JSON

*/

// OBJETO PESSOA
const pessoa = {
    nome: "Rafael",
    sobrenome: "Reimberg",
    idade: 36,
    valores: ["1.6", "1.4", "1.0"] 
}

//CONVERTEU PARA TEXTO JSON
let texto = JSON.stringify(pessoa);

//COLOCOU O TEXTO NO NOSSO HTML
document.getElementById('json').innerHTML = texto;

//CONVERTEMOS TEXTO EM OBJETO
let obj = JSON.parse(texto);

//PEGAMOS UM VALOR DESTE OBJETO
console.log(obj.valores[1]);
document.getElementById('json1').innerHTML = (`<strong>${obj.nome} ${obj.sobrenome}</strong> e sua idade é <strong>${obj.idade}</strong>`);
// 04:52

function buscarCEP(){
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function(){
        document.getElementById('json3').innerHTML = this.responseText;
    }
}

//const ajax = new XMLHttpRequest();
//ajax.open('GET', 'https://viacep.com.br/ws/04843120/json/');
//ajax.send();

//ajax.onload = function(){
    //document.getElementById('json2').innerHTML = this.responseText;
    //let obj = JSON.parse(this.responseText);
    //alert(obj.ddd);
//}


// 15:47