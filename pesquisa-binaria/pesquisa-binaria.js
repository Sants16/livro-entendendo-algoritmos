'use strict'; //o use strict é um modo de programar que impede certas ações para o bem do nosso código eliminando algumas gambiarras possíveis de se fazer com o JavaScript, o que torna vantajoso utilizar o strict pois nos ajuda a escrever um código mais seguro e consistente

/*
Pesquisa binária é um algoritmo, ele recebe duas entradas, uma sendo uma lista ordenada de elementos e outra o elemento que queremos achar nessa lista.
Então caso esse elemento exista na lista retornaremos sua posição, se ele não existir retornaremos null
A pesquisa binária é uma forma mais efeciente e menos cansativa de buscar um elemento em uma lista já que reduzimos a possibilidade sempre pela metade

EX: Caso pedissimos para uma pessoa pensar em um número de 1 à 100 e fossemos chutar esse número, com a pesquisa binária, teriamos 7 tentativas (log2 100)
100 -> 50 -> 25 -> 13 -> 7 -> 4 -> 2 -> [1]

*/

function pesquisa_binaria(lista, item) { //definimos a função que executará a nossa pesquisa binária e ela recebera uma lista ordenada e um elemento dessa lista
  let baixo = 0; //definimos o numero mais baixo dessa lista como 0 pois queremos exibir a posição do item e o indice do array sempre começa por 0
  let alto = lista.length - 1; //definimos o numero mais alto como o ultimo indice do array, então caso seja um array de 5 elementos o valor mais alto seria 4 pois queremos exibir a posição do item e o indice do array sempre começa por 0

// [{baixo} {} {} {} {alto}] -> a busca sera realizada entre os numeros que estão entre o 'baixo' e o 'alto'
  
  while (baixo <= alto) { //o codigo sera executa enquanto ainda não chegamos a um unico elemeto
    let meio = Math.floor((baixo + alto) / 2); //o meio sera igual a metade do nosso array arredondado, então pegamos o numero mais alto ate o momento e o numero mais baixo ai somamos os dois e dividimos por 2
    let chute = lista[meio]; //definimos o nosso como o lugar que o 'meio' corresponde no array
    if (chute === item) { //se o nosso chute for igual ao item retornamos o valor de meio
      return meio;
    }
    if (chute > item) { //se o chute for mais que o item nos diminuimos o valor de 'alto' e fazemos uma nova pesquisa baseado no novo valor de 'alto'
      alto = meio - 1;
    } else {
      baixo = meio + 1; //se o chute for menor que o item nos aumentamos o valor de 'baixo' e fazemos uma nov pesquisa baseado no novo valor de 'baixo'
    }
  }
  
  return null; //caso o item não exista retorna null
}

const minha_lista = [1, 3, 5, 7, 9];

console.log(pesquisa_binaria(minha_lista, 3)); // 1
console.log(pesquisa_binaria(minha_lista, -1)); // null