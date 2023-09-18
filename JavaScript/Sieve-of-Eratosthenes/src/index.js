import { sieveEratosthenes } from "./sieveEratosthenes.js";
const init = () => {
    const primes = sieveEratosthenes(100);
    console.log(primes);
};
init();
