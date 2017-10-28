import { NgrxItemSelector } from '../utils/ngrx/ngrx-item';
import { UserState } from './user.state';
import { UserConnected } from '../../../../../../common/entities/user';

const selector = new NgrxItemSelector<UserState>('user');

export const getUser = selector.create<UserConnected>(state => state.entity);
