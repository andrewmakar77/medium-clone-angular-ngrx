import { Action, createReducer, on } from '@ngrx/store';

import {
  registerAction,
  registerSuccessAction,
  registerFailureAction,
} from 'src/app/modules/auth/store/auth.actions';
import {
  IAuthState,
  IAuthResponseData,
  IBackendErrorMap,
  IUserResponse,
} from 'src/app/models';

export const authFeatureKey = 'auth';

export const initialState: IAuthState = {
  loaded: null,
  loading: null,
  error: null,
  errorMessages: {},
  data: {} as IUserResponse,
};

const reducer = createReducer(
  initialState,
  on(registerAction, (state: IAuthState) => ({
    ...state,
    loaded: false,
    loading: true,
    error: false,
    errorMessages: {},
    data: {},
  })),
  on(
    registerSuccessAction,
    (state: IAuthState, { user }: IAuthResponseData) => ({
      ...state,
      loaded: true,
      loading: false,
      error: false,
      data: {
        ...user,
      },
    })
  ),
  on(
    registerFailureAction,
    (state: IAuthState, { errors }: { errors: IBackendErrorMap }) => ({
      ...state,
      loaded: false,
      loading: false,
      error: true,
      errorMessages: errors || {},
      data: {} as IUserResponse,
    })
  )
);

export function authReducer(state: IAuthState, action: Action) {
  return reducer(state, action);
}
