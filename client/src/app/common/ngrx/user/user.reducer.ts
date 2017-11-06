import { ActionReducer } from '@ngrx/store';
import { UserConnected } from '../../../../../../common/entities/user';

import { types, UserActions } from './user.actions';
import { UserState, initialState } from './user.state';
import { NgrxAction } from '../utils/ngrx/interfaces';


export function reducer(state = initialState, action: NgrxAction): UserState {
  const actions = new UserActions(state, action.payload);
  switch (action.type) {
    case types.REGISTRATION_SUCCESS: {
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
