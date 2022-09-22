// algoritmo de soma com recursividade, exercicio proposto no capitulo 4 do livro, o algoritmo foi feito por mim
function soma(array){
    if(array.length === 1) return Number(array)
    const primeiroItem = array[0]
    array.shift()
    return primeiroItem + soma(array)
}
console.log(soma([2, 4, 6]))
// eu havia executado o algoritmo da maneira correta mas por querer inventar na hora de passar o array como parametro acabei me enbananando
/* 

tentei fazer da seguinte forma
function soma(...array){
    ...
}
console.log(soma(2, 4, 6))

o que me retornava um NaN (not a number)

*/