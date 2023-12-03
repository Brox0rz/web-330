/*  Author: Brock Hemsouvanh
    Original Author: Professor Krasso
    Date: 11/28/23
    finance-calculator.js Description: class to calculate the future value of a user's 
    investment input. Formats the currency to USD.
*/

class FinanceCalculator {
    static MONTHS_IN_YEAR = 12;

    static calculateFutureValue(monthlyPayment, rate, years) {
        const months = years * this.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = parseFloat(monthlyPayment) * months;
        let futureValue = presentValue * (Math.pow(interestRate, months));
        return futureValue.toFixed(2);
    }

    static convertToCurrency(field) {
        let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        });

        return currencyFormatter.format(field);
    }
}

export default FinanceCalculator;