import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedItemComponent } from 'src/app/modules/feed-item/components/feed-item/feed-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FeedItemComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatChipsModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [FeedItemComponent],
})
export class FeedItemModule {}
