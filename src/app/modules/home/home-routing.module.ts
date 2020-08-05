import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/modules/home/components/home/home.component';
import { ERoutes } from 'src/app/models';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: `${ERoutes.GLOBAL_FEED}` },
      {
        path: `${ERoutes.GLOBAL_FEED}`,
        loadChildren: () =>
          import('../global-feed/global-feed.module').then(
            (m) => m.GlobalFeedModule
          ),
      },
      {
        path: `${ERoutes.MY_FEED}`,
        loadChildren: () =>
          import('../my-feed/my-feed.module').then((m) => m.MyFeedModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
