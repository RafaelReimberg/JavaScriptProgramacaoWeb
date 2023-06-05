/* ARRAY

Os arrays JavaScript são usados para armazenar vário valores
em um única variavél. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá paras os itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controles, por ordem de posição dentro dele.

Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];

A lista = [0] (lista na posição 0) vai conter o valor "arroz".
A lista = [1] (lista na posição 1) vai conter o valor "feijão".

E assim por diante.

Primeira forma:

    const lista = ["arroz", "feijão", "macarrão", "leite"];

    const lista = [
        "arroz", 
        "feijão", 
        "macarrão", 
        "leite"
    ];

Segunda forma:

    const lista = [];
    lista[0] = "arroz";
    lista[1] = "feijão";
    lista[2] = "macarrão";
    lista[3] = "leite";

Terceira forma:

    const lista = new Array("arroz", "feijão", "macarrão", "leite");
*/
var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite";


                //0      //1         //2       //3
const lista = ["arroz", "feijão", "macarrão", "leite"];

document.getElementById("lista").innerHTML = (`Testando a arry com a posição -> <strong>${lista}</strong>`);
document.getElementById("lista1").innerHTML = (`Testando a arry com a posição -> <strong>${lista[0]}</strong>`);
alert(`Testando a arry com a posição -> ${lista[1]}`);
document.getElementById("lista2").innerHTML = (`Testando a arry com a posição -> <strong>${lista[2]}</strong>`);
document.getElementById("lista3").innerHTML = (`Testando a arry com a posição -> <strong>${lista[3]}</strong>`);


const agenda = ["rafael", "natalia", "gabriel", "luíza"];
agenda[1] = "encreca";

let agd = agenda[2];

alert(agd);

document.getElementById("agenda").innerHTML = (`Testando a agenda selecionada pela variavel let - > <strong>${agd}</strong>`);
document.getElementById("agenda2").innerHTML = (`Testando a agenda trocando o valor inicial para um novo valor (natalia) para - > <strong>${agenda[1]}</strong>`);

const pessoa = ["Rafael", "Reimberg", 36]; //array
const pessoa2 = {nome: "Rafael", sobrenome: "Reimberg", idade: 36}; //objeto

const sobreNome = "Marcelo";

pessoa.push("Brasileiro", "São Paulo", "SP"); // para incluir valores na array
pessoa[pessoa.length] = "Casado"; // outro metodo para incluir valores;
pessoa[7] = "Catolico"; // outra forma mais precisamos fazer quantos itens tem para passar uma nova posição dentro da array.

pessoa2.nome; // mostra apenas o item setado. ex: nome
pessoa[0]; // mostra a posição 0 a array
pessoa.length; // passa a quantidade de itens da array


document.getElementById("pessoa").innerHTML = (`Resultado do OBJETO pessoa2 -> <strong>${(pessoa2.nome)}</strong>`);
document.getElementById("pessoa2").innerHTML = (`Resultado da ARRAY pessoa -> <strong>${pessoa[1]}</strong>`);document.getElementById("pessoa3").innerHTML = (`Resultado da quantidade ARRAY pessoa -> <strong>${pessoa.length}</strong>`);
document.getElementById("pessoa4").innerHTML = (`Resultado o ultimo item da ARRAY pessoa -> <strong>${(pessoa[pessoa.length -1])}</strong>`);
document.getElementById("pessoa5").innerHTML = (`Resultado da ARRAY pessoa -> <strong>${pessoa}</strong>`);

document.getElementById("pessoa6").innerHTML = (`Mostrando se é uma Array ou não ex: true or false  -> <strong>${(Array.isArray(pessoa))}</strong>`);

document.getElementById("pessoa7").innerHTML = (`Mostrando se é uma Array ou não ex: true or false  -> <strong>${(Array.isArray(sobreNome))}</strong>`);