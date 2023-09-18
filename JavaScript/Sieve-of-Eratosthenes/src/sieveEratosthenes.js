export const sieveEratosthenes = (limit) => {
    const isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let num = 2; num * num <= limit; num++) {
        if (isPrime[num]) {
            for (let multiple = num * num; multiple <= limit; multiple += num) {
                isPrime[multiple] = false;
            }
        }
    }
    const primes = isPrime
        .map((prime, index) => prime ? index : null)
        .filter((prime) => prime !== null);
    return primes;
};
