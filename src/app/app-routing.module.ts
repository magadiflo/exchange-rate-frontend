import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConversionComponent } from './conversion/conversion.component';
import { ExchangeRatesListComponent } from './exchange-rates-list/exchange-rates-list.component';

const routes: Routes = [
  { path: 'conversion', component: ConversionComponent, },
  { path: 'exchange-rates-list', component: ExchangeRatesListComponent, },
  { path: '**', redirectTo: 'conversion', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
