import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ApiUrlGenerator } from 'src/app/utils';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  constructor(private http: HttpClient) {}

  getTags(): Observable<{ tags: string[] }> {
    return this.http.get<{ tags: string[] }>(ApiUrlGenerator.generate('tags'));
  }
}
