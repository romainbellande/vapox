import { Component } from '../../interfaces';
import { Base } from '../base/base.interface';
import { Booster } from '../booster/booster.interface';
import { Aroma } from '../aroma/aroma.interface';

export interface RecipeCreate {
  readonly label: string;
  readonly ml: number;
  readonly price: number;
  readonly nicotine: number;
  readonly _base: Base;
  readonly _booster: Booster;
  readonly _aroma: Aroma;
  readonly imageUrl?: string;
}
