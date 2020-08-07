import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

import * as fromModels from 'src/app/models';
import { FeedFacade } from 'src/app/modules/feed/store/facades/feed.facade';

@Component({
  selector: 'mc-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedItemComponent {
  @Input() public article: fromModels.IArticle;

  public readonly imageFallback =
    'https://static.productionready.io/images/smiley-cyrus.jpg';

  constructor(private feedFacade: FeedFacade, private router: Router) {}

  public onFavorite(article: fromModels.IArticle): void {
    this.feedFacade.favoriteArticle(article);
  }

  public onReadMore(id: string): void {
    this.router.navigate([`/${fromModels.ERoutes.ARTICLE}/${id}`]);
  }

  public onNavigateToProfile(username: string): void {
    this.router.navigate([`/${fromModels.ERoutes.PROFILE}/${username}`]);
  }

  public trackTag(index: number, tag: string): string {
    return `${tag}-${index}`;
  }
}
