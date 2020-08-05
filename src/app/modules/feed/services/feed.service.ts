import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ApiUrlGenerator } from 'src/app/utils/url-generator';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private http: HttpClient) {}

  public getFeed(apiUrl: string): Observable<any> {
    return this.http.get<any>(ApiUrlGenerator.generate(apiUrl));
  }
}
