import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { LocalStorageService } from 'src/app/modules/shared/services/local-storage.service';
import { AuthActionTypes } from 'src/app/modules/auth/store/action-types/auth.action-types';
import * as fromModels from 'src/app/models';
import * as fromActions from 'src/app/modules/auth/store/actions/auth.actions';

@Injectable()
export class AuthEffects {
  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.REGISTER),
      switchMap(({ user }: fromModels.IRegisterRequestData) =>
        this.authService.register({ user }).pipe(
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

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.LOGIN),
      switchMap(({ user }: fromModels.ILoginRequestData) =>
        this.authService.login({ user }).pipe(
          map((userResponseData: fromModels.IAuthResponseData) => {
            this.localSotrageService.set(
              fromModels.ELocalStorageKeys.ACCESS_TOKEN,
              userResponseData.user.token
            );
            return fromActions.loginSuccessAction(userResponseData);
          }),
          catchError((err: HttpErrorResponse) =>
            of(fromActions.loginFailureAction(err.error))
          )
        )
      )
    )
  );

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.GET_USER),
      switchMap(() => {
        const token = this.localSotrageService.get(
          fromModels.ELocalStorageKeys.ACCESS_TOKEN
        );

        if (!token) {
          return of(fromActions.getUserFailureAction());
        }
        return this.authService.getUser().pipe(
          map((userResponseData: fromModels.IAuthResponseData) =>
            fromActions.getUserSuccessAction(userResponseData)
          ),
          catchError(() => {
            console.log('errr');

            return of(fromActions.getUserFailureAction());
          })
        );
      })
    )
  );

  redirectToHomePage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActionTypes.REGISTER_SUCCESS, AuthActionTypes.LOGIN_SUCCESS),
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
