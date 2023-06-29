import Building from './5-building';

class SkyHighBuilding extends Building {
  /* eslint-disable */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return (this._floors);
  }

  set floors(floors){
    this._floors = floors;
  }
  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this.floors} floors`);
  }
}

export default SkyHighBuilding;