import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'tr[row-item]',
  templateUrl: './row-item.component.html'
})
export class RowItemComponent {
  @Input() item!: Item;
}
