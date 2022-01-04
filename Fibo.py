def fibo(n):
    if n < 2:
        return n
    else:
        return fibo(n - 1) + fibo(n - 2)


for i in range(0, 65):
    print(f'{i}º - {fibo(i)}')
