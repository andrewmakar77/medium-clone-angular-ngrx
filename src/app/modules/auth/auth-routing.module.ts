import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from 'src/app/modules/auth/components/register/register.component';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { ERoutes } from 'src/app/models';

const routes: Routes = [
  { path: '', redirectTo: `${ERoutes.REGISTER}` },
  { path: `${ERoutes.REGISTER}`, component: RegisterComponent },
  { path: `${ERoutes.LOGIN}`, component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
