import { NgModule } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { TabsModule } from 'src/app/modules/shared/modules/tabs/tabs.module';
import { TopbarModule } from 'src/app/modules/shared/modules/topbar/topbar.module';

@NgModule({
  providers: [TitleCasePipe],
  imports: [TopbarModule, TabsModule],
  exports: [TopbarModule, TabsModule],
})
export class SharedModule {}
