import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mc-root',
  template: `
    <div>Starter</div>
    <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
