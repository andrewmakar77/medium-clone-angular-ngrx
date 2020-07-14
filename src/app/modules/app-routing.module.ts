import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ERoutes } from 'src/app/models';

const routes: Routes = [
  {
    path: `${ERoutes.AUTH}`,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
