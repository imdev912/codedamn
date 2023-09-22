package NthPrimeNumber;

public class Main {
    public static void main(String[] args) {
        PrimeCalculator obj = new PrimeCalculator();

        int[] indices = { 1, 2, 3, 4, 5, 6, 7, 8 };

        for (int index : indices) {
            System.out.println(obj.nth(index));
        }
    }
}
