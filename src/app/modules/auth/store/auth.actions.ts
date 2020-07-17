import { createAction, props } from '@ngrx/store';

import { AuthActionTypes } from 'src/app/modules/auth/store/auth.action-types';
import {
  IRegisterRequestData,
  IAuthResponseData,
  IBackendErrorMap,
} from 'src/app/models';

export const registerAction = createAction(
  AuthActionTypes.REGISTER,
  props<IRegisterRequestData>()
);

export const registerSuccessAction = createAction(
  AuthActionTypes.REGISTER_SUCCESS,
  props<IAuthResponseData>()
);

export const registerFailureAction = createAction(
  AuthActionTypes.REGISTER_FAILURE,
  props<{ errors: IBackendErrorMap }>()
);
