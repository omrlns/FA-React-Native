// filter = filtrar alguma coisa dentro de um array
let nomes = ['Marlon', 'Fernanda', 'Gustavo', 'Zé', 'Valéria', 'Bruce']

let resultado = nomes.filter((item) => {
    return item.length <= 5
})
let resultado2 = nomes.filter((item) => {
    return item.length >= 6
})

console.log(resultado)
console.log(resultado2)