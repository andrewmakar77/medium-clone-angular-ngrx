import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState, IAuthState } from 'src/app/models';
import { authFeatureKey } from 'src/app/modules/auth/store/reducers/auth.reducer';

export const selectFeature = createFeatureSelector<IAppState, IAuthState>(
  authFeatureKey
);

export const selectUser = createSelector(
  selectFeature,
  (state: IAuthState) => state.data
);
export const selectIsLoading = createSelector(
  selectFeature,
  (state: IAuthState) => state.loading
);
export const selectIsLoaded = createSelector(
  selectFeature,
  (state: IAuthState) => state?.loaded
);
export const selectErrorMessages = createSelector(
  selectFeature,
  (state: IAuthState) => state.errorMessages
);
export const selectIsError = createSelector(
  selectFeature,
  (state: IAuthState) => state.error
);
