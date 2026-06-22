public class FinancialForecastCalculator{
    public static double forecastPrediction(double price, double rate, int years){
        if(years == 0){
            return price;
        }
        return forecastPrediction(price * (1 + rate), rate, years - 1);
    }

    public static void main(String[] args) {
        double initital_price = 10000;
        double growth_rate_per_annum = 0.05;
        int forecast_years = 10;

        double forecast_result = forecastPrediction(initital_price, growth_rate_per_annum, forecast_years);
        System.out.printf("Recursive Forecast of price %.2f at the rate %.2f per annum for %d years: Rs.%.2f%n", initital_price, growth_rate_per_annum, forecast_years, forecast_result);
    }
}