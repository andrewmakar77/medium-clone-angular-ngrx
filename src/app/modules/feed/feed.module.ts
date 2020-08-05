import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedComponent } from 'src/app/modules/feed/components/feed/feed.component';
import { FeedStoreModule } from 'src/app/modules/feed/store/feed-store.module';
import { FeedItemModule } from 'src/app/modules/feed-item/feed-item.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    FeedStoreModule,
    FeedItemModule,
    ScrollingModule,
    MatListModule,
    MatProgressSpinnerModule,
    DragDropModule,
  ],
  exports: [FeedComponent],
})
export class FeedModule {}
