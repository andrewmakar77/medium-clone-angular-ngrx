import { Action, createReducer, on } from '@ngrx/store';

import * as fromActions from 'src/app/modules/auth/store/actions/auth.actions';
import * as fromModels from 'src/app/models';

export const authFeatureKey = 'auth';

export const initialState: fromModels.IAuthState = {
  loaded: null,
  loading: null,
  error: null,
  errorMessages: {},
  data: {} as fromModels.IUserResponse,
};

const reducer = createReducer(
  initialState,
  on(fromActions.registerAction, (state: fromModels.IAuthState) => ({
    ...state,
    loaded: false,
    loading: true,
    error: false,
    errorMessages: {},
    data: {} as fromModels.IUserResponse,
  })),
  on(
    fromActions.registerSuccessAction,
    (state: fromModels.IAuthState, { user }: fromModels.IAuthResponseData) => ({
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
    fromActions.registerFailureAction,
    (
      state: fromModels.IAuthState,
      { errors }: { errors: fromModels.IBackendErrorMap }
    ) => ({
      ...state,
      loaded: false,
      loading: false,
      error: true,
      errorMessages: errors || {},
      data: {} as fromModels.IUserResponse,
    })
  ),
  on(fromActions.loginAction, (state: fromModels.IAuthState) => ({
    ...state,
    loaded: false,
    loading: true,
    error: false,
    errorMessages: {},
    data: {} as fromModels.IUserResponse,
  })),
  on(
    fromActions.loginSuccessAction,
    (state: fromModels.IAuthState, { user }: fromModels.IAuthResponseData) => ({
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
    fromActions.loginFailureAction,
    (
      state: fromModels.IAuthState,
      { errors }: { errors: fromModels.IBackendErrorMap }
    ) => ({
      ...state,
      loaded: false,
      loading: false,
      error: true,
      errorMessages: errors || {},
      data: {} as fromModels.IUserResponse,
    })
  )
);

export function authReducer(state: fromModels.IAuthState, action: Action) {
  return reducer(state, action);
}
