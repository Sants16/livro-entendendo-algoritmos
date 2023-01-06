//* Mexendo no set um pouquinho

const arr = [1, 2, 1, 1, 3, 2, 2, 1, 3]
const set = new Set(arr)

set.add(6) //? adiciona um item no set, caso o item já exista ele não será adicionado
console.log(set)

set.delete(6) //? deleta um item dentro do set
console.log(set)

console.log(set.entries()) //? retorna as entries do set, array tendo o par chave-valor

console.log(set.has(2)) //? caso o item exista dentro do set é retornado true senão false

console.log(set.keys()) //? retorna um iterator que passa por todas as chaves do set

console.log(set.values()) //? retorna um iterator que passa por todos os valores do set

set.clear() //? esvazia os itens do set
console.log(set)