export const sieveEratosthenes = (limit: number) => {
    // create an array of boolean values where each each represents a number.
    // initially, assume all numbers are prime.
    const isPrime = new Array(limit + 1).fill(true);

    // 0 and 1 are not prime, therefore set false.
    isPrime[0] = false;
    isPrime[1] = false;

    // start with first prime number i.e. 2
    for (let num = 2; num * num <= limit; num++) {
        // if is isPrime[num] is true, then num is a prime number.
        if (isPrime[num]) {
            // mark all multiples of num as not prime
            for (let multiple = num * num; multiple <= limit; multiple += num) {
                isPrime[multiple] = false;
            }
        }
    }

    // collect all prime numbers in an array
    const primes = isPrime
    .map((prime, index) => prime ? index : null)
    .filter((prime) => prime !== null);

    return primes;
};