import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { filter } from 'rxjs/operators';
import { ErrorsInterceptor } from 'src/app/modules/core/interceptors/errors.interceptor';
import { AuthInterceptor } from 'src/app/modules/core/interceptors/auth.interceptor';
import { AuthFacade } from 'src/app/modules/auth/store/facades/auth.facade';
import { Subscription } from 'rxjs';

export function getUserBeforeAppInit(authFacade: AuthFacade) {
  return (): Promise<boolean> => {
    const subscription: Subscription = new Subscription();
    authFacade.getUser();

    return new Promise<boolean>((resolve) => {
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
      deps: [AuthFacade],
      useFactory: getUserBeforeAppInit,
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class CoreModule {}
