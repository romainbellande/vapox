import { types } from './user.actions';
import { reducer } from './user.reducer';
import * as selectors from './user.selectors';

export * from './user.state';

export const fromUser = {
  types,
  reducer,
  selectors
};
