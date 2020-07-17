import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { registerAction } from 'src/app/modules/auth/store/auth.actions';
import {
  IAppState,
  IRegisterRequestData,
  IUserResponse,
  IBackendErrorMap,
} from 'src/app/models';
import * as fromAuthSelectors from 'src/app/modules/auth/store/auth.selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  public user$: Observable<IUserResponse> = this.store.pipe(
    select(fromAuthSelectors.selectUser)
  );
  public isLoading$: Observable<boolean> = this.store.pipe(
    select(fromAuthSelectors.selectIsLoading)
  );
  public isLoaded$: Observable<boolean> = this.store.pipe(
    select(fromAuthSelectors.selectIsLoaded)
  );
  public isError$: Observable<boolean> = this.store.pipe(
    select(fromAuthSelectors.selectIsError)
  );
  public errorMessages$: Observable<IBackendErrorMap> = this.store.pipe(
    select(fromAuthSelectors.selectErrorMessages)
  );

  constructor(private store: Store<IAppState>) {}

  public register(data: IRegisterRequestData): void {
    this.store.dispatch(registerAction(data));
  }
}
