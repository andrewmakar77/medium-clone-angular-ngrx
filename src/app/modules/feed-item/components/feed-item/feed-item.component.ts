import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { IArticle } from 'src/app/models';

@Component({
  selector: 'mc-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedItemComponent {
  @Input() public item: IArticle;

  public trackTag(index: number, tag: string): string {
    return `${tag}-${index}`;
  }
}
