/* Switch

É usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação. Caso a condição não seja compatível não será executada e o valor padrão será acionado.

*/

function verificaCor(){
    let cor = document.getElementById("cor").value;

    cor = cor.toLowerCase(); // função para mostrar todas a entradas em minusculas.

    switch (cor) {
        case "azul":
            // o que acontece
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            // o que acontece
            document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            // o que acontece
            document.body.style.backgroundColor = "yellow"; 
            break;
        default:
            // o que acontece
            document.getElementById("texto"). innerHTML = (`Nenhuma cor disponível para: <strong>${cor}</strong>`);
    }
}

/*function verificaCor(){
    let cor = document.getElementById("cor").value;

    let x = 0;

    switch (x) {
        case 0:
            // o que acontece
            document.getElementById("texto"). innerHTML = "A variavel é zero"; 
            break;
        
        default:
            // o que acontece
            document.getElementById("texto"). innerHTML = "Não foi encontrado";     
    }
}*/

function diaDaSemana(){
    var dia = new Date().getDay();

    console.log(dia);

    switch (dia) {
        case 0:
            document.getElementById("texto").innerHTML = "Hoje é <strong>Domingo.</strong>"
            break;
        case 1:
            document.getElementById("texto").innerHTML = "Hoje é <strong>Segunda-Feira.</strong>"
            break;
        case 2:
            document.getElementById("texto").innerHTML = "Hoje é <strong>Terça-Feira.</strong>"
            break;
        case 3:
            document.getElementById("texto").innerHTML = "Hoje é <strong>Quarta-Feira.</strong>"
            break;
        case 4:
            document.getElementById("texto").innerHTML = "Hoje é <strong>Quinta-Feira.</strong>"
            break;
        case 5:
            document.getElementById("texto").innerHTML = "Hoje é <strong>Sexta-Feira.</strong>"
            break;
        case 6:
            document.getElementById("texto").innerHTML = "Hoje é <strong>Sábado.</strong>"
            break;
        default:
            // o que acontece
            document.getElementById("texto").innerHTML = "Não sei que dia é ...";
    }
}
