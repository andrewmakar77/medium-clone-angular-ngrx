import { Action, createReducer, on } from '@ngrx/store';

import * as fromActions from 'src/app/modules/feed/store/actions/feed.actions';
import * as fromModels from 'src/app/models';
import { IArticle } from 'src/app/models';

export const feedFeatureKey = 'feed';

export const initialState: fromModels.IFeedState = {
  loaded: null,
  loading: null,
  error: null,
  errorMessages: {},
  data: [] as IArticle[],
};

const reducer = createReducer(
  initialState,
  on(fromActions.getFeedAction, (state: fromModels.IFeedState) => ({
    ...state,
    loaded: false,
    loading: true,
    error: false,
    errorMessages: {},
    data: [] as fromModels.IArticle[],
  })),
  on(
    fromActions.getFeedSuccessAction,
    (state: fromModels.IFeedState, { articles }: { articles: IArticle[] }) => ({
      ...state,
      loaded: true,
      loading: false,
      error: false,
      data: [...articles],
    })
  ),
  on(
    fromActions.getFeedFailureAction,
    (
      state: fromModels.IFeedState,
      { errors }: { errors: fromModels.IBackendErrorMap }
    ) => ({
      ...state,
      loaded: false,
      loading: false,
      error: true,
      errorMessages: errors || {},
      data: [] as fromModels.IArticle[],
    })
  )
);

export function feedReducer(state: fromModels.IFeedState, action: Action) {
  return reducer(state, action);
}
