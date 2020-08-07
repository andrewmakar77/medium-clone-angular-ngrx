import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedItemComponent } from 'src/app/modules/feed-item/components/feed-item/feed-item.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { TranslateModule } from '@ngx-translate/core';
import { FavoriteButtonModule } from 'src/app/modules/shared/modules/favorite-button/favorite-button.module';

@NgModule({
  declarations: [FeedItemComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatChipsModule,
    TranslateModule.forChild(),
    FavoriteButtonModule,
  ],
  exports: [FeedItemComponent],
})
export class FeedItemModule {}
