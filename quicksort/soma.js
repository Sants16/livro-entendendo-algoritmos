// algoritmo de soma com recursividade, exercicio proposto no capitulo 4 do livro, o algoritmo foi feito por mim
function soma(array){
    if(array.length === 1) return Number(array)
    const primeiroItem = array[0]
    array.shift()
    return primeiroItem + soma(array)
}

// ALGORITMO DO LIVRO, acredito que tenha ficado melhor que o meu por ter menos passos mas obtei por fazer algo mais didatico de certa forma
function somaDoLivro(array){
    if(array.length === 1) return array[0]
    return array[0] + soma(array.slice(1))
}

console.log(soma([2, 4, 6]))
console.log(somaDoLivro([1, 3, 5]))

// eu havia executado o algoritmo da maneira correta mas por querer inventar na hora de passar o array como parametro acabei me enbananando
/* 

tentei fazer da seguinte forma
function soma(...array){
    ...
}
console.log(soma(2, 4, 6))

o que me retornava um NaN (not a number)

*/