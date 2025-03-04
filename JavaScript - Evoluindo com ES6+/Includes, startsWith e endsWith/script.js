// includes, startsWith e endsWith

// includes
let nomes = ['Marlon', 'Fernanda', 'Gustavo']
console.log(nomes.includes('Marlon')) // retorna true

if (nomes.includes('Marlon')) {
    console.log('Liberado! Você está na lista!')
} else {
    console.log('Quem é você?')
}

// startsWith
let pessoa = 'Marlon'
console.log(pessoa.startsWith('Mar')) // retorna true

// endsWith
console.log(pessoa.endsWith('lon')) // retorna true
