import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromModels from 'src/app/models';
import { tagsFeatureKey } from 'src/app/modules/tags/store/reducers/tags.reducer';

export const selectFeature = createFeatureSelector<
  fromModels.IAppState,
  fromModels.ITagsState
>(tagsFeatureKey);

export const selectTags = createSelector(
  selectFeature,
  (state: fromModels.ITagsState) => state.data
);
export const selectIsLoading = createSelector(
  selectFeature,
  (state: fromModels.ITagsState) => state.loading
);
export const selectIsLoaded = createSelector(
  selectFeature,
  (state: fromModels.ITagsState) => state?.loaded
);
export const selectErrorMessages = createSelector(
  selectFeature,
  (state: fromModels.ITagsState) => state.errorMessages
);
export const selectIsError = createSelector(
  selectFeature,
  (state: fromModels.ITagsState) => state.error
);
