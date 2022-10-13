cache = {} #* Onde a página web armazena os dados ao invés de recoletalos do servidor novamente a cada solicitação

def pega_pagina(url):
    if cache.get(url):
        return cache[url]
    else:
        dados = pega_dados_do_servidor(url)
        cache[url] = dados
        return dados

#? Assim fazemos o nosso servidor trabalhar apenas se a URL não estiver armazenada no cache e caso ela não esteja armazena no cache os dados serão salvos no cache antes de serem retornados. Dessa forma, a próxima vez que alguém solicitar esta mesma URL, poderiamos enviar os dados salvos no cacho ao invés de solicitar do servidor