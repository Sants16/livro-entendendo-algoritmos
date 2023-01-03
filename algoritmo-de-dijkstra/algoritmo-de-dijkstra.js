const grafo = {}
grafo['inicio'] = {}
grafo['inicio']['a'] = 6
grafo['inicio']['b'] = 2
grafo['a'] = {}
grafo['a']['fim'] = 1
grafo['b'] = {}
grafo['b']['a'] = 3
grafo['b']['fim'] = 5
grafo['fim'] = {}

const custos = {}
custos['a'] = 6
custos['b'] = 2
custos['fim'] = Infinity

const pais = {}
pais['a'] = 'inicio'
pais['b'] = 'inicio'
pais['fim'] = null

const processados = []

const acheNoCustoMaisBaixo = custos => {
    let custoMaisBaixo = Infinity
    let nodoCustoMaisBaixo = null

    for (const nodo in custos) {
        const custo = custos[nodo]
        
        if(custo < custoMaisBaixo && !processados.includes(nodo)){
            custoMaisBaixo = custo
            nodoCustoMaisBaixo = nodo
        }
    }
    return nodoCustoMaisBaixo
}

let nodo = acheNoCustoMaisBaixo(custos)

while(nodo !== null) {
    const custo = custos[nodo]
    const vizinhos = grafo[nodo]

    for (const n in Object.keys(vizinhos)) {
        const novoCusto = custo + vizinhos[n]

        if(custos[n] > novoCusto){
            custos[n] = novoCusto
            pais[n] = nodo
        }
    }
    processados.push(nodo)
    nodo = acheNoCustoMaisBaixo(custos)
}