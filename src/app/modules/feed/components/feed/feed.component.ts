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
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit {
  @Input() public apiUrl: string;

  public feed$: Observable<IArticle[]> = this.feedFacade.feed$;
  public isLoading$: Observable<boolean> = this.feedFacade.isLoading$;

  constructor(private feedFacade: FeedFacade) {}

  ngOnInit(): void {
    this.feedFacade.getFeed(this.apiUrl);
  }

  public trackItem(index: number, item: IArticle): string {
    return item.slug;
  }
}
