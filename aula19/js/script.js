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
    idade: 36 
}

let texto = JSON.stringify(pessoa);

document.getElementById('json').innerHTML = texto;

let obj = JSON.parse(texto);

console.log(obj);

// 04:52