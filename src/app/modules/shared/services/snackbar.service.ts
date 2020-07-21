import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}

  public success(message: string): void {
    this.snackbar.open(message, null, {
      panelClass: ['mat-toolbar', 'mat-primary'],
    });
  }

  public error(message: string): void {
    this.snackbar.open(message, null, {
      panelClass: ['mat-toolbar', 'mat-warn'],
    });
  }

  public dismiss(): void {
    this.snackbar.dismiss();
  }
}
