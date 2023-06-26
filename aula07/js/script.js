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
    
    document.getElementById("atriSequen").innerHTML = (`Prazer meu nome é ${valor1} ${valor2}` + " sinal de + mais valores das variaveis for string.");
}

{
    var valor1, valor2, total;
    
    valor1 = 8;
    valor2 = 10;
    total = (valor1 == valor2); // Comparação. retorna true (verdadeiro) false (falso)
    
    document.getElementById("comp").innerHTML = ("O valor da comparação é " + total + " ==");
}

{
    var valor1, valor2, total;
    
    valor1 = 10;
    valor2 = "10"; // ele tambem faz se caso a variavel for string tambem
    total = (valor1 == valor2); // Comparação. retorna true (verdadeiro) false (falso)
    
    document.getElementById("comp2").innerHTML = ("O valor da comparação é " + total + " ==");
}

{
    var valor1, valor2, total;
    
    valor1 = 10; // number
    valor2 = "10"; // string
    total = (valor1 === valor2); // Comparação. retorna true (verdadeiro) false (falso). Neste, caso mostra se o valor é igual e também se o tipo da variavel se é igual.
    
    document.getElementById("comp3").innerHTML = ("O valor da comparação é " + total + " ==="); 
}

{
    var valor1, valor2, total;
    
    valor1 = 10; // number
    valor2 = 10; // number
    total = (valor1 === valor2); // Comparação. retorna true (verdadeiro) false (falso). Neste, caso mostra se o valor é igual e também se o tipo da variavel se é igual.
    
    document.getElementById("comp4").innerHTML = ("O valor da comparação é " + total + " ==="); 
}

{
    var valor1, valor2, total;
    
    valor1 = 10; // number
    valor2 = 10; // number
    total = (valor1 != valor2); // Comparação. se o valor é diferente e não igual.
    
    document.getElementById("comp5").innerHTML = ("O valor da comparação é " + total + " !="); 
}

{
    var valor1, valor2, total;
    
    valor1 = 10; // number
    valor2 = 15; // number
    total = (valor1 != valor2); // Comparação. se o valor é diferente e não igual.
    
    document.getElementById("comp6").innerHTML = ("O valor da comparação é " + total + " !="); 
}

{
    var valor1, valor2, total;
    
    valor1 = 10; // number
    valor2 = "15"; // string
    total = (valor1 !== valor2); // Comparação. se o valor é diferente e não igual.
    
    document.getElementById("comp7").innerHTML = ("O valor da comparação é " + total + " !=="); 
}

{
    var valor1, valor2, total;
    
    valor1 = 10; // number
    valor2 = 10; // number
    total = (valor1 !== valor2); // Comparação. se o valor é diferente e não igual.
    
    document.getElementById("comp8").innerHTML = ("O valor da comparação é " + total + " !=="); 
}

{
    var valor1, valor2, total;
    
    valor1 = 10; // number
    valor2 = 10; // number
    total = (valor1 < 4); // Comparação. se o valor é diferente e não igual.
    
    document.getElementById("comp9").innerHTML = ("O valor da comparação é " + total + " < 4"); 
}

{
    var valor1, valor2, total;
    
    valor1 = 10; // number
    valor2 = 10; // number
    total = (valor1 < 11); // Comparação. se o valor é diferente e não igual.
    
    document.getElementById("comp10").innerHTML = ("O valor da comparação é " + total + " < 11"); 
}

{
    var valor1, valor2, total;
    
    valor1 = 10; // number
    valor2 = 10; // number
    total = (valor1 <= 11); // Comparação. se o valor é diferente e não igual.
    
    document.getElementById("comp11").innerHTML = ("O valor da comparação é " + total + " <= 11"); 
}

{
    var valor1, valor2, total;
    
    valor1 = 10; // number
    valor2 = 10; // number
    total = (valor1 >= 11); // Comparação. se o valor é diferente e não igual.
    
    document.getElementById("comp12").innerHTML = ("O valor da comparação é " + total + " >= 11"); 
}

{
    var idade, eleitor;
    idade = 36;
    eleitor = (idade < 18) ? "Não eleitor!": "Sim, eleitor! ";

    document.getElementById("ter").innerHTML = ("O valor ternario " + eleitor + ' eleitor= (idade<18) ? "Não eleitor": "Sim, eleitor" e a idade dele é ' + idade); 
}

{
    var idade, eleitor;
    idade = 17;
    eleitor = (idade < 18) ? "Não eleitor!": "Sim, eleitor! ";

    document.getElementById("ter1").innerHTML = ("O valor ternario " + eleitor + ' eleitor= (idade<18) ? "Não eleitor": "Sim, eleitor" e a idade dele é ' + idade); 
}

{
    var idade, eleitor, resultado;
    idade = 28;
    eleitor = (idade < 18) ? "Não eleitor!": "Sim, eleitor! ";

    resultado = (idade > 60 && idade < 70); // true se não false

    document.getElementById("logico").innerHTML = ("O resultado da idade é " + resultado + " e a idade é " + idade);
}    

{
    var idade, eleitor, resultado;
    idade = 63;
    eleitor = (idade < 18) ? "Não eleitor!": "Sim, eleitor! ";

    resultado = (idade > 60 && idade < 70); // true se não false

    document.getElementById("logico1").innerHTML = ("O resultado da idade é " + resultado + " e a idade é " + idade);
} 

{
    var idade, eleitor, resultado;
    idade = 66;
    eleitor = (idade < 18) ? "Não eleitor!": "Sim, eleitor! ";

    resultado = (idade === 62 || idade === 73); // true se não false

    document.getElementById("logico2").innerHTML = ("O resultado da idade é " + resultado + " e a idade é " + idade);
} 

{
    var idade, eleitor, resultado;
    idade = 62;
    eleitor = (idade < 18) ? "Não eleitor!": "Sim, eleitor! ";

    resultado = (idade === 62 || idade === 73); // true se não false

    document.getElementById("logico3").innerHTML = ("O resultado da idade é " + resultado + " e a idade é " + idade);
} 

{
    var idade, eleitor, resultado;
    idade = 68;
    eleitor = (idade < 18) ? "Não eleitor!": "Sim, eleitor! ";

    resultado = !(idade === 65); // true se não false

    document.getElementById("logico4").innerHTML = ("O resultado da idade é " + resultado + " e a idade é " + idade);
} 

{
    var idade, eleitor, resultado;
    idade = 65;
    eleitor = (idade < 18) ? "Não eleitor!": "Sim, eleitor! ";

    resultado = !(idade === 65); // true se não false

    document.getElementById("logico5").innerHTML = ("O resultado da idade é " + resultado + " e a idade é " + idade);
} 