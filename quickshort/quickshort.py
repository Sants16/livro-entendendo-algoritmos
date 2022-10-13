def quickshort(array):
    if len(array) < 2:
        return array
    else:
        pivo = array[0]
        menores = [item for item in array[1:] if item <= pivo]
        maiores = [item for item in array[1:] if item > pivo]
        return quickshort(menores) + [pivo] + quickshort(maiores)

print(quickshort([10, 5, 2, 3]))