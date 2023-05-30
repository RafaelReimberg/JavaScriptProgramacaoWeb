/* Vamos entender váriaveis
Váriaveis são "recipientes" onde podemos armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor.

No JavaScript temos 3 palavras-chaves para declarar váriaveis:
let, var, const

/* Definições das váriaveis let, var e const 

let - não permiti a redeclação da variavel. 

exemplo:

    let pessoa = "Rafael";
    let pessoa = "Natalia"
    Irá apresentar a seguinte mensagem, que a variavel let já tinha sido declara para a pessoa "Rafael";

resumo: uma vez que o let é declaro, não pode ser redefinida.

var - Permiti a declaração em qualquer bloco que esteja no codigo, e sempre será mudado quando declarado. diferente do let.

exemplo:

    var x = 44; // aqui é 10

{
    var x = 5; // aqui é 2
}

document.getElementById("soma2").innerHTML = x; // aqui também vai ser é 2 

const - Nesta váriavel nunca pode mudar em qualquer bloco, muito diferente no let onde se defini por bloco e você consegue fazer a mudança. 

exemplo:
    const r = "Rafael";

{
    const r = "Natalia";
}

document.getElementById("nome2").innerHTML = r; aqui sempre será mantido a primeira declaração da const r = "Rafael";

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

var x = 44; // aqui é 10

{
    var x = 5; // aqui é 2
}

// aqui também vai ser é 2 
document.getElementById("soma2").innerHTML = x;

let a = 45; // fora de um bloco. na verdade dentro do escopo que ele esta trabalhando. uma maneira mais fácil de interpretar o codigo.

document.getElementById("let").innerHTML = a;
document.getElementById("res").innerHTML = "Resultado de um bloco com declaração let valor <strong>45</strong>";

{ // dentro de um bloco, neste caso da para usar let de forma segura sem ter problema com declarações incorretas. 
    let a = 11;
    document.getElementById("let2").innerHTML = a;
    document.getElementById("res2").innerHTML = "Resultado de um bloco com declaração let valor <strong>11</strong>";
}

const r = "Rafael";

document.getElementById("nome2").innerHTML = r;

{
    const r = "Natalia";
    document.getElementById("nome3").innerHTML = "Aqui fica o outro bloco declarado com a informação de const r = 'Natalia'; ";
}



