import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as fromValidators from 'src/app/validators';
import { ValidationService } from 'src/app/modules/shared/services/validation.service';
import { AuthFacade } from 'src/app/modules/auth/store/auth.facade';
import { ERoutes, IRegisterRequestData, IUserResponse } from 'src/app/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  public link = `/${ERoutes.AUTH}/${ERoutes.LOGIN}`;
  public form: FormGroup;
  public user$: Observable<IUserResponse> = this.authFacade.user$;

  constructor(private fb: FormBuilder, public validationService: ValidationService, private authFacade: AuthFacade) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({
      username: ['', fromValidators.USERNAME_VALIDATORS],
      email: ['', fromValidators.EMAIL_VALIDATORS],
      password: ['', fromValidators.PASSWORD_VALIDATORS],
    });
  }

  public onSubmit(): void {
    const requestData: IRegisterRequestData = { user: this.form.value };

    this.authFacade.register(requestData);
  }
}
