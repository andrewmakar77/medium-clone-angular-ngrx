import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'mc-tabs',
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  @Input() public links: string[] = [];
  @Input() public activeLink: string;

  @Output() public selectTab = new EventEmitter<string>();

  public onClick(link: string): void {
    this.activeLink = link;

    this.selectTab.emit(link);
  }
}
