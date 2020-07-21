import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from 'src/app/modules/auth/store/reducers/auth.reducer';
import { AuthEffects } from 'src/app/modules/auth/store/effects/auth.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(fromReducer.authFeatureKey, fromReducer.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthStoreModule {}
