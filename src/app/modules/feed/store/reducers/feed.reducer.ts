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
  ),
  on(fromActions.updateArticleAction, (state: fromModels.IFeedState) => ({
    ...state,
    error: false,
    errorMessages: {},
  })),
  on(
    fromActions.updateArticleSuccessAction,
    (state: fromModels.IFeedState, { article }: { article: IArticle }) => {
      const articleIndex = state.data.findIndex(
        (item: IArticle) => item.slug === article.slug
      );

      const updatedArticle = { ...state.data[articleIndex], ...article };

      const updatedArticles = [
        ...state.data.slice(0, articleIndex),
        updatedArticle,
        ...state.data.slice(articleIndex + 1),
      ];
      return {
        ...state,
        loaded: true,
        loading: false,
        error: false,
        data: [...updatedArticles],
      };
    }
  ),
  on(
    fromActions.updateArticleFailureAction,
    (
      state: fromModels.IFeedState,
      { errors }: { errors: fromModels.IBackendErrorMap }
    ) => ({
      ...state,
      loaded: false,
      loading: false,
      error: true,
      errorMessages: errors || {},
    })
  )
);

export function feedReducer(state: fromModels.IFeedState, action: Action) {
  return reducer(state, action);
}
