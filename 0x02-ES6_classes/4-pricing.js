import Currency from './3-currency.js';

export default class Pricing {
  /* eslint-disable */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }
  /**
   * Getter and setter methods for each attributes
  */

  get amount() {
    return this._amount;
  }
  get currency() {
    return this._currency;
  }
  set amount(Amount) {
    this._amount = Amount;
  }
  set currency(Currency) {
    this._currency = Currency;
  }

  /**
   * displayFullPrice that returns the attributes in the following format amount currency_name (currency_code).
  */

  displayFullPrice(){
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

  static convertPrice(amount, conversionRate){
    return amount * conversionRate;
  }
}