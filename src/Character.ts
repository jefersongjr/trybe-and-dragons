import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
// import Fighter from './Fighter';
import Race, { Elf } from './Races';

export default class Character {
  private _name :string;
  private _race : Race;
  private _archetype : Archetype;
  private _maxLifePoints : number;
  private _lifePoints : number;
  private _strength : number;
  private _defense : number;
  private _dexterity : number;
  private _energy : Energy;

  constructor(name: string) {
    this._name = name;
    this._dexterity = Math.floor(Math.random() * 10) + 1;
    this._race = new Elf('Elf', this._dexterity);
    this._archetype = new Mage('Mage');
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = Math.floor(Math.random() * 10) + 1;
    this._defense = Math.floor(Math.random() * 10) + 1;
    this._energy = {
      type_: this._archetype.energyType,
      amount: Math.floor(Math.random() * 10) + 1,
    };
  }
 
  public get race(): Race {
    return this._race;
  }
 
  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get energy(): Energy {
    return this._energy;
  }
  
  public get dexterity(): number {
    return this._dexterity;
  }

  receiveDamage(attackPoints: number) {
    const damage = this._defense - attackPoints;
    if (damage > 0) {
      this._lifePoints -= damage;
      return this._lifePoints;
    } if (this._lifePoints - damage <= 0) {
      this._lifePoints = -1;
      return this._lifePoints;
    }
    return this._lifePoints;
  }
}