import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from 'src/app/modules/auth/components/register/register.component';
import { ROUTES } from 'src/app/constants';

const routes: Routes = [
  { path: '', redirectTo: `${ROUTES.REGISTER}` },
  { path: `${ROUTES.REGISTER}`, component: RegisterComponent },
  { path: `${ROUTES.LOGIN}`, component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
