import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState, IAuthState } from 'src/app/models';
import { authFeatureKey } from 'src/app/modules/auth/store/auth.reducer';

export const selectFeature = createFeatureSelector<IAppState, IAuthState>(authFeatureKey);

export const selectUser = createSelector(selectFeature, (state: IAuthState) => state.data);
