/* MANIPULAR DATAS EM JAVASCRIPT */

// COMANDO BASE PARA PEGAR A DATA
let data = new Date();
console.log(data);
//document.getElementById('data').innerHTML = data;

//PEGA O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
console.log(ano);
//document.getElementById('data').innerHTML = ano;

//PEGAR O MÊS ATUAL - DE 0 ATE 11 SENDO 0 JANEIRO E 11 DESEMBRO
let mes = data.getMonth();
console.log(mes);
//document.getElementById('data').innerHTML = mes;

//MOSTRA O MÊS NO FORMATO ESCRITO
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEcrito = mesesDoAno[data.getMonth()];
console.log(mesEcrito);
//document.getElementById('data').innerHTML = mesEcrito;

//PEGAR DIA DO MÊS - 1 ATÉ 31
let diaMes = data.getDate();
console.log(diaMes);
//document.getElementById('data').innerHTML = diaMes;

//PEGA O DIA DA SEMANA - 0 ate 6
let diaSemana = data.getDay();
console.log(diaSemana);
//document.getElementById('data').innerHTML = diaSemana;

const semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let semanaEscrito = semana[data.getDay()];
//document.getElementById('data').innerHTML = semanaEscrito;

//PEGAR A HORA - DE 0 até 23
let hora = data.getHours();
console.log(hora);
//document.getElementById('data').innerHTML = hora;

//PEGAR OS MINUTOS - DE 0 ATÉ 59
let minutos = data.getMinutes();
console.log(minutos);
//document.getElementById('data').innerHTML = minutos;


//PEGAR SEGUNDOS - DE 0 ATE 59
let segundos = data.getSeconds();
console.log(segundos);
//document.getElementById('data').innerHTML = segundos;


//PEGAR O MILISEGUNDOS - DE 0 ATÉ 999
let miliSegundos = data.getMilliseconds();
console.log(miliSegundos);
//document.getElementById('data').innerHTML = miliSegundos;


//PEGAR A DATA NO PADRAO BRASILEIRO - DIA / MES / ANO
let dataBR = data.toLocaleString('pt-BR',{dateStyle: 'short'});
console.log(dataBR);

document.getElementById('data').innerHTML = (`A data exata é -> <strong>${dataBR}</strong>`);

let dataBR1 = data.toLocaleString('pt-BR',{timeStyle: 'short'});
console.log(dataBR1);

document.getElementById('data1').innerHTML = (`A hora exata é -> <strong>${dataBR1}</strong>`);

//PEGAR OS VALORES SEPARADOS

d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) {return x < 10 ? '0' + x : '' + x;};

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;

document.getElementById('data2').innerHTML = (`A data Padrão brasileiro é <strong>${dataPadraoBR}</strong>`);

// COMPARAR DATAS - MAIOR OU MENOR. EX: VENCIMENTOS.
var hoje = new Date();
var vencimento = new Date(2025, 1, 27);

    if(hoje > vencimento){
        console.log("Sua conta está expirado!");
        document.getElementById('data3').innerHTML = ("Sua conta <strong>está expirado!</strong>");
    }else{
        console.log("Ainda não expirou, tudo certo!");
        document.getElementById('data3').innerHTML = ("Ainda <strong>não expirou</strong>, tudo certo!");
    }


// DIFERENÇA ENTRE DUAS DATAS EM DIAS.
var dataInicial = new Date();
var dataFinal = new Date(2025, 12, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(diferencaDias);
document.getElementById('data4').innerHTML = (`Os dias faltantes é <strong>${diferencaDias} dias</strong>`);
