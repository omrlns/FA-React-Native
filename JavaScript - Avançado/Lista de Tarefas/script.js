let listElement = document.querySelector('#app ul')
let inputElement = document.querySelector('#app input')
let buttonElement = document.querySelector('#app button')

let tarefas = JSON.parse(localStorage.getItem('@listaDeTarefas')) || []

function adicionarTarefas() {
    if (inputElement.value === '') {
        alert('DIGITE ALGUMA TAREFA')
        return false
    } else {
        let novaTarefa = inputElement.value
        tarefas.push(novaTarefa)
        inputElement.value = ''
        renderTarefas()
        salvarDados()
    }
}

function renderTarefas() {
    listElement.innerHTML = ''
    tarefas.map((toDo) => {
        let liElement = document.createElement('li')
        let tarefaText = document.createTextNode(toDo)

        let linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')

        let linkText = document.createTextNode(' excluir')
        linkElement.appendChild(linkText)

        let posicao = tarefas.indexOf(toDo)

        linkElement.setAttribute('onclick', `deletarTarefa(${posicao})`)

        liElement.appendChild(tarefaText)
        liElement.appendChild(linkElement)
        listElement.appendChild(liElement)

    })
}

function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1)
    renderTarefas()
    salvarDados()
}

function salvarDados() {
    localStorage.setItem('@listaDeTarefas', JSON.stringify(tarefas))
}

buttonElement.onclick = adicionarTarefas

renderTarefas()