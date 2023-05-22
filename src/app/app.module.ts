import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversionComponent } from './conversion/conversion.component';
import { ExchangeRatesListComponent } from './exchange-rates-list/exchange-rates-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversionComponent,
    ExchangeRatesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
