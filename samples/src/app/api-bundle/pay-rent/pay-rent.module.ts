import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from '../payment/payment.component';
import { PayRentFormComponent } from '../pay-rent-form/pay-rent-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PayRentRoutingModule } from './app-routing.module';
import { PayRentComponent } from './pay-rent.component';
import {TabsComponent} from '../../tabs/tabs.component'

console.info("Pay rent module is loaded")
@NgModule({
  declarations: [PayRentComponent, TabsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PayRentRoutingModule,
  ]
})
export class PayRentModule { }
