import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { registerAction } from 'src/app/modules/auth/store/auth.actions';
import { IAppState, IRegisterRequestData, IUserResponse } from 'src/app/models';
import { selectUser } from 'src/app/modules/auth/store/auth.selectors';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  public user$: Observable<IUserResponse> = this.store.pipe(select(selectUser));

  constructor(private store: Store<IAppState>) {}

  public register(data: IRegisterRequestData): void {
    this.store.dispatch(registerAction(data));
  }
}
