// import { ActionReducer } from '@ngrx/store';
// import { Booster } from '../../../../../../common/entities/booster';
// import { types } from './booster.actions';
// import { EntityState, initialState, EntityAdapter } from '../utils/entity';

// export function reducer(state = initialState, action: { type: string, payload: any }): EntityState<Booster> {
//   const adapter = new EntityAdapter<Booster>(state, action.payload);

//   switch (action.type) {
//     case types.ADD: {
//       return adapter.add();
//     }

//     case types.LOAD_SUCCESS: {
//       return adapter.loadSuccess();
//     }

//     case types.REMOVE_SUCCESS: {
//       return adapter.removeSuccess();
//     }

//     case types.SELECT: {
//       return adapter.select();
//     }

//     case types.UPDATE_SUCCESS: {
//       return adapter.updateSuccess();
//     }

//     default: {
//       return state;
//     }
//   }
// }
