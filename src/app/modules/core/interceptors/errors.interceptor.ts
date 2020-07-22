import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpEvent,
} from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'src/app/modules/shared/services/local-storage.service';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import * as fromModels from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class ErrorsInterceptor implements HttpInterceptor {
  public readonly loginLink = `/${fromModels.ERoutes.AUTH}/${fromModels.ERoutes.LOGIN}`;

  constructor(
    private snackbar: SnackbarService,
    private translateService: TranslateService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        () => {},
        (error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.snackbar.error(
              this.translateService.instant('SNACKBAR.ERRORS.UNAUTHORIZED')
            );
            this.router.navigate([this.loginLink]);
            this.localStorageService.removeItem(
              fromModels.ELocalStorageKeys.ACCESS_TOKEN
            );
          }

          this.snackbar.error(
            this.translateService.instant(
              'SNACKBAR.ERRORS.SOMETHING_WENT_WRONG'
            )
          );
        }
      )
    );
  }
}
