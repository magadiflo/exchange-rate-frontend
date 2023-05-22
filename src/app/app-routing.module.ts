import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionComponent } from './conversion/conversion.component';

const routes: Routes = [
  { path: 'conversion', component: ConversionComponent, },
  { path: '**', redirectTo: 'conversion', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
