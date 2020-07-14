import { IDefaultState } from 'src/app/models/interfaces/default-state';
import { IUserResponse } from 'src/app/models/interfaces/auth-response-data';

export interface IAuthState extends IDefaultState<IUserResponse> {}
