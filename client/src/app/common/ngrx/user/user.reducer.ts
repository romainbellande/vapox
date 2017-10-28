import { ActionReducer } from '@ngrx/store';
import { UserConnected } from '../../../../../../common/entities/user';

import { $, All } from './user.actions';
import { UserState, initialState } from './user.state';

export function reducer(state = initialState, action: All): UserState {

  switch (action.type) {
    case $.REGISTRATION_SUCCESS: {
      return {
        id: action.payload.id,
        entity: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
