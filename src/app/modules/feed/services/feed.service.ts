import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ApiUrlGenerator } from 'src/app/utils';
import { IFeedResponseData } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private http: HttpClient) {}

  public getFeed(apiUrl: string): Observable<IFeedResponseData> {
    return this.http.get<IFeedResponseData>(ApiUrlGenerator.generate(apiUrl));
  }
}
