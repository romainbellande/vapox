import { createSelector, MemoizedSelector } from '@ngrx/store';


import { NgrxItemSelector } from '../ngrx/ngrx-item';
import { EntityState } from './entity.states';
import { Entity } from '../../../../../../../common/interfaces/entity.interface';

export class EntitySelector<T extends Entity> extends NgrxItemSelector<EntityState<T>> {
  public getEntities: MemoizedSelector<object, T[]>;
  public getSelectedEntity: MemoizedSelector<object, T>;
  public getLoaded: MemoizedSelector<object, boolean>;

  constructor(label: string) {
    super(label);
    this.getEntities = this.create<T[]>(state => state.entities);
    this.getSelectedEntity = this.create<T>(state => state.entities.find(entity => entity._id === state.selectedId));
    this.getLoaded = this.create<boolean>(state => state.loaded);
  }
}
