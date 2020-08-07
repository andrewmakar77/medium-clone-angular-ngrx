import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromActions from 'src/app/modules/tags/store/actions/tags.actions';
import * as fromModels from 'src/app/models';
import * as fromSelectors from 'src/app/modules/tags/store/selectors/tags.selectors';

@Injectable({
  providedIn: 'root',
})
export class TagsFacade {
  public tags$: Observable<string[]> = this.store.pipe(
    select(fromSelectors.selectTags)
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

  public getTags(): void {
    this.store.dispatch(fromActions.tagsAction());
  }
}
