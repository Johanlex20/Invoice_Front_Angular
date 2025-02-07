import { Component, Input } from '@angular/core';

@Component({
  selector: 'invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: []
})
export class InvoiceViewComponent {
    @Input() name!: String;
    @Input() id!: number;
}
