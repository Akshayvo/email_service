import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    SharedModule
    
  ]
})
export class ForgotPasswordModule { }
