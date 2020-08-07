import { createAction, props } from '@ngrx/store';
import { TagsActionTypes } from 'src/app/modules/tags/store/action-types/tags.action-types';
import * as fromModels from 'src/app/models';

export const tagsAction = createAction(TagsActionTypes.GET_TAGS);

export const tagsSuccessAction = createAction(
  TagsActionTypes.GET_TAGS_SUCCESS,
  props<{ tags: string[] }>()
);

export const tagsFailureAction = createAction(
  TagsActionTypes.GET_TAGS_FAILURE,
  props<{ errors: fromModels.IBackendErrorMap }>()
);
