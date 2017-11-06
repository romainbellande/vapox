import { Action } from '@ngrx/store';

import { EntityActions, EntityTypes, EntityState } from '../utils/entity';
import { Base, BaseCreate } from '../../../../../../common/entities';

class BaseTypes extends EntityTypes {
  constructor(protected entityName) {
    super(entityName);
  }
}

export class BaseActions extends EntityActions<Base> {
  constructor(protected state: EntityState<Base>, protected payload: any) {
    super(state, payload);
  }
}

export const types = new BaseTypes('base');
