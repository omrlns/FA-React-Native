// Objetos

let pessoa = {
    nome: 'Marlon',
    idade: 21,
    altura: 1.77,
    cargo: 'Estudante'
}

console.log(pessoa)
console.log(pessoa.nome)

let carro = {
    modelo: 'Lancer EVO',
    cor: 'Preto',
    potencia: '280cv'
}

console.log(carro)
console.log(carro.potencia)

let carros = [
    { modelo: 'Ferrari Spider', cor: 'Vermelho', potencia: '780cv' },
    { modelo: 'Porsche 911', cor: 'Prata', potencia: '580cv' },
    { modelo: 'Lamborghini Huracán', cor: 'Preto', potencia: '640cv' }
]

console.log(carros)
console.log(carros[0])

carros.forEach((carro) => {
    console.log(carro.modelo)
})