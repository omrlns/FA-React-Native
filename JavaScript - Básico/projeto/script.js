// switch

function pedir() {
    var valor = prompt('digite de um valor de 1 a 4')

    switch(Number(valor)){
        case 1:
            alert('você escolheu água')
            break
        case 2:
            alert('você escolheu suco')
            break
        case 3:
            alert('você escolheu cerveja')
            break
        case 4:
            alert('você chamou o garçom!')
            break
        default:
            alert('escolha uma opção entre 1 a 4')
    }
}