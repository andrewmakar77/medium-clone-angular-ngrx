import { Action, createReducer, on } from '@ngrx/store';

import * as fromActions from 'src/app/modules/tags/store/actions/tags.actions';
import * as fromModels from 'src/app/models';

export const tagsFeatureKey = 'tags';

export const initialState: fromModels.ITagsState = {
  loaded: null,
  loading: null,
  error: null,
  errorMessages: {},
  data: [] as string[],
};

const reducer = createReducer(
  initialState,
  on(fromActions.tagsAction, (state: fromModels.ITagsState) => ({
    ...state,
    loaded: false,
    loading: true,
    error: false,
    errorMessages: {},
    data: [] as string[],
  })),
  on(
    fromActions.tagsSuccessAction,
    (state: fromModels.ITagsState, { tags }: { tags: string[] }) => ({
      ...state,
      loaded: true,
      loading: false,
      error: false,
      data: [...tags],
    })
  ),
  on(
    fromActions.tagsFailureAction,
    (
      state: fromModels.ITagsState,
      { errors }: { errors: fromModels.IBackendErrorMap }
    ) => ({
      ...state,
      loaded: false,
      loading: false,
      error: true,
      errorMessages: errors || {},
      data: [] as string[],
    })
  )
);

export function tagsReducer(state: fromModels.ITagsState, action: Action) {
  return reducer(state, action);
}
