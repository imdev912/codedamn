export const sieveEratosthenes = (limit) => {
    // limit is less then 2, no prime number exists
    if (limit < 2)
        return [];
    // list of prime numbers
    const primes = [2];
    // initially assume all numbers are prime
    const isComposite = Array(limit + 1).fill(false);
    for (let num = 3; num <= limit; num += 2) {
        // if isComposite[num] is false, then num is prime
        if (!isComposite[num]) {
            // add number to list of prime numbers
            primes.push(num);
            // mark multiples of prime numbers as composite from num * num, but only for odd multiples
            for (let multiple = num * num; multiple <= limit; multiple += num * 2) {
                isComposite[multiple] = true;
            }
        }
    }
    return primes;
};
