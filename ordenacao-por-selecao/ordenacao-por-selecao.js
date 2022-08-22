'use strict';
// Tempo de execução em notação Big O: O(n^2)
// O algoritmo organiza os itens do array do menor para o maior

function buscaMenor(array) {
  var menor = array[0]; // menor item do array
  var menor_indice = 0; // menor indice do array

  for (var i = 1; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i];
      menor_indice = i;
    }
  }

  return menor_indice;
}

function ordenarporSelecao(array) {
  var novoArray = [];
  var length = array.length;

  for (var i = 0; i < length; i++) {
    var menorItem = buscaMenor(array);
    novoArray.push(array.splice(menorItem, 1)[0]);
  }

  return novoArray;
}

console.log(ordenarporSelecao([5, 3, 6, 2, 10])); // [2, 3, 5, 6, 10]