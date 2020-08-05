import { Component } from '@angular/core';

@Component({
  selector: 'mc-my-feed',
  templateUrl: './my-feed.component.html',
})
export class MyFeedComponent {
  public readonly apiUrl = 'articles/feed?limit=10&offset=0';
}
