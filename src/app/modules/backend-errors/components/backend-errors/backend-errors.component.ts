import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { IBackendErrorMap } from 'src/app/models';
import { BackendErrorsService } from 'src/app/modules/backend-errors/services/backend-errors.service';

@Component({
  selector: 'mc-backend-errors',
  templateUrl: './backend-errors.component.html',
  styleUrls: ['./backend-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackendErrorsComponent {
  @Input() public isError: boolean;
  @Input() public set errorMessages(errorsMap: IBackendErrorMap) {
    this.backendErrorsService.mapErrors(errorsMap);
  }

  constructor(public backendErrorsService: BackendErrorsService) {}

  public trackByError(index: number, error: string): string {
    return error;
  }
}
