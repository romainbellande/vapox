export interface EntityState<T> {
  ids: string[];
  entities: T[];
  selectedId: string | null;
  loaded: boolean;
}

export const initialState: EntityState<any> = {
  ids: [],
  entities: [],
  selectedId: null,
  loaded: false
};
