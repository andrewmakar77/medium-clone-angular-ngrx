import { createAction, props } from '@ngrx/store';

import * as fromModels from 'src/app/models';
import * as fromActionTypes from 'src/app/modules/feed/store/action-types/feed.action-types';

export const getFeedAction = createAction(
  fromActionTypes.FeedActionTypes.GET_FEED,
  props<{ url: string }>()
);

export const getFeedSuccessAction = createAction(
  fromActionTypes.FeedActionTypes.GET_FEED_SUCCESS,
  props<{ articles: fromModels.IArticle[] }>()
);

export const getFeedFailureAction = createAction(
  fromActionTypes.FeedActionTypes.GET_FEED_FAILURE,
  props<{ errors: fromModels.IBackendErrorMap }>()
);

export const updateArticleAction = createAction(
  fromActionTypes.UpdateAcrticleActionTypes.UPDATE_ARTICLE,
  props<{ article: fromModels.IArticle }>()
);

export const updateArticleSuccessAction = createAction(
  fromActionTypes.UpdateAcrticleActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{ article: fromModels.IArticle }>()
);

export const updateArticleFailureAction = createAction(
  fromActionTypes.UpdateAcrticleActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{ errors: fromModels.IBackendErrorMap }>()
);
