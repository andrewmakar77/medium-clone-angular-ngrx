import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedService } from 'src/app/modules/feed/services/feed.service';
import { FeedActionTypes } from 'src/app/modules/feed/store/action-types/feed.action-types';
import { IFeedResponseData } from 'src/app/models';
import * as fromActions from 'src/app/modules/feed/store/actions/feed.actions';

@Injectable()
export class FeedEffects {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeedActionTypes.GET_FEED),
      switchMap(({ url }: { url: string }) =>
        this.feedService.getFeed(url).pipe(
          map(({ articles }: IFeedResponseData) => {
            return fromActions.getFeedSuccessAction({ articles });
          }),
          catchError((err: HttpErrorResponse) =>
            of(fromActions.getFeedFailureAction(err.error))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private feedService: FeedService) {}
}
