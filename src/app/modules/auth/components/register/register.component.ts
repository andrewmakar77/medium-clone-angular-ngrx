import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ROUTES } from 'src/app/constants';
import {
  EMAIL_VALIDATORS,
  USERNAME_VALIDATORS,
  PASSWORD_VALIDATORS,
} from 'src/app/validators';
import { ValidationService } from 'src/app/modules/core/services/validation.service';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  public link = `/${ROUTES.AUTH}/${ROUTES.LOGIN}`;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public validationService: ValidationService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({
      username: ['', USERNAME_VALIDATORS],
      email: ['', EMAIL_VALIDATORS],
      password: ['', PASSWORD_VALIDATORS],
    });
  }

  public onSubmit(): void {
    console.log(this.form.value);
  }
}
