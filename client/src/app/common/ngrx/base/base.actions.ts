import { Action } from '@ngrx/store';

import * as EntityActions from '../utils/entity';
import { Base, BaseCreate } from '../../../../../../common/entities';

export class BaseActions extends EntityActions.ActionsBase {
  constructor(protected entityName) {
    super(entityName);
  }
}

export const types = new BaseActions('base');

export class Add extends EntityActions.Add<BaseCreate> {
  readonly type = types.ADD;
}

export class AddFail extends EntityActions.AddFail {
  readonly type = types.ADD;
}

export class AddSuccess extends EntityActions.AddSuccess<Base> {
  readonly type = types.ADD;
}

export class Load extends EntityActions.Load<Base> {
  readonly type = types.LOAD;
}

export class LoadFail extends EntityActions.LoadFail {
  readonly type = types.LOAD_FAIL;
}

export class LoadSuccess extends EntityActions.LoadSuccess<Base> {
  readonly type = types.LOAD_SUCCESS;
}

export class Remove extends EntityActions.Remove<Base> {
  readonly type = types.REMOVE;
}

export class RemoveFail extends EntityActions.RemoveFail {
  readonly type = types.REMOVE_FAIL;
}

export class RemoveSuccess extends EntityActions.RemoveSuccess<Base> {
  readonly type = types.REMOVE_SUCCESS;
}

export class Select extends EntityActions.Select {
  readonly type = types.SELECT;
}

export class SelectFail extends EntityActions.SelectFail {
  readonly type = types.SELECT_FAIL;
}

export class SelectSuccess extends EntityActions.SelectSuccess<Base> {
  readonly type = types.SELECT_SUCCESS;
}

export class Update extends EntityActions.Update<Base> {
  readonly type = types.UPDATE;
}

export class UpdateFail extends EntityActions.UpdateFail {
  readonly type = types.UPDATE_FAIL;
}

export class UpdateSuccess extends EntityActions.UpdateSuccess<Base> {
  readonly type = types.UPDATE_SUCCESS;
}

export const actions = {
  Add,
  Load,
  LoadFail,
  LoadSuccess,
  Remove,
  RemoveFail,
  RemoveSuccess,
  Select,
  SelectFail,
  SelectSuccess,
  Update,
  UpdateFail,
  UpdateSuccess
};
