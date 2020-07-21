import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorsInterceptor implements HttpInterceptor {
  constructor(
    private snackbar: SnackbarService,
    private translateService: TranslateService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.snackbar.error(
          this.translateService.instant('SNACKBAR.ERRORS.SOMETHING_WENT_WRONG')
        );

        return of(error);
      })
    );
  }
}
