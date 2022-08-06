#fazendo o mesmo exemplo em python pois estou tentando entender a sintaxe da linguagem

#o def é como declarar uma função em js
def pesquisa_binaria(lista, item):
    baixo = 0
    alto = len(lista) - 1 #len é como o .length em js

    while baixo <= alto:
        meio = (baixo + alto) / 2 #o python arredonda o numero automaticamnte
        chute = lista[meio]
        if chute == item:
            return meio
        if chute > item:
            alto = meio - 1
        else:
            baixo = meio + 1

    return None 

minha_lista = [1, 3, 5, 7, 9]

print (pesquisa_binaria(minha_lista, 3))  # => 1
print (pesquisa_binaria(minha_lista, -1)) # => None