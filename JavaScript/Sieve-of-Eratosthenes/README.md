[Sieve of Eratosthenes](https://github.com/imdev912/Algorithm/blob/main/Sieve-of-Eratosthenes/README.md)

Use the Sieve of Eratosthenes to find all the primes from 2 up to a given number.

The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit. It does so by iteratively marking as composite (i.e. not prime) the multiples of each prime, starting with the multiples of 2. It does not use any division or remainder operation.

Create your range, starting at two and continuing up to and including the given limit. (i.e. [2, limit])

The algorithm consists of repeating the following over and over:

take the next available unmarked number in your list (it is prime)
mark all the multiples of that number (they are not prime)
Repeat until you have processed each number in your range.

When the algorithm terminates, all the numbers in the list that have not been marked are prime.