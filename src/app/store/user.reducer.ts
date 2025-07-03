import { createReducer, on, createAction, props } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { UserRole } from '../core/services/user.service';

export interface UserState {
  currentUserRole: UserRole;
  isOffline: boolean;
  queuedActions: Action[];
}

export const initialUserState: UserState = {
  currentUserRole: 'Editor',
  isOffline: false,
  queuedActions: []
};

export const setRole = createAction('[App] Set Role', props<{ role: UserRole }>());
export const toggleOffline = createAction('[App] Toggle Offline');

export const userReducer = createReducer(
  initialUserState,
  on(setRole, (state, { role }) => ({ ...state, currentUserRole: role })),
  on(toggleOffline, (state) => ({ ...state, isOffline: !state.isOffline }))
);