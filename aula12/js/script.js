// -- Variaveis
const agenda = ["rafael", "natalia", "gabriel", "luiza"]; // array 

const lista1 = ["Arroz", "feijão", "leite", "macarrão"]; // array 
const lista2 = ["Suco", "refrigerante", "carne"]; // array 
const lista3 = ["Salgadinho", "Amendoin"]; // array 

const jogadores = [
    "Biro Biro",
    "Ribamar",
    "Pelé",
    "Maradona",
    "Neymar",
    "Messi",
    "Cristiano Ronaldo",
    "Vampeta",
    "Rafael"
]; // array

const numeros = [40, 100, 1, 5, 25, 10];
const numerosDecresente = [40, 100, 1, 5, 25, 10];

//-------------------------------------------------------------------------------------------------
// -- Metodos -- 
agenda.push("qualquer coisa da minha array"); // adiciona itens e valores na array.
agenda.pop(); // aqui remove o ultimo item da minha array.
agenda.shift(); /* ação que remove o primeiro iten da array. com isso a sequencia de indice serão alterados quando removemos o primeiro item com shift. 
ex:
const agenda = [
    "rafael",   <- 0 -> quando usamos o shift, remove essa posição e altera as ordens.
    "natalia",  <- 1 esse item passa a ser 0
    "gabriel",  <- 2 esse item passa a ser 1
    "luiza"     <-3 esse item passa a ser 2
];
*/
agenda.unshift("reimbergs"); // esse metodo adiciona um item na primeira posição.
delete agenda[3]; // quando usamos o delete, deleta-se o item setados mas não muda a ordem das posições.
agenda.splice(1, 2, "Item adicionado 1", "Item adicionado 2"); // neste metodo ele remove o item e ordem da direta para esqueda.

const superLista = lista1.concat(lista2, lista3); //  neste caso fazer uma concatenação na lista 1 com a lista 2. da para fazer com quantas lista ou array você tiver.

const craques = jogadores.slice(2, 7); // este metodo fatia a array na posição que você quiser. porém a ultima posição setado não é exibida. 

const jogOrdem = jogadores.sort(); // fazer ordenação alfabética

numeros.sort(function (a, b) { return a - b }); // fazer ordenação numérica. 
numerosDecresente.sort(function (a, b) { return b - a });

const maior20 = numeros.filter(filtragem);
//-------------------------------------------------------------------------------------------------
//---- Apresentação
document.getElementById("agenda").innerHTML = (`Apresenta todos os itens <strong>${agenda}</strong>`);
document.getElementById("agenda2").innerHTML = (`Apresentan todos os intes com - de separação <strong>${agenda.join(" - ")}</strong>`); // join ele é um separador das arrays 
document.getElementById("agenda3").innerHTML = (`Apresentan todos os intes com de espaço <strong>${agenda.join(" ")}</strong>`);
document.getElementById("agenda4").innerHTML = (`Apresenta o ultimo item da array <strong>${(agenda[agenda.length - 1])}</strong>`);
document.getElementById("agenda5").innerHTML = (`Valor deletado -> <strong>${agenda[3]}</strong>`);

document.getElementById("agenda6").innerHTML = (`A lista completa é -> <strong>${superLista.join(", ")}</strong>`);

document.getElementById("agenda7").innerHTML = (`Os craques são -> <strong>${craques.join(" ")}</strong>`);

document.getElementById("agenda8").innerHTML = (`Os craques em ordem alfabética -> <strong>${jogOrdem.join(",<br>")}</strong>`);

document.getElementById("agenda9").innerHTML = (`Os números na sequência -> <strong>${numeros.join(", ")}</strong>`);

document.getElementById("agenda10").innerHTML = (`Os números na sequência decresente -> <strong>${numerosDecresente.join(", ")}</strong>`);

document.getElementById("agenda11").innerHTML = (`O maior número é -> <strong>${MaiorNumero(numeros)}</strong>`);

document.getElementById("agenda12").innerHTML = (`O menor número é -> <strong>${MenorNumero(numeros)}</strong>`);

document.getElementById("agenda12").innerHTML = (`Os números maior que 20 é -> <strong>${maior20.join(" - ")}</strong>`);
//-------------------------------------------------------------------------------------------------
// --- funções (function)
    function MaiorNumero(array){
        return Math.max.apply(null, array);
    }

    function MenorNumero(array){
        return Math.min.apply(null, array);
    }

    function filtragem(value, index, array){
        return value > 20;
        //function numOrdem(a, b){
          //  return a -b
        //}
    }