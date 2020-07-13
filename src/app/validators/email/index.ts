import { Validators } from '@angular/forms';

export const EMAIL_VALIDATORS = [
  Validators.email,
  Validators.minLength(5),
  Validators.maxLength(255),
  Validators.required,
];
