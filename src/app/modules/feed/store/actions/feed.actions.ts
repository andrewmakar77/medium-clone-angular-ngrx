import { createAction, props } from '@ngrx/store';

import * as fromModels from 'src/app/models';
import { FeedActionTypes } from 'src/app/modules/feed/store/action-types/feed.action-types';

export const getFeedAction = createAction(
  FeedActionTypes.GET_FEED,
  props<{ url: string }>()
);

export const getFeedSuccessAction = createAction(
  FeedActionTypes.GET_FEED_SUCCESS,
  props<any>()
);

export const getFeedFailureAction = createAction(
  FeedActionTypes.GET_FEED_FAILURE,
  props<{ errors: fromModels.IBackendErrorMap }>()
);
