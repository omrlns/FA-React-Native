// lista de produtos
const produtos = ['Computador', 'Telefone', 'Mouse', 'Teclado']

// mostrando a quantidade de produtos na lista
console.log(`O seu carrinho de compras tem ${produtos.length} produtos!`) // retorna 4

// tirando o 'Mouse' da lista e renderizando o restante da lista
console.log(`Removendo o Mouse do seu carrinho e deixando apenas: ${produtos.filter(product => product !== 'Mouse').join(', ')}`)

// procurando um produto específico na lista
const produtoAlvo = produtos.find(product => product === 'Teclado')
if (produtoAlvo) { //afirmativa
    console.log(`Oba! ${produtoAlvo} é um produto existente na sua lista de compras!`)
} else { //negativa
    console.log('Ops! Esse produto não está na sua lista!')
}

// removendo o segundo item da lista
produtos.splice(1, 1) //start e número de itens a ser deletado?
// retorna a lista sem o telefone
console.log(`Os produtos da lista são: ${(produtos).join(', ')}`)

// colocando os números em ordem
const numeros = [9, 7, 5, 3, 1, 2, 4, 6, 8]
console.log(`Ordenando os números...: ${numeros.sort().join(', ')}`)

// removendo o primeiro número da lista
console.log(`O seguinte número foi removida da lista: ${numeros.shift()}`)

// invertendo a ordem da lista
console.log(`Reordenando os números: ${numeros.reverse().join(', ')}`)

// adicionando um novo número na lista
// let numeroNovo = parseInt(prompt('Informe um número: '))
// numeros.push(numeroNovo)
// console.log(numeros)

// data
let diaDeHoje = '05/03/2025'
let meuDia = '29/05/2003'
const [diaStr, mesStr, anoStr] = meuDia.split('/') // remove a barra
const dia = Number(diaStr) //converte para dia
const mes = Number(mesStr) //converte para dia
const ano = Number(anoStr) //converte para dia
console.log(`Dia: ${dia}`)
console.log(`Mês: ${mes}`)
console.log(`Ano: ${ano}`)

if (dia === 29 && mes === 5) {
    console.log('Parabéns Marlon, hoje é o seu dia!')
} else {
    console.log('Nada de especial!')
}