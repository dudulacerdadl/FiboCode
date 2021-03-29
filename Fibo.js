function fibo(n) {
    if (n < 2 ) {
        return n;
    } else {
        return fibo(n - 1) + fibo(n - 2);
    }
}

for (i = 0; i <= 65; i++) {
    console.log(`${i} º - ${fibo(i)}`);
}
console.log("");
console.log("Fim da série");