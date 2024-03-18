function solution(n) {
    const mod = 1234567;
    let fib = [];
    fib[0] = 0;
    fib[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        fib[i] = (fib[i - 1] + fib[i - 2]) % mod;
    }
    
    return fib[n];
}