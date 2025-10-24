/*  FUNÇÕES
Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.

É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo código.

Uma função JavaScript é executada quando "algo" a invoca (chama-a).
*/

// FUNÇÃO DE SOMA
function soma(valor1, valor2){
    return valor1 + valor2;
}

document.getElementById("funcao").innerHTML = (`O resultado da function é ${soma(15, 15)} // soma de valores solicitado`);

//--------------------------------------------------------------------------------------------------

// FUNÇÃO DE SOMA
function soma(valor1, valor2){
    return valor1 + valor2;
}

var total = soma(15 , 41);

document.getElementById("funcao1").innerHTML = (`O resultado da function é  ${total} // soma de valores fixo na variavel`);

//--------------------------------------------------------------------------------------------------

// FUNÇÃO DE COTAÇÃO DO DÓLAR
function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar
}

document.getElementById("funcao2").innerHTML = (`O resultado da function é ${realParaDolar(10, 5.08)} // cotação de dolar *`);

//--------------------------------------------------------------------------------------------------

// FUNÇÃO DE COTAÇÃO DO DÓLAR
function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar
}

var valorReal = 7.89;
var cotacao = 5.08;

var total = realParaDolar(valorReal, cotacao);

document.getElementById("funcao3").innerHTML = ("O valor em real é R$: " + valorReal + " o valor em dólar U$ é: " + total);

//--------------------------------------------------------------------------------------------------

function alertaHello() {
    alert("Testando a function no alert");
}

alertaHello();

//--------------------------------------------------------------------------------------------------

function paraCelsius(valorFahrenheit){
    return (5/9) * (valorFahrenheit - 32);
}

var graus = paraCelsius(77);

document.getElementById("funcao4").innerHTML = ("A temperatura é de " + graus + " graus celsius");

//--------------------------------------------------------------------------------------------------

function minhaFuncao(){
    var x = 2;
    let r = 3;
} // Neste caso as variaveis só funciona dentro da function.