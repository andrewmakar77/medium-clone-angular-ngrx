import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as fromModels from 'src/app/models';
import { Observable } from 'rxjs';
import { ApiUrlGenerator } from 'src/app/utils/url-generator';
import { IAuthResponseData } from 'src/app/models/interfaces/auth-response-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public register(
    data: fromModels.IRegisterRequestData
  ): Observable<IAuthResponseData> {
    return this.http.post<IAuthResponseData>(
      ApiUrlGenerator.generate('users'),
      data
    );
  }

  public login(
    data: fromModels.ILoginRequestData
  ): Observable<IAuthResponseData> {
    return this.http.post<IAuthResponseData>(
      ApiUrlGenerator.generate('users/login'),
      data
    );
  }

  public getUser(): Observable<IAuthResponseData> {
    return this.http.get<IAuthResponseData>(ApiUrlGenerator.generate('user'));
  }
}
