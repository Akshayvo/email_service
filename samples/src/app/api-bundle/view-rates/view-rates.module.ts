import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRatesRoutingModule } from './view-rates-routing.module';
import { SharedModule } from '../../shared/shared.module'; 
import { RouterModule } from '@angular/router';
import { ViewRatesComponent } from './view-rates.component';


@NgModule({
  declarations: [
    ViewRatesComponent,
  ],
  imports: [
    CommonModule,
    ViewRatesRoutingModule,
    RouterModule,
    SharedModule,
    
  ]
})
export class ViewRatesModule { }
