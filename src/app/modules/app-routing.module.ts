import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ERoutes } from 'src/app/models';
import { NonAuthGuard } from 'src/app/modules/core/guards/non-auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
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
