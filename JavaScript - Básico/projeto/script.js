
var area = document.getElementById('area')

function entrar(){
    var nome = prompt('digite o seu nome')

    if (nome === '' || nome === null) {
        alert('ops, algo deu errado :/')
        area.innerHTML = 'clique no botão para acessar...'
    } else {
        area.innerHTML = 'bem-vindo, ' + nome + ' '

        let botaoSair = document.createElement('button')
        botaoSair.innerText = 'sair da conta'
        botaoSair.onclick = sair
        area.appendChild(botaoSair)
    }
}

function sair() {
    alert('até mais!')
    area.innerHTML = 'você saiu!'
}

function mediaAluno(nota1, nota2) {
    var media = (nota1 + nota2) / 2

    if (media >= 7) {
        console.log('aluno aprovado com a média: ' + media)
    } else if (media < 7) {
     console.log('aluno reprovado com a média: ' + media)
    }
}

function aluno(nome, curso) {
    var mensangem = 'seja bem-vindo ' + nome + ' ao curso de ' + curso
    console.log(mensangem)
}