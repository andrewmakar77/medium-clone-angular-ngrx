import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { LocalStorageService } from 'src/app/modules/shared/services/local-storage.service';
import { AuthActionTypes } from 'src/app/modules/auth/store/auth.action-types';
import * as fromModels from 'src/app/models';
import * as fromActions from 'src/app/modules/auth/store/auth.actions';

@Injectable()
export class AuthEffects {
  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.REGISTER),
      mergeMap((data: fromModels.IRegisterRequestData) =>
        this.authService.register(data).pipe(
          map((userResponseData: fromModels.IAuthResponseData) => {
            this.localSotrageService.set(
              fromModels.ELocalStorageKeys.ACCESS_TOKEN,
              userResponseData.user.token
            );
            return fromActions.registerSuccessAction(userResponseData);
          }),
          catchError((err: HttpErrorResponse) =>
            of(fromActions.registerFailureAction(err.error))
          )
        )
      )
    )
  );

  redirectToHomePage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.registerSuccessAction),
        tap(() => this.router.navigate([fromModels.ERoutes.HOME]))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private localSotrageService: LocalStorageService,
    private router: Router
  ) {}
}
