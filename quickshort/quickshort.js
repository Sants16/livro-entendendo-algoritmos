function quickshort(array) {
    //CASO BASE, se o array tem somente 1 elemento ou está vazio não tem porque ordenalo
    if (array.length < 2) return array
    else {
        const pivo = array[0] //O PRIMEIRO NÚMERO DO ARRAY SERÁ NOSSO PIVÔ
        const menores = array.slice(1).filter(item => item <= pivo) //SUB-ARRAY QUE PARTE DO ARRAY ORIGINAL, porém só com os números menores que o pivô
        const maiores = array.slice(1).filter(item => item > pivo) //SUB-ARRAY QUE PARTE DO ARRAY ORIGINAL, porém só com os números maiores que o pivô
        return [...menores, pivo, ...maiores] //UTILIZANDO O MÉTODO .concat() PARA JUNTAR OS SUB-ARRAYS E O PIVÔ EM UM ARRAY ORDENADO SÓ
    }
}

console.log(quickshort([1, -50, 32, 0.5]));

/*
EXECUÇÃO DO QUICKSHORT:
[0.5, -50] -- |1| -- [32]
[0.5, -50] -- |1| -- [32] => [-50] -- |0.5| -- []

[-50] + [0.5] + [] => [-50, 0.5]
[-50, 0.5] + [1] + [32] => [-50, 0.5, 1, 32]
*/ 

//nesse algoritmo aqui eu fiquei até impressionado com a minha capacidade, no livro os códigos são mostrados em python e eu consegui "traduzir" exatamente o código para javascript da mesma forma que está no livro, isso foi muito legal