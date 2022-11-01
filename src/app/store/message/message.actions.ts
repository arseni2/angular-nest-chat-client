import { createAction, props } from '@ngrx/store';
import { createMessageParamsTypes, messageType } from './types';


export enum TypesActionsEnum {
  createdMessage = '[MESSAGE] created',
  createSetMessage = '[MESSAGE] set create',
  getAllMessage = '[MESSAGE] getAll',
  errorMessage = '[MESSAGE] error',
  setAllMessage = '[MESSAGE] set'
}

export const MessageCreatedAction = createAction(TypesActionsEnum.createdMessage)
export const MessageCreateSetAction = createAction(TypesActionsEnum.createSetMessage, props<{ message: messageType }>())
export const MessageGetAllAction = createAction(TypesActionsEnum.getAllMessage)
export const MessageSetAllAction = createAction(TypesActionsEnum.setAllMessage, props<{ messages: messageType[] }>())
export const MessageErrorAction = createAction(TypesActionsEnum.errorMessage, props<{ err: any }>())
