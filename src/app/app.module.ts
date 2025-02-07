import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceViewComponent } from './components/invoice-view/invoice-view.component';
import { ClientViewComponent } from './components/client-view/client-view.component';
import { CompanyViewComponent } from './components/company-view/company-view.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { RowItemComponent } from './components/row-item/row-item.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    InvoiceViewComponent,
    ClientViewComponent,
    CompanyViewComponent,
    ListItemsComponent,
    RowItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
