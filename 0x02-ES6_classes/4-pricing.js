import Currency from './3-currency';

export default class Pricing {
  /* eslint-disable */
  constructor(amount, currency) {
    this._currency = currency;
    this._amount = amount;
  }

  // getter 
  get currency() {
    return this._currency;
  }

  get amount() {
    return this._amount;
  }

  // setter
  set currency(Currency) {
    this._currency = Currency;
  }

  set amount(Amount) {
    this._amount = Amount;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`; 
  }

  // static that calculates the amount multiplied by the conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
