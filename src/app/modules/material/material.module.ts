import { NgModule } from '@angular/core';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import * as fromConfigs from 'src/app/modules/material/configs';

@NgModule({
  imports: [MatSnackBarModule],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: fromConfigs.FORM_FIELD_CONFIG,
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: fromConfigs.SNACKBAR_CONFIG,
    },
  ],
})
export class MaterialModule {}
