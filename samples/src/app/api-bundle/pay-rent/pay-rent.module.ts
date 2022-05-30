import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PayRentRoutingModule } from './pay-rent-routing.module';
import { PayRentComponent } from './pay-rent.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { LoginComponent } from '../login/login.component';
import { VerifyCodeComponent } from '../verify-code/verify-code.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { RentSubComponent } from '../rent-sub/rent-sub.component';
import { AutoPayComponent } from '../auto-pay/auto-pay.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { TabsComponent } from '../../tabs/tabs.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { PaymentComponent } from '../payment/payment.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
   PayRentComponent,
   LoginComponent,
   ChangePasswordComponent,
   VerifyCodeComponent,
   ResetPasswordComponent,
   RentSubComponent,
   SignUpComponent, 
   AutoPayComponent,
   TabsComponent,
   LoginModalComponent,
   PaymentComponent,
  ],
  imports: [
    CommonModule,
    PayRentRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PayRentModule { 
  constructor(){
    console.log('PayRent Page called');
  }
}
