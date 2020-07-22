import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthStoreModule } from 'src/app/modules/auth/store/auth-store.module';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    AuthStoreModule,
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
})
export class AppStore {}
