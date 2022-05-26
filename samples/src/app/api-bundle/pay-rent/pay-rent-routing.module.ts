import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth-guard/auth.gurad';
import { VerifictionCodeGuard } from '../../auth-guard/verificationCode.guard';
import { environment } from '../../../environments/environment';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LoginComponent } from '../login/login.component';
import { PayRentFormComponent } from '../pay-rent-form/pay-rent-form.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { VerifyCodeComponent } from '../verify-code/verify-code.component';
import { PayRentComponent } from './pay-rent.component';
import { RentSubComponent } from '../rent-sub/rent-sub.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AutoPayComponent } from '../auto-pay/auto-pay.component';
import { ThankYouComponent } from '../thank-you/thank-you.component';
import { ThankYouGuard } from '../../thank-you.guard';

const withoutTab = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
        {path: 'login', component: LoginComponent },
        {path: 'forgotPassword', component: ForgotPasswordComponent }, 
        {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
        {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]}, 
        { path: 'verifyCode', component: VerifyCodeComponent },
        { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]},
        { path: 'thank-you', component: ThankYouComponent, canActivate: [ThankYouGuard]  } 
        // canActivate: [VerifictionCodeGuard]
];

const withTab = [
  { path: '', redirectTo: 'rent-sub', pathMatch: 'full'},
      { path: 'rent-sub', component: RentSubComponent,
        children: [
          {path: '', redirectTo: 'login', pathMatch: 'full'},
          {path: 'login', component: LoginComponent },
          {path: 'forgotPassword', component: ForgotPasswordComponent },  
          {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
          {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]}, 
          { path: 'verifyCode', component: VerifyCodeComponent },
          { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]},
          { path: 'thank-you', component: ThankYouComponent, canActivate: [ThankYouGuard]  }
          // canActivate: [VerifictionCodeGuard]
        ]
      },
      { path: 'sign-up', component: SignUpComponent,
        children: [
          {path: '', redirectTo: 'login', pathMatch: 'full'},
          {path: 'login', component: LoginComponent },
          {path: 'forgotPassword', component: ForgotPasswordComponent }, 
          {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
          {path: 'auto-pay', component: AutoPayComponent, canActivate: [AuthGuard]},
          { path: 'verifyCode', component: VerifyCodeComponent },
          { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]}
          // canActivate: [VerifictionCodeGuard]
        ]
      }
];



const childroute = environment.signUpForAuotoPay ? withTab : withoutTab;

const routes: Routes = [
  
  { path: '', component: PayRentComponent ,children: childroute},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayRentRoutingModule { }
