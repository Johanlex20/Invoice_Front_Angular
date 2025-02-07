import { Component, Input } from '@angular/core';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'company-view',
  templateUrl: './company-view.component.html',
  styleUrls: []
})
export class CompanyViewComponent {

  @Input() company:Company = {name: 'Empresa falsa', fiscalNumber: 10000};

}
