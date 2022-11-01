import { createAction, props } from '@ngrx/store';
import { UnAuthorizedErrorType, UserType } from './types';


export enum TypesActionsEnum {
  login = '[AUTH] login',
  loginError = '[AUTH] error login',
  loginLoad = '[AUTH] load login',

  register = '[AUTH] register',
  registerError = '[AUTH] error register',
  registerLoad = '[AUTH] load register'
}

export const AuthLoginAction = createAction(TypesActionsEnum.login, props<{user: UserType}>())
export const AuthLoginLoadAction = createAction(TypesActionsEnum.loginLoad, props<{name: string, password: string}>())
export const AuthLoginErrorAction = createAction(TypesActionsEnum.loginError, props<{err: UnAuthorizedErrorType}>())

export const AuthRegisterAction = createAction(TypesActionsEnum.register, props<{user: UserType}>())
export const AuthRegisterErrorAction = createAction(TypesActionsEnum.registerError, props<{err: UnAuthorizedErrorType}>())
export const AuthRegisterLoadAction = createAction(TypesActionsEnum.registerLoad, props<{name: string, password: string}>())

//export const AuthProfileAction = createAction('[AUTH] profile')
