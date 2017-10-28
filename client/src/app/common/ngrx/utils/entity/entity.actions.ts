import { Action } from '@ngrx/store';

import { NgrxItemActions } from '../../utils/ngrx/ngrx-item';

export interface ActionsList {
  ADD: string;
  ADD_FAIL: string;
  ADD_SUCCESS: string;
  REMOVE: string;
  REMOVE_SUCCESS: string;
  REMOVE_FAIL: string;
  SELECT: string;
  SELECT_FAIL: string;
  SELECT_SUCCESS: string;
  UPDATE: string;
  UPDATE_FAIL: string;
  UPDATE_SUCCESS: string;
}

export class ActionsBase extends NgrxItemActions implements ActionsList {
  protected base = `[${ this.entityName.toUpperCase() }] `;
  public ADD = this.get('Add');
  public ADD_FAIL = this.get('Add Fail');
  public ADD_SUCCESS = this.get('Add Success');
  public REMOVE = this.get('Remove');
  public REMOVE_FAIL = this.get('Remove Fail');
  public REMOVE_SUCCESS = this.get('Remove Success');
  public SELECT = this.get('Select');
  public SELECT_FAIL = this.get('Select Fail');
  public SELECT_SUCCESS = this.get('Select Success');
  public UPDATE = this.get('Update');
  public UPDATE_FAIL = this.get('Update Fail');
  public UPDATE_SUCCESS = this.get('Update Success');

  constructor(protected entityName: string) {
    super(entityName);
  }

  protected get(value): string {
    return this.base + value;
  }
}

export class Add<T> implements Action {
  readonly type;
  constructor(public payload: T) {}
}

export class AddFail implements Action {
  readonly type;
  constructor(public payload: any) {}
}

export class AddSuccess<T> implements Action {
  readonly type;
  constructor(public payload: T) {}
}

export class Load<T> implements Action {
  readonly type;
  constructor(public payload: T[]) {}
}

export class LoadFail implements Action {
  readonly type;
  constructor(public payload: any) {}
}

export class LoadSuccess<T> implements Action {
  readonly type;
  constructor(public payload: T[]) {}
}

export class Remove<T> implements Action {
  readonly type;
  constructor(public payload: T) {}
}

export class RemoveFail implements Action {
  readonly type;
  constructor(public payload: any) {}
}

export class RemoveSuccess<T> implements Action {
  readonly type;
  constructor(public payload: T) {}
}

export class Select implements Action {
  readonly type;
  constructor(public payload: string) {}
}

export class SelectFail implements Action {
  readonly type;
  constructor(public payload: any) {}
}

export class SelectSuccess<T> implements Action {
  readonly type;
  constructor(public payload: T) {}
}

export class Update<T> implements Action {
  readonly type;
  constructor(public payload: T) {}
}

export class UpdateFail implements Action {
  readonly type;
  constructor(public payload: any) {}
}

export class UpdateSuccess<T> implements Action {
  readonly type;
  constructor(public payload: T) {}
}
