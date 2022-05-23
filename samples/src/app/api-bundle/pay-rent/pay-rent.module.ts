import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PayRentRoutingModule } from './pay-rent-routing.module';
import { PayRentComponent } from './pay-rent.component';

@NgModule({
  declarations: [
   PayRentComponent
  ],
  exports:[
    PayRentComponent
  ],
  imports: [
    CommonModule,
    PayRentRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
