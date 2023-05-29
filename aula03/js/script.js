let a, b, c; 
a=20; 
b=23; 
c=54; // Neste caso temos 4 declarações, o que se param elas é o ponto e virgula (;)

document.write(a - b + c);

// let pessoa = "Rafael" ; JavaScript não verifica o espaço no codigo. então tanto faz na declaração. (ignora)
let pessoa="Rafael"; 

document.write('<br><br>' + pessoa);

document.getElementById("texto").innerHTML = 
    "Fazendo quebra de linha no código <strong>JS</strong>"; // Correto é não quebra a linha, mas se caso for necessário. Sempre fazer a quebra em um operador. (ex: sinal de = e jogar a apresentação na linha de baixo)

// Declaração em bloco, podemos usar uma function para determina esse bloco

function  minhaFuncao(){
    document.write(5 + 5);
    document.write(5 + 5);
    document.write(5 + 5);
    document.write(5 + 5);        
} // Quando declaramos a funcion temos as chaves aonde iremos passar o comando com linhas de código para fazer o processo que esta determinado para esse bloco.



