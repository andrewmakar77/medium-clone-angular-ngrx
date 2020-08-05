import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobalFeedComponent } from 'src/app/modules/global-feed/components/global-feed/global-feed.component';

const routes: Routes = [{ path: '', component: GlobalFeedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlobalFeedRoutingModule {}
