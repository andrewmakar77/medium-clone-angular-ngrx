import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FeedService } from 'src/app/modules/feed/services/feed.service';
import { FavoriteArticleService } from 'src/app/modules/shared/modules/favorite-button/services/favorite-article.service';
import * as fromModels from 'src/app/models';
import * as fromActionTypes from 'src/app/modules/feed/store/action-types/feed.action-types';
import * as fromActions from 'src/app/modules/feed/store/actions/feed.actions';

@Injectable()
export class FeedEffects {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActionTypes.FeedActionTypes.GET_FEED),
      switchMap(({ url }: { url: string }) =>
        this.feedService.getFeed(url).pipe(
          map(({ articles }: fromModels.IFeedResponseData) => {
            return fromActions.getFeedSuccessAction({ articles });
          }),
          catchError((err: HttpErrorResponse) =>
            of(fromActions.getFeedFailureAction(err.error))
          )
        )
      )
    )
  );

  favoriteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActionTypes.UpdateAcrticleActionTypes.UPDATE_ARTICLE),
      switchMap(
        ({ article: articleItem }: { article: fromModels.IArticle }) => {
          if (articleItem.favorited) {
            return this.favoriteArticleService
              .unFavorite(articleItem.slug)
              .pipe(
                map(({ article }: { article: fromModels.IArticle }) => {
                  return fromActions.updateArticleSuccessAction({ article });
                }),
                catchError((err: HttpErrorResponse) =>
                  of(fromActions.updateArticleFailureAction(err.error))
                )
              );
          } else {
            return this.favoriteArticleService.favorite(articleItem.slug).pipe(
              map(({ article }: { article: fromModels.IArticle }) => {
                return fromActions.updateArticleSuccessAction({ article });
              }),
              catchError((err: HttpErrorResponse) =>
                of(fromActions.updateArticleFailureAction(err.error))
              )
            );
          }
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private feedService: FeedService,
    private favoriteArticleService: FavoriteArticleService
  ) {}
}
