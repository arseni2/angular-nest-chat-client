import { UserType } from '../auth/types';

export type createMessageParamsTypes = {
  message: string
}

export type messageType = {
  id: number
  message: string
  user: UserType
}

