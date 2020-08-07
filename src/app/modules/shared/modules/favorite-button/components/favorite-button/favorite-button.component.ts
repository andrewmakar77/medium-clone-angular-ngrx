import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'mc-favorite-button',
  templateUrl: './favorite-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteButtonComponent {
  @Input() public favorited: boolean;
  @Input() public favoritesCount: number;

  @Output() public clickFavorite = new EventEmitter<void>();
}
