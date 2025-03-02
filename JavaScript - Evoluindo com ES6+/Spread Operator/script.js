// spread operator
let primeiros = [1, 2, 3]
// ... são os responsáveis pelo spread operator na array
// dessa forma, o programa identifica o "primeiros" como indices separados
// diferente de apenas concatenar
let numeros = [...primeiros, 4, 6, 8]
console.log(numeros)

let pessoa = {
    nome: 'Marlon',
    sobrenome: 'Silva',
    empresa: 'DVA Esquadrias',
    cargo: 'Assistente Administrativo'
}

let novasInformacoes = {
    ...pessoa,
    status: 'ATIVO',
    cidade: 'Palhoça'
}

console.log(novasInformacoes)

function novoUsuario(info) {
    let dados = {
        ...info,
        status: 'ATIVO',
        situacao: 'EMPREGADO'
    }
    console.log(dados)
}

novoUsuario({ nome: 'Fernanda', sobrenome: 'Vancine', cargo: 'Secretária' })