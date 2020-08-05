import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { FeedFacade } from 'src/app/modules/feed/store/facades/feed.facade';
import { Observable } from 'rxjs';
import { IArticle } from 'src/app/models';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit {
  @Input() public apiUrl: string;

  public feed$: Observable<IArticle[]> = this.feedFacade.feed$;
  public isLoaded$: Observable<boolean> = this.feedFacade.isLoaded$;

  constructor(private feedFacade: FeedFacade) {}

  ngOnInit(): void {
    this.feedFacade.getFeed(this.apiUrl);
  }
}
