import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from 'src/app/modules/auth/components/register/register.component';
import { ERoutes } from 'src/app/models';

const routes: Routes = [
  { path: '', redirectTo: `${ERoutes.REGISTER}` },
  { path: `${ERoutes.REGISTER}`, component: RegisterComponent },
  { path: `${ERoutes.LOGIN}`, component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
