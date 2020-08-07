import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ApiUrlGenerator } from 'src/app/utils';
import { IArticle } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class FavoriteArticleService {
  constructor(private http: HttpClient) {}

  private apiFavoriteUrl(id: string): string {
    return ApiUrlGenerator.generate(`articles/${id}/favorite`);
  }

  unFavorite(id: string): Observable<{ article: IArticle }> {
    return this.http.delete<{ article: IArticle }>(this.apiFavoriteUrl(id));
  }

  favorite(id: string): Observable<{ article: IArticle }> {
    return this.http.post<{ article: IArticle }>(this.apiFavoriteUrl(id), {});
  }
}
