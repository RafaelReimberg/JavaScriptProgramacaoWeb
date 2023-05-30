/* Vamos entender váriaveis
Váriaveis são "recipientes" onde podemos armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor.

No JavaScript temos 3 palavras-chaves para declarar váriaveis:

-> let 
-> var
-> const
*/

var pote = "Bombom";
// alert(pote);

// DECLARAÇÕES DA VÁRIAVEIS

//var n1, n2, n3;

// ATRIBUIÇÃO DOS VALORES 

//n1 = 23;
//n2 = 34;
//n3 = n1 + n2;
//alert(n3);

var nome, sobrenome, nomeCompleto, idade, soma;

nome = "Rafael";
sobrenome = "Reimberg";
idade = 36;
nomeCompleto = nome +" "+ sobrenome;

pessoa = idade + 10 + " " + nome;
pessoa2 = nome + " " + idade + 10;

soma = idade + 10; // maneira correta de fazer calculo sem coloca variavel que contenha letras    

document.getElementById("nome").innerHTML = nomeCompleto;
document.getElementById("idade").innerHTML = pessoa;
document.getElementById("idade2").innerHTML = pessoa2;
document.getElementById("soma").innerHTML = soma;

/* Definições das váriaveis let, var e const 

let - não permiti a redeclação da variavel. exemplo:

let pessoa = "Rafael";
let pessoa = "Natalia"
Irá apresentar a seguinte mensagem, que a variavel let já tinha sido declara para a pessoa "Rafael";

resumo: uma vez que o let é declaro, não pode ser redefinida.

video para no 18:11

var - 

const -*/