import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { AuthActionTypes } from 'src/app/modules/auth/store/auth.action-types';
import { IRegisterRequestData, IAuthResponseData } from 'src/app/models';
import { registerSuccessAction, registerFailureAction } from 'src/app/modules/auth/store/auth.actions';

@Injectable()
export class AuthEffects {
  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActionTypes.REGISTER),
      mergeMap((data: IRegisterRequestData) =>
        this.authService.register(data).pipe(
          map((user: IAuthResponseData) => registerSuccessAction(user)),
          catchError((err: HttpErrorResponse) => of(registerFailureAction(err.error)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
