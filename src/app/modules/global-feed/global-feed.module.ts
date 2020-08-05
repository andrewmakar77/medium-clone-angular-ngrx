import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalFeedRoutingModule } from 'src/app/modules/global-feed/global-feed-routing.module';
import { GlobalFeedComponent } from 'src/app/modules/global-feed/components/global-feed/global-feed.component';

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [CommonModule, GlobalFeedRoutingModule],
})
export class GlobalFeedModule {}
