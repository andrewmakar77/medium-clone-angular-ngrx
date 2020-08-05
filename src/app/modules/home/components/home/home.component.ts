import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

import { EHomeTabs, ERoutes } from 'src/app/models';
import { filter } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'mc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public links = Object.values(EHomeTabs);
  public navLinksMap: { [key: string]: { path: string } } = {
    [EHomeTabs.MY_FEED]: { path: ERoutes.MY_FEED },
    [EHomeTabs.GLOBAL_FEED]: { path: ERoutes.GLOBAL_FEED },
  };
  public activeLinksMap: { [key: string]: { tabLabel: string } } = {
    [`/${ERoutes.MY_FEED}`]: { tabLabel: EHomeTabs.MY_FEED },
    [`/${ERoutes.GLOBAL_FEED}`]: { tabLabel: EHomeTabs.GLOBAL_FEED },
  };
  public activeLink: string;

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.setActiveLink();
    this.listenRouterChanges();
  }

  private listenRouterChanges(): void {
    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((event: Event) => event instanceof NavigationEnd)
      )
      .subscribe(() => this.setActiveLink());
  }

  private setActiveLink(): void {
    this.activeLink = this.activeLinksMap[this.router.url].tabLabel;
  }

  public onSelect(link: string): void {
    this.router.navigate([this.navLinksMap[link].path]);
  }
}
