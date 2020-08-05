import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mc-my-feed',
  templateUrl: './my-feed.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyFeedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
