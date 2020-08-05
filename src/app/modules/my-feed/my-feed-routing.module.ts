import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFeedComponent } from 'src/app/modules/my-feed/components/my-feed/my-feed.component';

const routes: Routes = [{ path: '', component: MyFeedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFeedRoutingModule {}
