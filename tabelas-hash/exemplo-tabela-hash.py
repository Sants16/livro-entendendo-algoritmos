caderno = dict() #implementação da tabela hash em python, assim transformamos "caderno" em uma tabela hash

caderno['maçã'] = 0.67
caderno['leite'] = 1.49
caderno['abacate'] = 1.60

print(caderno)
print(caderno['abacate'])


votaram = {}

def verifica_eleitor(nome_eleitor):
    if votaram.get(nome_eleitor): # se o nome do eleitor já estiver presente na lista das pessoas que votaram ele não pode votar
        print('Ralá')
    else: # se o nome do eleitor não estiver presente na lista ele pode votar
        votaram[nome_eleitor] = True
        print('Pode votar')

verifica_eleitor('joão')
verifica_eleitor('joão')
verifica_eleitor('erlando')