import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
  public feed: IArticle[] = [];

  constructor(private feedFacade: FeedFacade) {}

  ngOnInit(): void {
    this.feedFacade.getFeed(this.apiUrl);
    this.feed$.subscribe((feed: IArticle[]) => (this.feed = feed));
  }

  drop(event: CdkDragDrop<IArticle[]>) {
    moveItemInArray(this.feed, event.previousIndex, event.currentIndex);
  }

  public trackItem(index: number, item: IArticle): string {
    return item.slug;
  }
}
