import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';

import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  private controls:
    | AbstractControl[]
    | {
        [key: string]: AbstractControl;
      } = [];
  private controlName: string;

  constructor(
    private titleCasePipe: TitleCasePipe,
    private translateService: TranslateService
  ) {}

  private setControls(control: AbstractControl): void {
    this.controls = control.parent.controls;
  }

  private setControlName(control: AbstractControl): void {
    this.controlName = Object.keys(this.controls).find(
      (name) => control === this.controls[name]
    );

    this.capitalizeControlName();
  }

  private capitalizeControlName(): void {
    this.controlName = this.titleCasePipe.transform(this.controlName);
  }

  public getErrorMessage(control: AbstractControl): string {
    const requiredMinLength = control.errors.minlength?.requiredLength;
    const requiredMaxLength = control.errors.maxlength?.requiredLength;

    this.setControls(control);
    this.setControlName(control);

    const config = {
      required: this.translateService.instant('FORM.REQUIRED', {
        value: this.translateService.instant(this.controlName),
      }),
      email: this.translateService.instant('FORM.INVALID', {
        value: this.translateService.instant(this.controlName),
      }),
      minlength: this.translateService.instant('FORM.TOO_SHORT', {
        value: requiredMinLength,
      }),
      maxlength: this.translateService.instant('FORM.TOO_LONG', {
        value: requiredMaxLength,
      }),
    };

    for (const propertyName in control.errors) {
      if (control.errors.hasOwnProperty(propertyName) && control.touched) {
        return config[propertyName];
      }
    }

    return null;
  }
}
