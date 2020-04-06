import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { ErrorComponent } from './error/error.component';
import { PayRentComponent } from './pay-rent/pay-rent.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';
import { ReserveUnitComponent } from './reserve-unit/reserve-unit.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PayRentFormComponent } from './pay-rent-form/pay-rent-form.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthGuard } from './auth-guard/auth.gurad';
import { VerifictionCodeGuard } from './auth-guard/verificationCode.guard';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', component: HomeComponent },
  // { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'view-rates', component: ViewRatesComponent },
  { path: 'waiting-list', component: ViewRatesComponent },
  // { path: 'unit-sizer', component: UnitSizerComponent},
  { path: 'pay-rent', component: PayRentComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent },
      {path: 'forgotPassword', component: ForgotPasswordComponent },
      {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
      {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]},
      { path: 'verifyCode', component: VerifyCodeComponent },
      { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]}
      // canActivate: [VerifictionCodeGuard]
    ]
  },
  { path: 'reserve-unit', component: ReserveUnitComponent },
  { path: 'review', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'error', component: ErrorHandlerComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
