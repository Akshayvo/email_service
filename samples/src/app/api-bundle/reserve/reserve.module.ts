import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReserveRoutingModule } from './reserve-routing.module';
import { ReserveComponent } from './reserve.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ReserveComponent, 
   
  ],
 
  imports: [
    CommonModule,  
    ReserveRoutingModule,
    ReactiveFormsModule,
    SharedModule

  ]
})
export class ReserveModule { 
  constructor(){
    console.log('Reserve Page called');
  }
}
