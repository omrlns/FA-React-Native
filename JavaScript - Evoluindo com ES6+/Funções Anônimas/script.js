// funções anônimas
// () => {}
// 1. os parentêses, que é por onde a função recebe os argumentos (assim como nas funções tradicionais)
// 2. "seta": => responsável pelo nome 'arrow'
// 3. "chaves": {} o bloco de código que representa o corpo da função

// tradicional
function somar(a, b) {
    let total = a + b
    return console.log(total)
}

somar(10, 30)

// anônima
let subtrarir = (valor1, valor2) => {
    let total = valor1 - valor2
    return console.log(total)

}

subtrarir(50, 25)

let numeros = [1, 3, 5, 7, 9]

numeros.map((item) => {
    console.log(item)
})



