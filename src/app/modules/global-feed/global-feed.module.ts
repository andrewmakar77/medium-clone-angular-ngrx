import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalFeedRoutingModule } from 'src/app/modules/global-feed/global-feed-routing.module';

@NgModule({
  imports: [CommonModule, GlobalFeedRoutingModule],
})
export class GlobalFeedModule {}
