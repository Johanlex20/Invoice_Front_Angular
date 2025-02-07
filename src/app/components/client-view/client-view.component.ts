import { Component, Input } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'client-view',
  templateUrl: './client-view.component.html',
  styleUrls: []
})
export class ClientViewComponent {

  @Input() client:Client = new Client();

}
