import { UserConnected } from '../../../../../../common/entities/user';

// tslint:disable-next-line:no-empty-interface
export interface UserState {
  id: string;
  entity: UserConnected;
}

export const initialState: UserState = {
  id: '',
  entity: null
};
