import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { TagsService } from 'src/app/modules/tags/services/tags.service';
import * as fromActionTypes from 'src/app/modules/tags/store/action-types/tags.action-types';
import * as fromModels from 'src/app/models';
import * as fromActions from 'src/app/modules/tags/store/actions/tags.actions';

@Injectable()
export class TagsEffects {
  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActionTypes.TagsActionTypes.GET_TAGS),
      switchMap(() =>
        this.tagsService.getTags().pipe(
          map(({ tags }: { tags: string[] }) =>
            fromActions.tagsSuccessAction({ tags })
          ),
          catchError((err: HttpErrorResponse) =>
            of(fromActions.tagsFailureAction(err.error))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private tagsService: TagsService) {}
}
