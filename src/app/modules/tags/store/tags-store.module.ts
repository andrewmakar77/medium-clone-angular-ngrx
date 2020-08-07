import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from 'src/app/modules/tags/store/reducers/tags.reducer';
import { TagsEffects } from 'src/app/modules/tags/store/effects/tags.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(fromReducer.tagsFeatureKey, fromReducer.tagsReducer),
    EffectsModule.forFeature([TagsEffects]),
  ],
})
export class TagsStoreModule {}
