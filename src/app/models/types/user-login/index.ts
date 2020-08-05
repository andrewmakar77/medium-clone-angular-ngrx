import { TUserRegister } from 'src/app/models/types/user-register/index';

export type TUserLogin = Pick<TUserRegister, 'email' | 'password'>;
