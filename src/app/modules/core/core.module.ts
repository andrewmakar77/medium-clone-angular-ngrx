import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ELocalStorageKeys } from 'src/app/models';
import { ErrorsInterceptor } from 'src/app/modules/core/interceptors/errors.interceptor';
import { AuthInterceptor } from 'src/app/modules/core/interceptors/auth.interceptor';
import { AuthFacade } from 'src/app/modules/auth/store/facades/auth.facade';
import { LocalStorageService } from 'src/app/modules/shared/services/local-storage.service';

export function getUserBeforeAppInit(
  authFacade: AuthFacade,
  localStorageService: LocalStorageService
) {
  return (): Promise<boolean> => {
    authFacade.getUser();

    return new Promise<boolean>((resolve) => {
      const subscription: Subscription = new Subscription();
      const token = localStorageService.get(ELocalStorageKeys.ACCESS_TOKEN);

      if (!token) {
        resolve(true);
      }

      const isLoadedSubscription = authFacade.isLoaded$
        .pipe(filter(Boolean))
        .subscribe((isLoaded: boolean) => {
          resolve(isLoaded);
          subscription.unsubscribe();
        });

      subscription.add(isLoadedSubscription);
    });
  };
}

@NgModule({
  providers: [
    AuthFacade,
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AuthFacade, LocalStorageService],
      useFactory: getUserBeforeAppInit,
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class CoreModule {}
