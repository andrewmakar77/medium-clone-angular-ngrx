import { TUserRegister } from '../user-register';

export type TUserLogin = Pick<TUserRegister, 'email' | 'password'>;
