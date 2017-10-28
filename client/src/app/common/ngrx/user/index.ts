import * as actions from './user.actions';
import { reducer } from './user.reducer';
import * as selectors from './user.selectors';

export * from './user.state';

export const fromUser = {
  actions,
  reducer,
  selectors
};
