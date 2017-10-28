import { Action } from '@ngrx/store';

import { EntityState } from './entity.states';
import { Entity } from '../../../../../../../common/interfaces';

export class EntityAdapter<T extends Entity> {
  constructor(private state: EntityState<T>, private payload: any) {}

  add(): EntityState<T> {
    return {
      ids: [...this.state.ids, this.payload._id],
      entities: [...this.state.entities, this.payload],
      selectedId: this.state.selectedId,
      loaded: this.state.loaded
    };
  }

  loadSuccess(): EntityState<T> {
    return {
      ids: this.payload.map(a => a._id),
      entities: this.payload,
      selectedId: this.state.selectedId,
      loaded: true
    };
  }

  removeSuccess(): EntityState<T> {
    const selectedId = this.state.selectedId === this.payload._id ? null : this.state.selectedId;
    return {
      ids: this.state.ids.filter(id => id !== this.payload._id),
      entities: this.state.entities.filter(entity => entity._id !== this.payload._id),
      selectedId: selectedId,
      loaded: this.state.loaded
    };
  }

  select(): EntityState<T> {
    return {
      ids: this.state.ids,
      entities: this.state.entities,
      selectedId: this.payload,
      loaded: this.state.loaded
    };
  }

  updateSuccess(): EntityState<T> {
    const entities = this.state.entities.map(entity => this.payload._id !== entity._id ? entity : this.payload);
    return {
      ids: this.state.ids,
      entities: entities,
      selectedId: this.state.selectedId,
      loaded: this.state.loaded
    };
  }
}
