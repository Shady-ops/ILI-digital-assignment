import { ActionReducerMap, MetaReducer, Action } from '@ngrx/store';

import { UserState, userReducer } from './user.reducer';


export interface AppState {
  user: UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer
};


function offlineMetaReducer(reducer: (state: AppState | undefined, action: Action) => AppState): (state: AppState | undefined, action: Action) => AppState {
  return function(state, action: any) {
    if (state?.user.isOffline && action.queueable) {
      const updatedUserState: UserState = {
        ...state.user,
        queuedActions: [...state.user.queuedActions, action]
      };
      return { ...state, user: updatedUserState };
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = [offlineMetaReducer];