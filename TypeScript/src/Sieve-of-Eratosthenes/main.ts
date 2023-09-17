import { sieveEratosthenes } from "./Sieve-of-Eratosthenes.js";

export const init = () => {
    const primes = sieveEratosthenes(100);
    console.log(primes);
}