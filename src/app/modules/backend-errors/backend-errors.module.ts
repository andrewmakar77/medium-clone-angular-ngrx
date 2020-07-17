import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { BackendErrorsComponent } from 'src/app/modules/backend-errors/components/backend-errors/backend-errors.component';

@NgModule({
  declarations: [BackendErrorsComponent],
  imports: [CommonModule, MatFormFieldModule],
  exports: [BackendErrorsComponent],
})
export class BackendErrorsModule {}
