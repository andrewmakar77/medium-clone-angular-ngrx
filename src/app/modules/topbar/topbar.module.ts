import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TopbarComponent } from 'src/app/modules/topbar/components/topbar/topbar.component';

@NgModule({
  declarations: [TopbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    TranslateModule.forChild(),
    MatButtonModule,
  ],
  exports: [TopbarComponent],
})
export class TopbarModule {}
