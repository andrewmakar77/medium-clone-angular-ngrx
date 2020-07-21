import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthFacade } from 'src/app/modules/auth/store/facades/auth.facade';
import { ValidationService } from 'src/app/modules/shared/services/validation.service';
import * as fromValidators from 'src/app/validators';
import * as fromModels from 'src/app/models';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public link = `/${fromModels.ERoutes.AUTH}/${fromModels.ERoutes.REGISTER}`;
  public form: FormGroup;
  public user$: Observable<fromModels.IUserResponse> = this.authFacade.user$;
  public isLoading$: Observable<boolean> = this.authFacade.isLoading$;
  public isError$: Observable<boolean> = this.authFacade.isError$;
  public errorMessages$: Observable<fromModels.IBackendErrorMap> = this
    .authFacade.errorMessages$;

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade,
    public validationService: ValidationService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({
      email: ['', fromValidators.EMAIL_VALIDATORS],
      password: ['', fromValidators.PASSWORD_VALIDATORS],
    });
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const requestData: fromModels.ILoginRequestData = {
      user: this.form.value,
    };

    this.authFacade.login(requestData);
  }
}
