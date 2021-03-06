import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';

import * as fromModels from 'src/app/models';

@Component({
  selector: 'mc-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent implements OnInit {
  @Input() public isLoaded: boolean;
  @Input() public user: fromModels.IUserResponse;

  public readonly homeLink = fromModels.ERoutes.HOME;
  public readonly loginLink = `${fromModels.ERoutes.AUTH}/${fromModels.ERoutes.LOGIN}`;
  public readonly registerLink = `${fromModels.ERoutes.AUTH}/${fromModels.ERoutes.REGISTER}`;
  public readonly editorLink = `${fromModels.ERoutes.EDITOR}`;
  public readonly settingsLink = `${fromModels.ERoutes.SETTINGS}`;
  public profileLink: string;

  ngOnInit() {
    this.profileLink = `${fromModels.ERoutes.PROFILE}/${this.user.username}`;
  }
}
