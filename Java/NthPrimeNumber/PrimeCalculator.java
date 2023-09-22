package NthPrimeNumber;

public class PrimeCalculator {
    boolean isProbablePrime(int num) {
        if (num == 2) {
            return true;
        }

        if (num == 3) {
            return true;
        }

        if (num % 2 == 0 || num % 3 == 0) {
            return false;
        }

        for (int idx = 5; idx * idx <= num; idx += 6) {
            if (num % idx == 0 || num % (idx + 2) == 0) {
                return false;
            }
        }

        return true;
    }

    int nth(int nth) {
        if (nth <= 0) {
            throw new IllegalArgumentException("Input must be a positive integer");
        }

        int counter = 1;
        int prime = 2;

        while (counter < nth) {
            prime++;

            if (isProbablePrime(prime)) {
                counter++;
            }
        }

        return prime;
    }
}