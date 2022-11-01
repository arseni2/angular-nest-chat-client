import { createReducer, on } from '@ngrx/store';
import * as MessageActions from './message.actions'
import { messageType } from './types';


export interface MessageStateI {
  messages: messageType[]
}

const initialState: MessageStateI = {
  messages: []
};

export const messageReducer = createReducer(
  initialState,
  on(MessageActions.MessageCreateSetAction, (state, {message}) => {
    return { ...state, messages: state.messages.concat(message)}
  }),
  on(MessageActions.MessageSetAllAction, (state, {messages}) => ({ ...state, messages: messages})),
)
