import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopbarComponent } from 'src/app/modules/topbar/components/topbar/topbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TopbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    TranslateModule.forChild(),
    MatButtonModule,
    MatIconModule,
  ],
  exports: [TopbarComponent],
})
export class TopbarModule {}
