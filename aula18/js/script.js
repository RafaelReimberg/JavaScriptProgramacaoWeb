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

//14:11