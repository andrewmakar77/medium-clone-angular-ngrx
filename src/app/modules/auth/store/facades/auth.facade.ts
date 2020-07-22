import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromActions from 'src/app/modules/auth/store/actions/auth.actions';
import * as fromModels from 'src/app/models';
import * as fromSelectors from 'src/app/modules/auth/store/selectors/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  public user$: Observable<fromModels.IUserResponse> = this.store.pipe(
    select(fromSelectors.selectUser)
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

  public register(data: fromModels.IRegisterRequestData): void {
    this.store.dispatch(fromActions.registerAction(data));
  }

  public login(data: fromModels.ILoginRequestData): void {
    this.store.dispatch(fromActions.loginAction(data));
  }

  public getUser(): void {
    this.store.dispatch(fromActions.getUserAction());
  }
}
