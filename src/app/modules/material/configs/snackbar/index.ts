import { MatSnackBarConfig } from '@angular/material/snack-bar';

export const SNACKBAR_CONFIG: MatSnackBarConfig = {
  duration: 2500,
  horizontalPosition: 'end',
  verticalPosition: 'bottom',
  panelClass: ['mat-toolbar', 'mat-primary'],
};
