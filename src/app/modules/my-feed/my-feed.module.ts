import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFeedRoutingModule } from 'src/app/modules/my-feed/my-feed-routing.module';
import { MyFeedComponent } from 'src/app/modules/my-feed/components/my-feed/my-feed.component';

@NgModule({
  declarations: [MyFeedComponent],
  imports: [CommonModule, MyFeedRoutingModule],
})
export class MyFeedModule {}
