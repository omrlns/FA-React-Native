// rest operator

function convidados(...nomes) {
    console.log('QUERIDOS CONVIDADOS, SEJAM BEM-VINDOS!')
    console.log(nomes)
}

convidados('Marlon', 'Fernanda', 'Gustavo')

function gerador(...numeros) {
    console.log(numeros)
    const numeroGerado = Math.floor(Math.random() * numneros.length)
    console.log(numeros[numeroGerado])
}

gerador(1, 3, 5, 7, 9)