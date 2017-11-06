import { Action } from '@ngrx/store';

import { EntityTypes, EntityActions, EntityState } from '../utils/entity';
import { Booster, BoosterCreate } from '../../../../../../common/entities/booster';

class BoosterTypes extends EntityTypes {
  constructor(protected entityName) {
    super(entityName);
  }
}

export class BoosterActions extends EntityActions<Booster> {
  constructor(protected state: EntityState<Booster>, protected payload: any) {
    super(state, payload);
  }
}

export const types = new BoosterTypes('booster');

