import { Validators } from '@angular/forms';

export const PASSWORD_VALIDATORS = [
  Validators.minLength(8),
  Validators.maxLength(255),
  Validators.required,
];
