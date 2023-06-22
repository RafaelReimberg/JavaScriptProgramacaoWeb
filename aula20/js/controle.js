let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa(){
    // PEGAR O VALOR DIGITADO NO INPUT (DIGITE SUA TAREFA)
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NEM NULO E NEM INDEFINIDO( NO CASO NÃO TIVER INFORMAÇÃO NÃO FAZER AÇÃO ALGUMA)
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        
        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcaTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>                     
        </div>
        <div onclick="marcaTarefa(${contador})" class="item-nome">
             ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete-outline"></i> Deletar</button>
        </div>
    </div>`;
        //ADICIONAR NOVO ITEM NO MAIN (PAGINA HTML)
        main.innerHTML += novoItem;

        //ZERAR O CAMPO DO INPUT 
        input.value = "";
        input.focus();
    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcaTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if(classe == "item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);
    }else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

input.addEventListener("keyup", function(event){
    // SE TECLOU O ENTER QUE O CÓDIGO É O (13)
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})