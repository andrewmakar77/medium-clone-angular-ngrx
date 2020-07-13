import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, AuthRoutingModule, MatInputModule],
})
export class AuthModule {}
