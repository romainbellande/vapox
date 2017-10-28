import { Action } from '@ngrx/store';

export interface NgrxAction extends Action {
  type: string;
  payload: any;
}
