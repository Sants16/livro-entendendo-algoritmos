grafo = {}

grafo['voce'] = ['alice', 'bob', 'claire']
grafo['bob'] = ['anuj', 'peggy']
grafo['alice'] = ['peggy']
grafo['claire'] = ['thom', 'jonny']
grafo['anuj'] = []
grafo['peggy'] = []
grafo['thom'] = []
grafo['jonny'] = []

from collections import deque #? deque - double ended queue (fila com dois finais)
fila_de_pesquisa = deque()

fila_de_pesquisa += grafo['voce']

def pessoa_e_vendedor(nome): #* Verifica se o nome da pessoa termina com a letra m
    return nome[-1] == 'm'

def pesquisa(nome):
    fila_de_pesquisa = deque()
    fila_de_pesquisa += grafo[nome]
    verificados = []
    while fila_de_pesquisa: #? Enquanto a fila não estiver vazia
        pessoa = fila_de_pesquisa.popleft() #? Pega a primeira pessoa da fila
        if not pessoa in verificados:
            if pessoa_e_vendedor(pessoa): #? Verifica se a pessoa é uma vendedora de mangas
                print(pessoa + ' é um vendedor de manga!')
            else:
                fila_de_pesquisa += grafo[pessoa]
                verificados.append(pessoa)

pesquisa('voce')