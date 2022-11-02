/*
* | GRAFO |
? Um modelo de grafo é um conjunto de conexões e cada grafo é constituido de vértices e arestas e um vértice pode ser diretamente conectado a muitos outros vértices
! EU -> VOCÊ
!           \
!            ELA -> ELE
*/

const grafo = {}

grafo['voce'] = ['alice', 'bob', 'claire']
grafo['bob'] = ['anuj', 'peggy']
grafo['alice'] = ['peggy']
grafo['claire'] = ['thom', 'jonny']

console.log(grafo)

/*
*      BOB -> ANUJ, PEGGY
*     /
* VOCÊ -> ALICE -> PEGGY
*     \
*      CLAIRE -> THOM, JONNY

? Anuj, Peggy, Thom e Jonny não possuem vizinhos, eles tem setas apontadando para eles mas nenhuma seta partindo deles, sendo assim dígrafos (grafo direcionado), onde a relação ocorre em apenas um sentido
*/