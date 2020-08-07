import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { TagsFacade } from 'src/app/modules/tags/store/facades/tags.facade';

@Component({
  selector: 'mc-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsComponent implements OnInit {
  public tags$: Observable<any> = this.tagsFacade.tags$;
  public isLoaded$: Observable<boolean> = this.tagsFacade.isLoaded$;
  public isLoading$: Observable<boolean> = this.tagsFacade.isLoading$;

  constructor(private tagsFacade: TagsFacade) {}

  public ngOnInit(): void {
    this.tagsFacade.getTags();
  }

  public trackTag(index: number, tag: string): string {
    return `${tag}-${index}`;
  }
}
