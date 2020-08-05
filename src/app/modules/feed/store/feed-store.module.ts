import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from 'src/app/modules/feed/store/reducers/feed.reducer';
import { FeedEffects } from 'src/app/modules/feed/store/effects/feed.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(fromReducer.feedFeatureKey, fromReducer.feedReducer),
    EffectsModule.forFeature([FeedEffects]),
  ],
})
export class FeedStoreModule {}
