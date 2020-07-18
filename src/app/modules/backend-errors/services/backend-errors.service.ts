import { Injectable } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { IBackendErrorMap } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class BackendErrorsService {
  public errors: string[] = [];

  constructor(private titleCasePipe: TitleCasePipe) {}

  public mapErrors(errorsMap: IBackendErrorMap): void {
    try {
      this.errors = Object.keys(errorsMap).map((name: string) => {
        return `${this.titleCasePipe.transform(name)} ${errorsMap[name]}`;
      });
    } catch (error) {
      console.error(`BackendService Error: ${error}`);
    }
  }
}
