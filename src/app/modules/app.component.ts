import { Component } from '@angular/core';

@Component({
  selector: 'mc-root',
  template: `
    <div routerLink="/">{{ 'HOME.STARTER' | translate }}</div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}