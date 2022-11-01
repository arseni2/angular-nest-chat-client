import { AuthStateI } from './auth.reducer';

export type UserType = {
  name: string
  id: number
}

export type UnAuthorizedErrorType = {
  statusCode: number
  message: string
  error?: string
}
