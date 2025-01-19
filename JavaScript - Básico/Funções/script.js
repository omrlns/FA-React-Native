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