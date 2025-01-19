// abaixo de 17 = muito abaixo do peso
// entre 17 e 18,49 = abaixo do peso
// entre 18,5 e 24,99 = peso normal
// entre 25 e 29,99 = acima do peso

// peso / (altura*altura)

var peso, altura, imc, resultado

function calcular(event) {
    event.preventDefault()

    peso = document.getElementById('peso').value
    altura = document.getElementById('altura').value

    imc = peso / (altura * altura)

    if (imc < 17) {
        resultado = document.getElementById('resultado')
        resultado.innerHTML = ' </br> seu resultado foi: ' + imc.toFixed(2) + ' </br> CUIDADO! você está muito abaixo do peso! cuide da sua saúde!'
    } else if (imc > 17 && imc <= 18.49) {
        resultado = document.getElementById('resultado')
        resultado.innerHTML = ' </br> seu resultado foi: ' + imc.toFixed(2) + ' </br> você está abaixo do peso! procure um médico!'
    } else if (imc >= 18.5 && imc < 24.99) {
        resultado = document.getElementById('resultado')
        resultado.innerHTML = ' </br> seu resultado foi: ' + imc.toFixed(2) + ' </br> PARABÉNS! você está no seu peso ideal!'
    } else if (imc > 25 && imc < 29.99) {
        resultado = document.getElementById('resultado')
        resultado.innerHTML = ' </br> seu resultado foi: ' + imc.toFixed(2) + ' </br> você está acima do peso, movimente-se!'
    } else if (imc >= 30) {
        resultado = document.getElementById('resultado')
        resultado.innerHTML = ' </br> seu resultado foi: ' + imc.toFixed(2) + ' </br> CUIDADO OBESIDADE!'
    }

    // limpando os inputs
    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''

}