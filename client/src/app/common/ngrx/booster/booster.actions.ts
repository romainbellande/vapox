import { Action } from '@ngrx/store';

import * as EntityActions from '../utils/entity';
import { Booster, BoosterCreate } from '../../../../../../common/entities/booster';

class BoosterActions extends EntityActions.ActionsBase {
  constructor(protected entityName) {
    super(entityName);
  }
}

export const types = new BoosterActions('booster');

export class Add extends EntityActions.Add<BoosterCreate> {
  readonly type = types.ADD;
}

export class AddFail extends EntityActions.AddFail {
  readonly type = types.ADD;
}

export class AddSuccess extends EntityActions.AddSuccess<Booster> {
  readonly type = types.ADD;
}

export class Load extends EntityActions.Load<Booster> {
  readonly type = types.LOAD;
}

export class LoadFail extends EntityActions.LoadFail {
  readonly type = types.LOAD_FAIL;
}

export class LoadSuccess extends EntityActions.LoadSuccess<Booster> {
  readonly type = types.LOAD_SUCCESS;
}

export class Remove extends EntityActions.Remove<Booster> {
  readonly type = types.REMOVE;
}

export class RemoveFail extends EntityActions.RemoveFail {
  readonly type = types.REMOVE_FAIL;
}

export class RemoveSuccess extends EntityActions.RemoveSuccess<Booster> {
  readonly type = types.REMOVE_SUCCESS;
}

export class Select extends EntityActions.Select {
  readonly type = types.SELECT;
}

export class SelectFail extends EntityActions.SelectFail {
  readonly type = types.SELECT_FAIL;
}

export class SelectSuccess extends EntityActions.SelectSuccess<Booster> {
  readonly type = types.SELECT_SUCCESS;
}

export class Update extends EntityActions.Update<Booster> {
  readonly type = types.UPDATE;
}

export class UpdateFail extends EntityActions.UpdateFail {
  readonly type = types.UPDATE_FAIL;
}

export class UpdateSuccess extends EntityActions.UpdateSuccess<Booster> {
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
