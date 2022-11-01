import * as AuthActions from './auth.actions';
import { UserType } from './types';
import { createReducer, on } from '@ngrx/store';

export interface AuthStateI {
  user: null | UserType;
  err: any
}

const initialState: AuthStateI = {
  user: null,
  err: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.AuthLoginAction, (state, {user}) => ({ ...state, user, err: null})),
  on(AuthActions.AuthLoginErrorAction, (state, {err}) => ({...state, err})),

  on(AuthActions.AuthRegisterAction, (state, {user}) => ({...state, user, err: null})),
  on(AuthActions.AuthRegisterErrorAction, (state, {err}) => ({...state, err})),
)
