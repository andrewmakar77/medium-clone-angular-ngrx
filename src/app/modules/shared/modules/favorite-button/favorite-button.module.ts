import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteButtonComponent } from 'src/app/modules/shared/modules/favorite-button/components/favorite-button/favorite-button.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FavoriteButtonComponent],
  imports: [CommonModule, MatBadgeModule, MatIconModule, MatButtonModule],
  exports: [FavoriteButtonComponent],
})
export class FavoriteButtonModule {}
