import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ERoutes } from 'src/app/models';
import { NonAuthGuard } from 'src/app/modules/core/guards/non-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: `${ERoutes.GLOBAL_FEED}`,
    pathMatch: 'full',
  },
  {
    path: `${ERoutes.GLOBAL_FEED}`,
    loadChildren: () =>
      import('./global-feed/global-feed.module').then(
        (m) => m.GlobalFeedModule
      ),
  },
  {
    path: `${ERoutes.AUTH}`,
    canActivate: [NonAuthGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
