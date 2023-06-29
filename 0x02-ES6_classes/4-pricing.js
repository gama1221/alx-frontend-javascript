import Currency from './3-currency';

export default class Pricing {
  /* eslint-disable */
  constructor(amount, currency) {
    this._currency = currency;
    this._amount = amount;
  }
  /**
   * Getter and setter methods for each attributes
  */

  get currency() {
    return this._currency;
  }

  get amount() {
    return this._amount;
  }

  set currency(Currency) {
    this._currency = Currency;
  }

  set amount(Amount) {
    this._amount = Amount;
  }
  /**
    * displayFullPrice that returns the attributes in the following format amount currency_name (currency_code).
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  /**
   * Implement a static method named convertPrice. 
   * It should accept two arguments: amount (Number), conversionRate (Number). 
   * The function should return the amount multiplied by the conversion rate.
   * @param {Number} amount 
   * @param {Number} conversionRate 
   * @returns the product of amount with conversionRate 
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
