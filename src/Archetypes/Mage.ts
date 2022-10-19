import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _createdArchetypeInstances = 0;
    
  static createdArchetypeInstances() {
    this._createdArchetypeInstances += 1;
    return this._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}