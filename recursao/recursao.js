// Recursão é quando uma função chama a si mesma, a recursão é usada para tornar a resposta mais clara. Em relação ao desempenho os loops se fazem uma melhor opção

//por conta da função recursiva chamar a si mesma é muito fácil escreve-la de forma errada e acabar em um loop infinito

// const regressiva = i => {
//     console.log(i)
//     regressiva(i-1)
// }
// regressiva(10)

//por conta disso quando escrevemos uma função recursiva devemos informar quando a recursão deve parar, toda função recursiva tem dois casos, o caso-base e o caso-recursivo
//CASO RECURSIVO => quando a função CHAMA a si mesma
//CASO BASE => quando a função NÃO chama a si mesma novamente, de forma que o programa não se torna um loop infinito

const regressivaComCasoBase = i => {
    console.log(i)
    if(i <= 1) return //caso-base
    regressivaComCasoBase(i-1) //caso-recursivo
}
regressivaComCasoBase(10)

//Pilha de chamada (call stack), quando você insere um item, ele é colocado no topo da pilha e qunado você lê um item, lê apenas o item do topo da pilha e ele é retirado da lista

const perguntarComoEsta = nome => console.log(`Como vai ${nome}?`)
const tchau = () => console.log('tchau')
const saudar = (
    nome => {
        console.log(`Olá ${nome}!`)
        perguntarComoEsta(nome)
        console.log('Preparando para dizer tchau...')
        tchau()
    }
)('João')

//Pilha de chamada dessa função: 
/*
saudar nome: João
saudar nome: João => perguntarComoEsta nome: João
saudar nome: João
saudar nome: João => tchau
saudar nome: João
acaba a função
*/

//Pilha de chamada com recursão
const fat = x => {
        if(x === 1) return 1
        else return x * fat(x-1)
    }
console.log(fat(5)) //5! = 5 * 4 * 3 * 2 * 1

//Pilha de chamada dessa função:
/*
PRIMEIRO FAZEMOS AS CHAMADAS DAS FUNÇÕES

fat x: 5
fat x: 5 => fat X: 4
fat x: 5 => fat X: 4 => fat x: 3
fat x: 5 => fat X: 4 => fat x: 3 => fat X: 2
fat x: 5 => fat X: 4 => fat x: 3 => fat X: 2 => fat x: 1

AGORA FINALIZADOS AS FUNÇÕES CHAMADAS COMEÇANDO PELA QUE ESTÁ NO "TOPO DA PILHA"

fat x: 5 => fat X: 4 => fat x: 3 => fat X: 2 => fat x: 1 (retorna 1)
fat x: 5 => fat X: 4 => fat x: 3 => fat X: 2 (retorna 2)
fat x: 5 => fat X: 4 => fat x: 3 (retorna 6)
fat x: 5 => fat X: 4 (retorna 24)
fat x: 5 (retorna 120)

acaba a função
*/

//Usar a pilha pode ser bom, entretanto todas essas chamadas de funções incompletas podem acabar por ocupar muito espaço na memória
//Sendo assim tenhos duas opções: Reescrever o código utilizando loops ou utilizar tail recursion (recursão de cauda) => PESQUISA SOBRE ISSO DEPOIS