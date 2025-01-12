var nome = prompt('qual o seu nome?')
var sobrenome = prompt('qual seu sobrenome?')

console.log('olá ' + nome + ' ' + sobrenome)

document.write('<h1> bem vindo ' + nome + ' </h1>')

if (nome == 'steve') {
    document.write('<img src="https://sujeitoprogramador.com/steve.png" alt="foto do steve" />')
}

else {
    alert('você não é o steve!')
}