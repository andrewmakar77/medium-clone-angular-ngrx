import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/modules/shared/services/local-storage.service';
import * as fromModels from 'src/app/models';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.localStorageService.get(
      fromModels.ELocalStorageKeys.ACCESS_TOKEN
    );

    if (token) {
      request = request.clone({
        headers: request.headers.set(
          fromModels.EHttpHeadersKeys.AUTHORIZATION,
          `Token ${token}`
        ),
      });
    }
    return next.handle(request);
  }
}
