function maximo(array) {
    //caso seja um array de apenas dois itens fica mais fácil a comparação, apenas devemos comparar o primeiro item com o segundo e retornar o maior
    if(array.length === 2)
    //caso o primeiro item do array seja maior que o segundo, ele será retornado, se o segundo item do array for maior que o primeiro, ele será retornado
        return array[0] > array[1] ? array[0] : array[1]

    const sub_max = maximo(array.slice(1))

    return array[0] > sub_max ? array[0] : sub_max
}

console.log(maximo([10, 50, 80, 90]))

//Nesse algoritmo estamos usando a técnica do dividir para conquistar, já que estamos diminuindo o array para um tamanho cada vez menor e quando o mesmo chega no tamanho de dois itens conseguimos fazer uma operação muito mais simples, assim descobrimos o caso-base do algoritmo

//Pilha de chamada
/*
FAZENDO A CHAMADA DAS FUNÇÕES

maximo array: [10, 50, 80, 90]
maximo array: [10, 50, 80, 90] => maximo array: [50, 80, 90]
maximo array: [10, 50, 80, 90] => maximo array: [50, 80, 90] => maximo array: [80, 90]

EXECUTANDO A CHAMADA DAS FUNÇÕES

maximo array: [10, 50, 80, 90] => maximo array: [50, 90] => maximo array: [80, 90] (retorna 90)
maximo array: [10, 50, 80, 90] => maximo array: [50, 90] (retorna 90)
maximo array: [10, 90] (retorna 90)

50 > sub_max 80-90 --> return 80 > 90 ? 80 : 90
50 > sub_max 80-90 --> 90
50 > 90 --> 90
90

Agora o array se tornou um array de dois itens assim como foi na operação sub_max 80-90

return 10 > 90 ? 10 : 90
90 é maior que 10, logo o valor retornado será 90
*/