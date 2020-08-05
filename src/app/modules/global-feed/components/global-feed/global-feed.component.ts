import { Component } from '@angular/core';

@Component({
  selector: 'mc-global-feed',
  templateUrl: './global-feed.component.html',
})
export class GlobalFeedComponent {
  public readonly apiUrl = 'articles?limit=20&offset=0';
}
