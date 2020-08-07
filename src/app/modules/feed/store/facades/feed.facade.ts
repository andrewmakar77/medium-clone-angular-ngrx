import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromActions from 'src/app/modules/feed/store/actions/feed.actions';
import * as fromModels from 'src/app/models';
import * as fromSelectors from 'src/app/modules/feed/store/selectors/feed.selectors';

@Injectable({
  providedIn: 'root',
})
export class FeedFacade {
  public feed$: Observable<fromModels.IArticle[]> = this.store.pipe(
    select(fromSelectors.selectFeed)
  );
  public isLoading$: Observable<boolean> = this.store.pipe(
    select(fromSelectors.selectIsLoading)
  );
  public isLoaded$: Observable<boolean> = this.store.pipe(
    select(fromSelectors.selectIsLoaded)
  );
  public isError$: Observable<boolean> = this.store.pipe(
    select(fromSelectors.selectIsError)
  );
  public errorMessages$: Observable<
    fromModels.IBackendErrorMap
  > = this.store.pipe(select(fromSelectors.selectErrorMessages));

  constructor(private store: Store<fromModels.IAppState>) {}

  public getFeed(url: string): void {
    this.store.dispatch(fromActions.getFeedAction({ url }));
  }

  public favoriteArticle(article: fromModels.IArticle): void {
    this.store.dispatch(fromActions.updateArticleAction({ article }));
  }
}
