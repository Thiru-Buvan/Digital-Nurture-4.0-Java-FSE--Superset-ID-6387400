public class RecursiveAlgorithm {

    public static double RecursiveApproach(double value, double rate, int NumOfyears) {
        if (NumOfyears == 0) {
            return value;
        }
        return (1 + rate) * RecursiveApproach(value, rate, NumOfyears - 1);
    }

    public static void main(String[] args) {
        double presentValue = 20000;
        double growthRate = 0.10;
        int years = 5;

        double PredictfutureValue = RecursiveApproach(presentValue, growthRate, years);
        System.out.printf("Prediction value after %d years: $%.2f", years, PredictfutureValue);
    }
}
