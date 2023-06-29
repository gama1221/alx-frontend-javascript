export default class Currency {
  /* eslint-disable */
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw TypeError('Code must be String ');
    } else {
      this._code = code;
    }
    if (typeof name !== 'string') {
      throw TypeError('name must be a string');
    } else {
      this._name = name;
    }
  }
  /** 
   * Setter and Getter Methods
   */
  get code() {
    return this._code;
  }
  get name() {
    return this._name;
  }
  set code(Code) {
    if (typeof Code !== 'string') {
      throw TypeError('Code should be a string')
    } else {
      this._code = Code;
    }
  }
  set name(Name) {
    if (typeof Name !== 'string') {
      throw TypeError('Name should be a string');
    } else {
      this._name = Name;
    }
  }
  /**
   * 
   * @returns - Implement a method named displayFullCurrency that will return the attributes in the following format name (code).
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}