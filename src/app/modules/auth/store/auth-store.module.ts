import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { authReducer, authFeatureKey } from 'src/app/modules/auth/store/auth.reducer';
import { AuthEffects } from 'src/app/modules/auth/store/auth.effects';

@NgModule({
  imports: [StoreModule.forFeature(authFeatureKey, authReducer), EffectsModule.forFeature([AuthEffects])],
})
export class AuthStoreModule {}
