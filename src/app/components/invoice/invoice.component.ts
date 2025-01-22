import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/invoice';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit{

  invoice!: Invoice;

  constructor( private service: InvoiceService){}

  ngOnInit(): void {

    this.invoice = this.service.getInvoice();
    
  }

}
