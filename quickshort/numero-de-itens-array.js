function conta(array) {
    if(array.length === 0) return 0 //caso o array não tenha nenhum item retorna 0, o array pode chegar a ter nenhum item por conta do metodo slice e porque nós queremos contar todos os itens do array do inicio ao fim
    return 1 + conta(array.slice(1)) //vai pegar somente os itens do array apartir da segunda posição, sendo a 0 a primeira
}

// Pilha de chamada
/*
FAZENDO A CHAMADA DAS FUNÇÕES

conta array: [1, 2, 3, 4]
conta array: [1, 2, 3, 4] => conta array: [2, 3, 4]
conta array: [1, 2, 3, 4] => conta array: [2, 3, 4] => conta array: [3, 4]
conta array: [1, 2, 3, 4] => conta array: [2, 3, 4] => conta array: [3, 4] => conta array: [4]
conta array: [1, 2, 3, 4] => conta array: [2, 3, 4] => conta array: [3, 4] => conta array: [4] => conta array: []

EXECUTANDO A CHAMADA DAS FUNÇÕES

conta array: [1, 2, 3, 4] => conta array: [2, 3, 4] => conta array: [3, 4] => conta array: [4] => conta array: [] (retorna 0)
conta array: [1, 2, 3, 4] => conta array: [2, 3, 4] => conta array: [3, 4] => conta array: [4] (retorna 1)
conta array: [1, 2, 3, 4] => conta array: [2, 3, 4] => conta array: [3, 4] (retorna 2)
conta array: [1, 2, 3, 4] => conta array: [2, 3, 4] (retorna 3)
conta array: [1, 2, 3, 4] (retorna 4)

1 + 0 => 1
1 + 1 => 2
1 + 2 => 3
1 + 3 => 4
O array tem 4 itens
*/

console.log(conta([1, 2, 3, 4]));