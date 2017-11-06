import { ActionReducer } from '@ngrx/store';
import { Booster } from '../../../../../../common/entities/booster';
import { types, BoosterActions } from './booster.actions';
import { EntityState, initialState } from '../utils/entity';
import { NgrxAction } from '../utils/ngrx/interfaces';

export function reducer(state: EntityState<Booster> = initialState, action: NgrxAction): EntityState<Booster> {
  const actions = new BoosterActions(state, action.payload);

  switch (action.type) {
    case types.ADD: {
      return actions.add();
    }

    case types.LOAD_SUCCESS: {
      return actions.loadSuccess();
    }

    case types.REMOVE_SUCCESS: {
      return actions.removeSuccess();
    }

    case types.SELECT: {
      return actions.select();
    }

    case types.UPDATE_SUCCESS: {
      return actions.updateSuccess();
    }

    default: {
      return state;
    }
  }
}
