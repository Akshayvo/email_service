import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRatesRoutingModule } from './view-rates-routing.module';
import { ViewRatesComponent } from './view-rates.component';
// import { SharedModule } from 'src/app/shared/shared.module'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ViewRatesPageComponent } from '../view-rates-page/view-rates-page.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ViewRatesRoutingModule,
    // SharedModule,
    
  ]
})
export class ViewRatesModule { }
