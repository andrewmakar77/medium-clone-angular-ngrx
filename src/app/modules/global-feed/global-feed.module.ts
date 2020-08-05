import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalFeedRoutingModule } from 'src/app/modules/global-feed/global-feed-routing.module';
import { GlobalFeedComponent } from 'src/app/modules/global-feed/components/global-feed/global-feed.component';
import { FeedModule } from 'src/app/modules/feed/feed.module';

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [CommonModule, GlobalFeedRoutingModule, FeedModule],
})
export class GlobalFeedModule {}
