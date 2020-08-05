import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromModels from 'src/app/models';
import { feedFeatureKey } from 'src/app/modules/feed/store/reducers/feed.reducer';

export const selectFeature = createFeatureSelector<
  fromModels.IAppState,
  fromModels.IFeedState
>(feedFeatureKey);

export const selectFeed = createSelector(
  selectFeature,
  (state: fromModels.IFeedState) => state.data
);
export const selectIsLoading = createSelector(
  selectFeature,
  (state: fromModels.IFeedState) => state.loading
);
export const selectIsLoaded = createSelector(
  selectFeature,
  (state: fromModels.IFeedState) => state?.loaded
);
export const selectErrorMessages = createSelector(
  selectFeature,
  (state: fromModels.IFeedState) => state.errorMessages
);
export const selectIsError = createSelector(
  selectFeature,
  (state: fromModels.IFeedState) => state.error
);
