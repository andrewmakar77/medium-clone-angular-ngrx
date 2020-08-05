import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedComponent } from 'src/app/modules/feed/components/feed/feed.component';
import { FeedStoreModule } from 'src/app/modules/feed/store/feed-store.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, FeedStoreModule],
  exports: [FeedComponent],
})
export class FeedModule {}
