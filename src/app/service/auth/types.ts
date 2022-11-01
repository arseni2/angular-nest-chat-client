import { UserType } from '../../store/auth/types';

export type UserResponseType = UserType & {token: string}
