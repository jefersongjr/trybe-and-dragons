import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _createdRacesInstances = 0;
    
  static createdRacesInstances() {
    this._createdRacesInstances += 1;
    return this._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}