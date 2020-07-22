import { createAction, props } from '@ngrx/store';

import { AuthActionTypes } from 'src/app/modules/auth/store/action-types/auth.action-types';
import * as fromModels from 'src/app/models';

export const loginAction = createAction(AuthActionTypes.LOGIN, props<any>());

export const loginSuccessAction = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<fromModels.IAuthResponseData>()
);

export const loginFailureAction = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<{ errors: fromModels.IBackendErrorMap }>()
);

export const registerAction = createAction(
  AuthActionTypes.REGISTER,
  props<fromModels.IRegisterRequestData>()
);

export const registerSuccessAction = createAction(
  AuthActionTypes.REGISTER_SUCCESS,
  props<fromModels.IAuthResponseData>()
);

export const registerFailureAction = createAction(
  AuthActionTypes.REGISTER_FAILURE,
  props<{ errors: fromModels.IBackendErrorMap }>()
);

export const getUserAction = createAction(AuthActionTypes.GET_USER);

export const getUserSuccessAction = createAction(
  AuthActionTypes.GET_USER_SUCCESS,
  props<fromModels.IAuthResponseData>()
);

export const getUserFailureAction = createAction(
  AuthActionTypes.GET_USER_FAILURE
);
