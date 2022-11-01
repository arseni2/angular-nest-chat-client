import { MessageStateI } from './message/message.reducer';
import { AuthStateI } from './auth/auth.reducer';

export type StoreTypes = {
  messageReducer: MessageStateI
  authReducer: AuthStateI
}
