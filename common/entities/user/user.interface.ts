import { Entity } from '../../interfaces';

import { Aroma } from '../aroma';
import { Base } from '../base';
import { Booster } from '../booster';
import { Recipe } from '../recipe';

export interface User extends Entity {
  readonly username: string;
  readonly email: string;
  readonly aromas?: Aroma[];
  readonly bases?: Base[];
  readonly boosters?: Booster[];
  readonly recipes?: Recipe[];
}
