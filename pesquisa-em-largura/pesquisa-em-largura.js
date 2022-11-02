/*
* | IMPLEMENTAÇÃO DO ALGORITMO |
? 1. Crie uma fila contendo todas as pessoas que devem ser verificadas
? 2. Retire uma pessoa da fila
? 3. Confira se esta pessoa é um vendendor de mangas
? 4. É um vendedor de manga? Pronto, finaliza o algoritmo. Não é? Adicione todos os vizinhos dessa pessoa na lista
? 5. Repita
? 6. Se a lista estiver vazio signiifica que não existem vendedores de manga nessa rede
*/

const grafo = {}

grafo['voce'] = ['alice', 'bob', 'claire']
grafo['bob'] = ['anuj', 'peggy']
grafo['alice'] = ['peggy']
grafo['claire'] = ['thom', 'jonny']
grafo['anuj'] = []
grafo['peggy'] = []
grafo['thom'] = []
grafo['jonny'] = []

const eVendedor = (nome) => {
    return nome[nome.length - 1] === 'm'
}

function pesquisaEmLargura(nome){
    let filaDePesquisa = []
    filaDePesquisa = filaDePesquisa.concat(grafo[nome])

    const pesquisados = []
    while (filaDePesquisa.length){
      let pessoa = filaDePesquisa.shift()
      
      if (pesquisados.indexOf(pessoa) === -1){
        if (eVendedor(pessoa)){
          console.log(`${pessoa} é um(a) vendedor(a) de manga!`)
          return true
        }
  
        filaDePesquisa = filaDePesquisa.concat(grafo[pessoa])
        
        pesquisados.push(pessoa)
      }
    }
    return false
}
  
pesquisaEmLargura('voce')