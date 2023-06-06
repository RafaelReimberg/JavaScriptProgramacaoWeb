/* if e else */

var interruptor = "on";
    if (interruptor=="on"){
        document.getElementById("luz").innerHTML = ('A lampada está <strong>ligada!</strong>');
    } else { 
        document.getElementById("luz").innerHTML = ('A lampada está <strong>desligada!</strong>');
    }

//-------------------------------------------------------------------------------------------------

var hora = new Date().getHours();
    if(hora < 12){
        document.getElementById("hora").innerHTML = (`A hora é <strong>${hora}</strong>, Bom dia!`);
    }else if(hora < 18){
        document.getElementById("hora").innerHTML = (`A hora é <strong>${hora}</strong>, Boa tarde!`);
    }else{
        document.getElementById("hora").innerHTML = (`A hora é <strong>${hora}</strong>, Boa noite!`);
    }

//-------------------------------------------------------------------------------------------------

function verificar(){
    let nome = document.getElementById("nome").value;

    if (nome == "" || nome == null){
        let p = document.getElementById("texto");
        p.innerHTML = "O campo não pode ser vazio !";
        p.style.color = "white";
        p.style.backgroundColor = "black";
    }else{
        let p = document.getElementById("texto");
        p.innerHTML = "O Preenchimento corretamente !";
        p.style.color = "white";
        p.style.backgroundColor = "black";
    }
}