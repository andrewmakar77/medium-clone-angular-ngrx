import { Validators } from '@angular/forms';

export const USERNAME_VALIDATORS = [
  Validators.minLength(3),
  Validators.maxLength(255),
  Validators.required,
];
