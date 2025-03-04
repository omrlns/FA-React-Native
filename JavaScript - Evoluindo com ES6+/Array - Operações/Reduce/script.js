// reduce = busca reduzir uma array
let numeros = [1, 3, 5, 7, 9]

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} - total até o momento`)
    console.log(`${numero} - valor atual`)
    // console.log(`${indice} - indice atual`)
    // console.log(`${original} - array original`)

    return acumulador += numero
})

console.log(`TOTAL DO REDUCE: ${total}`)