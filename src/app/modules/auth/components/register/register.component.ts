import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as fromValidators from 'src/app/validators';
import * as fromModels from 'src/app/models';
import { ValidationService } from 'src/app/modules/shared/services/validation.service';
import { AuthFacade } from 'src/app/modules/auth/store/facades/auth.facade';
import { Observable } from 'rxjs';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  public link = `/${fromModels.ERoutes.AUTH}/${fromModels.ERoutes.LOGIN}`;
  public form: FormGroup;
  public user$: Observable<fromModels.IUserResponse> = this.authFacade.user$;
  public isLoading$: Observable<boolean> = this.authFacade.isLoading$;
  public isError$: Observable<boolean> = this.authFacade.isError$;
  public errorMessages$: Observable<fromModels.IBackendErrorMap> = this
    .authFacade.errorMessages$;

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade,
    public validationService: ValidationService,
    private snackbar: SnackbarService
  ) {}

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
    if (this.form.invalid) {
      return;
    }

    const requestData: fromModels.IRegisterRequestData = {
      user: this.form.value,
    };

    this.authFacade.register(requestData);
  }
}
