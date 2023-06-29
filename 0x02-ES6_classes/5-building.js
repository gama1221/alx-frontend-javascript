export default class Building {
  /* eslint-disable */
  constructor(sqft = 0) {
    /* eslint-disable */
    if (this.constructor !== Building
      && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}