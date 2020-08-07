import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TagsComponent } from 'src/app/modules/tags/components/tags/tags.component';
import { TagsStoreModule } from 'src/app/modules/tags/store/tags-store.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [TagsComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    TagsStoreModule,
    MatCardModule,
    MatChipsModule,
  ],
  exports: [TagsComponent],
})
export class TagsModule {}
