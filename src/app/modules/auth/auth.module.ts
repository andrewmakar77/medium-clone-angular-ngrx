import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from 'src/app/modules/auth/components/register/register.component';
import { AuthRoutingModule } from 'src/app/modules/auth/auth-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthStoreModule } from 'src/app/modules/auth/store/auth-store.module';
import { BackendErrorsModule } from 'src/app/modules/backend-errors/backend-errors.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    AuthStoreModule,
    BackendErrorsModule,
  ],
})
export class AuthModule {}
