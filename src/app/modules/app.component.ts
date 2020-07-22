import { Component } from '@angular/core';
import { AuthFacade } from 'src/app/modules/auth/store/facades/auth.facade';

import { Observable } from 'rxjs';
import { IUserResponse } from 'src/app/models';

@Component({
  selector: 'mc-root',
  template: `
    <mc-topbar
      [user]="user$ | async"
      [isLoaded]="isUserLoaded$ | async"
    ></mc-topbar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  public isUserLoaded$: Observable<boolean> = this.authFacade.isLoaded$;
  public user$: Observable<IUserResponse> = this.authFacade.user$;

  constructor(private authFacade: AuthFacade) {}
}
