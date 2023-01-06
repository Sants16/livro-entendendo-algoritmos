let estadosAbranger = new Set(['sp', 'rj', 'mt', 'pa', 'pe', 'ba', 'mg', 'es']) //? set/conjunto é um array que não repete itens, porém tem métodos diferentes do array

const estacoes = {}
estacoes['kUm'] = new Set(['pa', 'pe', 'ba'])
estacoes['kDois'] = new Set(['rj', 'pa', 'sp'])
estacoes['kTres'] = new Set(['mt', 'pe', 'mg'])
estacoes['kQuatro'] = new Set(['pe', 'ba'])
estacoes['kCinco'] = new Set(['mg', 'es'])

const estacoesFinais = new Set()

while(estadosAbranger.size) { //* executa o código até o set estadosAbranger estar vazio
    let melhorEstacao
    let estadosCobertos = new Set()
    
    for(let estacao in estacoes){
        const estados = estacoes[estacao]
        const cobertos = new Set([...estadosAbranger].filter(estado => estados.has(estado))) //? fazemos aqui uma intersecção, estadosAbranger & estados, então só os estados que existem nesses dois sets serão armazenados na const cobertos
    
        if(cobertos.size > estadosCobertos.size) {
            melhorEstacao = estacao
            estadosCobertos = cobertos
        }
    }

    estadosAbranger = new Set([...estadosAbranger].filter(estado => !estadosCobertos.has(estado))) //? retornamos a diferença de estadosAbranger e estadosCobertos, estadosAbranger - estadosCobertos, os estados do set estadosAbranger que não estão no set estadosCobertos
    estacoesFinais.add(melhorEstacao)
}

console.log(estacoesFinais)