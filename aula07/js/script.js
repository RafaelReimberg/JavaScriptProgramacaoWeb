/* Vamos enterder Operadores:
-> Os operadores JavaScript são usados para atribuir valores, comparar valores, executar operações aritméticas e muito mais.

São os sinais que usamos: + - * / = ++ -- += -= && || etc...

São separados em 6 "categorias":

1) Operadores Aritiméticos (matemáticos)
2) Operadores de Atribuição
3) Operadores de Sequência
4) Operadores de Comparação
5) Operadores Condicional (Ternário)
6) Operadores Lógicos


*/

var valor1, valor2, total;

valor1 = 54;
valor2 = 32;
total = valor1 + valor2; // estamos usando calculo matemático.  soma

document.getElementById("soma").innerHTML = ("A soma é " + total);

{
    var valor1, valor2, total;

    valor1 = 54;
    valor2 = 32;
    total = valor1 - valor2; // estamos usando calculo matemático.  subtração

    document.getElementById("subtracao").innerHTML = ("A subtração é " + total);
}

{
    var valor1, valor2, total;

    valor1 = 54;
    valor2 = 32;
    total = valor1 * valor2; // estamos usando calculo matemático.  multiplicação

    document.getElementById("multiplicacao").innerHTML = ("A multiplicação é " + total);
}

{
    var valor1, valor2, total;

    valor1 = 54;
    valor2 = 32;
    total = valor1 / valor2; // estamos usando calculo matemático.  divisão

    document.getElementById("divisao").innerHTML = ("A divisão é " + total);
}

{
    var valor1, valor2, total;

    valor1 = 54;
    valor2 = 32;
    total = ++valor1; // estamos usando calculo matemático.  sinais ++ é incremento de mais 1.

    document.getElementById("incremento").innerHTML = (`O valor do incremento é mais 1 no valor total da váriavel ${total}`);
}

{
    var valor1, valor2, total;

    valor1 = 54;
    valor2 = 32;
    total = --valor1; // estamos usando calculo matemático.  sinais -- é decremento de menos 1.

    document.getElementById("incremento1").innerHTML = (`O valor do incremento é mais 1 no valor total da váriavel ${total}`);
}

{
var valor1, valor2, total;

valor1 = 54;
valor2 = 32;
valor1 += valor2; // estamos usando calculo matemático.  soma

document.getElementById("atriSoma").innerHTML = ("Atribuição de valor na variavel valor1 += valor2 " + valor1);
}

{
    var valor1, valor2, total;
    
    valor1 = 54;
    valor2 = 32;
    valor1 += valor2; // estamos usando calculo matemático.  Atribuição de valores ex: da simulação de valor1 = valor1 + valor2. SOMA
    
    document.getElementById("atriSoma").innerHTML = ("Atribuição de valor na variavel valor1 += valor2 " + valor1);
}

{
    var valor1, valor2, total;
    
    valor1 = 54;
    valor2 = 32;
    valor1 -= valor2; // estamos usando calculo matemático.  Atribuição de valores ex: da simulação de valor1 = valor1 - valor2. SUBTRAÇÃO
    
    document.getElementById("atriSubtracao").innerHTML = ("Atribuição de valor na variavel valor1 -= valor2 " + valor1);
}

{
    var valor1, valor2, total;
    
    valor1 = 54;
    valor2 = 32;
    valor1 *= valor2; // estamos usando calculo matemático.  Atribuição de valores ex: da simulação de valor1 = valor1 * valor2. SUBTRAÇÃO
    
    document.getElementById("atriMutiplicacao").innerHTML = ("Atribuição de valor na variavel valor1 *= valor2 " + valor1);
}

{
    var valor1, valor2, total;
    
    valor1 = 54;
    valor2 = 32;
    valor1 /= valor2; // estamos usando calculo matemático.  Atribuição de valores ex: da simulação de valor1 = valor1 / valor2. SUBTRAÇÃO
    
    document.getElementById("atriDivisao").innerHTML = ("Atribuição de valor na variavel valor1 /= valor2 " + valor1);
}

{
    var valor1, valor2, total;
    
    valor1 = "Rafael";
    valor2 = "Reimberg";
    total = valor1 + valor2; // o sinal de + aqui ele se forma um operador de sequencia e não um sinal matemático.
    
    document.getElementById("atriSequen").innerHTML = (`Prazer meu nome é ${valor1} ${valor2}`);
}

{
    var valor1, valor2, total;
    
    valor1 = 8;
    valor2 = 10;
    total = (valor1 == valor2); // Comparação. retorna true (verdadeiro) false (falso)
    
    document.getElementById("comp").innerHTML = ("O valor da comparação é " + total);
}

// video parado em 16:21