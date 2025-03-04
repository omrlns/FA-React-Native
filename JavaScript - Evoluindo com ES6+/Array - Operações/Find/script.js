// find = buscar algo em um array

let listagem = [1, 3, 5, 'Marlon', 7, 9, 'Fernanda', 'Gustavo']

let busca = listagem.find((item) => {
    if (item === 'Marlon') {
        return console.log('item encontrado com sucesso!')
    }
})