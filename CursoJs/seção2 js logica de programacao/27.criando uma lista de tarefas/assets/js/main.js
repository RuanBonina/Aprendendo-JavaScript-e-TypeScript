const inputTarefa = document.querySelector('.input-tarefa'); // tarefas escritas
const btnTarefa = document.querySelector('.btn-tarefa'); // botão Cria-tarefa
const tarefas = document.querySelector('.tarefas'); // apagar e armazenar tarefas

function criaTarefa(textoInput) { // cria a tarefa com o texto do input
    const li = criaLi(); 
    li.innerText = textoInput; // escreve oq foi escrito no input no 'li'
    tarefas.appendChild(li);
    limpaInput();
    criaBtnApagar(li);
    salvaTarefas();
}

inputTarefa.addEventListener('keypress', function(e) { // criar tarefa com a tecla Enter
    if (e.keyCode === 13) { // identifica a tecla Enter
        if (!inputTarefa.value) return;  // Se não tem tarefa escrita no input, não adiciona tarefa
    criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {  // deixar o input limpo para ser digitado a próxima tarefa
    inputTarefa.value = '';
    inputTarefa.focus(); // após limpar, mantem o input selecionado
}

function criaLi() { // cria uma tag 'li'
    const li = document.createElement('li');
    return li;
}

function criaBtnApagar(li) { // cria o botão de apagar a tarefa
    li.innerText += ' '; // coloca um espaço entre o botão e a tarefa
    const btnApagar = document.createElement('button')
    btnApagar.innerText = 'Apagar'
    btnApagar.setAttribute('class', 'apagar'); // atribui uma classe para o botão apagar
    li.appendChild(btnApagar); // adiciona ele em 'li'
}

document.addEventListener('click', function(e) { // indentifica o click no document
    const el = e.target;
    
    if (el.classList.contains('apagar')) { // se for no botão com classe 'apagar'
        el.parentElement.remove(); // remove o pai do botão (o 'li')
        salvaTarefas(); // atualiza o JSON
    }
});

btnTarefa.addEventListener('click', function() {  // identifica o click no botão de tarefa
    if (!inputTarefa.value) return;  // Se não tem tarefa escrita no input, não criaTarefa
    criaTarefa(inputTarefa.value);  // Se tiver, criaTarefa
});


// salvar e buscar tarefas:

function salvaTarefas() { 
    const liTarefas = tarefas.querySelectorAll('li')
    const listaTarefas = [];
    
    for (let tarefa of liTarefas) {  // adiciona o valor de liTarefas para tarefa
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // remove os espaços em branco de ambos os lados de uma string
        listaTarefas.push(tarefaTexto); // adiciona a tarefa para um array armazenar
    }

    const tarefasJSON = JSON.stringify(listaTarefas); // converte o array em string
    localStorage.setItem('tarefas', tarefasJSON); // guarda tarefasJSON no LocalStorage
}

function adicionaTarefasSalvas() { // ao carregar a pagina adicina as tarefas já salvas
    const tarefas = localStorage.getItem('tarefas'); // busca no Localstorage
    const listaTarefas = JSON.parse(tarefas); // destranforma a atring em array
    
    for (let tarefa of listaTarefas) { // prepara função criaTarefa
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();
