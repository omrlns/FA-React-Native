// desconstruindo um objeto
let pessoa = {
    nome: 'Marlon',
    sobrenome: 'Silva',
    empresa: 'DVA Esquadrias',
    cargo: 'Assistente Administrativo'
}

// console.log(pessoa) // mostra todas as propriedades do objeto
// console.log(pessoa.nome) // mostra apenas o nome
// console.log(pessoa.sobrenome) // mostra apenas o sobrenome
// console.log(pessoa.empresa) // mostra apenas a empresa
// console.log(pessoa.cargo) // mostra o cargo

// criando uma constante com as propriedades de um objeto
const { nome, sobrenome, empresa, cargo } = pessoa
console.log(nome)
console.log(sobrenome)
console.log(empresa)
console.log(cargo)

// se a variável já exisitir, é possível "renomear"
// isso só vai se aplicar externamente, ou seja, o nome da propriedade do objeto se mantém
// let nome = 'João'
const { nome: nomePessoa } = pessoa
console.log(nomePessoa)

// descontruindo uma array
let nomes = ['Marlon', 'Fernanda', 'Gustavo']
console.log(nomes[0]) //mostra o primeiro item da lista, "Marlon"

let { 0: marlon, 1: fernanda } = nomes
console.log(marlon)
console.log(fernanda)

let [primeiroNome, segundoNome, terceiroNome] = nomes
console.log(primeiroNome)
console.log(segundoNome)
console.log(terceiroNome)