const caderno = {} //* implementação da tabela hash em javascript, assim transformamos "caderno" em uma tabela hash

//* Relacionando as strings a números
caderno['maçã'] = 0.67
caderno['leite'] = 1.49
caderno['abacate'] = 1.60

console.log(caderno)
console.log(caderno['leite']) //? executa uma função hash, inserimos uma string e recebemos um número

function acharPreco(item) {
    if(caderno[item]) { //? assim verificamos se o item existe na nossa tabela hash
        console.log(caderno[item]);
    } else {
        throw 'Esse item não existe na tabela' //! caso o item não exista o usuário será informado
    }
}

acharPreco('abacate')


const votaram = {}

const verificarEleitor = nomeEleitor => {
    if(votaram[nomeEleitor]) console.log('Ralá')
    else {
        votaram[nomeEleitor] = true
        console.log('Pode votar')
    }
}

verificarEleitor('joão')
verificarEleitor('joão')