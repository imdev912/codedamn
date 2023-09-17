# Sieve of Eratosthenes

The Sieve of Eratosthenes is an efficient algorithm for finding all prime numbers up to a specified limit. It works by iteratively marking the multiples of each prime, starting from 2, as composite (not prime), and then identifying the remaining unmarked numbers as prime.

![Sieve of Eratosthenes Animation](https://upload.wikimedia.org/wikipedia/commons/9/94/Animation_Sieve_of_Eratosth.gif)


## Algorithm Steps

1. **Create a List**: Create a list of consecutive integers from 2 to the given upper limit (n).

2. **Start with the First Prime (2)**: Start with the first prime number, which is 2. It is the smallest prime.

3. **Mark Multiples**: Starting from 2, mark all multiples of 2 in the list as composite numbers (not prime). These are numbers that can be divided evenly by 2, excluding 2 itself.

4. **Move to the Next Unmarked Number**: Find the smallest unmarked number greater than the current prime (in this case, 2). This will be the next prime number.

5. **Repeat**: Repeat steps 3 and 4 until you have processed all numbers up to the square root of the upper limit.

6. **Remaining Unmarked Numbers**: All unmarked numbers in the list after step 5 are prime numbers.

## Example

Let's find all prime numbers up to 30 using the Sieve of Eratosthenes:

1. Create a list from 2 to 30: `[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]`.

2. Start with 2 as the first prime and mark its multiples: `[2, 3, ~4~, 5, ~6~, 7, ~8~, 9, ~10~, 11, ~12~, 13, ~14~, 15, ~16~, 17, ~18~, 19, ~20~, 21, ~22~, 23, ~24~, 25, ~26~, 27, ~28~, 29, ~30~]`.

3. Move to the next unmarked number, which is 3, and mark its multiples: `[2, 3, ~4~, 5, ~6~, 7, ~8~, ~9~, ~10~, 11, ~12~, 13, ~14~, ~15~, ~16~, 17, ~18~, 19, ~20~, ~21~, ~22~, 23, ~24~, 25, ~26~, ~27~, ~28~, 29, ~30~]`.

4. Move to the next unmarked number, which is 5, and mark its multiples: `[2, 3, ~4~, 5, ~6~, 7, ~8~, ~9~, ~10~, 11, ~12~, 13, ~14~, ~15~, ~16~, 17, ~18~, 19, ~20~, ~21~, ~22~, 23, ~24~, 25, ~26~, ~27~, ~28~, 29, ~30~]`.

5. Repeat this process until you've processed all numbers up to the square root of 30.

6. The remaining unmarked numbers in the list are prime numbers: `[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]`.

## Complexity

The Sieve of Eratosthenes is an efficient algorithm with a time complexity of O(n log log n), making it one of the fastest algorithms for finding prime numbers up to a given limit.

## Applications

- Prime number generation for various mathematical calculations.
- Cryptography, such as RSA encryption.
- Optimization problems in computer science and mathematics.

The Sieve of Eratosthenes is a fundamental algorithm in number theory and has numerous practical applications in various fields.
