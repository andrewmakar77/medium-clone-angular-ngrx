import { NgModule } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { TopbarModule } from 'src/app/modules/topbar/topbar.module';

@NgModule({
  providers: [TitleCasePipe],
  imports: [TopbarModule],
  exports: [TopbarModule],
})
export class SharedModule {}
