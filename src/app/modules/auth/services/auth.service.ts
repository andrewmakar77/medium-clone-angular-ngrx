import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IRegisterRequestData } from 'src/app/models';
import { Observable } from 'rxjs';
import { ApiUrlGenerator } from 'src/app/utils/url-generator';
import { IAuthResponseData } from 'src/app/models/interfaces/auth-response-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public register(data: IRegisterRequestData): Observable<IAuthResponseData> {
    return this.http.post<IAuthResponseData>(ApiUrlGenerator.generate('users'), data);
  }
}
