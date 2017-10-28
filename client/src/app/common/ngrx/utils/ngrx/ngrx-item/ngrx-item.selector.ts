import { createFeatureSelector, createSelector, Store, MemoizedSelector } from '@ngrx/store';


export class NgrxItemSelector<T> {
  public state: MemoizedSelector<object, T>;

  constructor(label: string) {
    this.state = createFeatureSelector<T>(label);
  }

  create<Y>(callback: (state: T) => Y): MemoizedSelector<object, Y> {
    return createSelector(
      this.state,
      (state: T) => callback(state)
    );
  }
}
