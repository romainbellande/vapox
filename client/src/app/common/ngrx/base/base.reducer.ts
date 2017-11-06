import { ActionReducer } from '@ngrx/store';
import { Base } from '../../../../../../common/entities/base';
import { types, BaseActions } from './base.actions';
import { EntityState, initialState } from '../utils/entity';
import { NgrxAction } from '../utils/ngrx/interfaces';

export function reducer(state: EntityState<Base> = initialState, action: NgrxAction): EntityState<Base> {
  const actions = new BaseActions(state, action.payload);

  switch (action.type) {
    case types.ADD_SUCCESS: {
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
