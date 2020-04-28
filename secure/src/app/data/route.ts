import { HomeComponent } from '../home/home.component';
import { StorageTipsComponent } from '../storage-tips/storage-tips.component';
import { ReserveComponent } from '../api-bundle/reserve/reserve.component';
import { ContactComponent } from '../contact/contact.component';
import { ViewRatesComponent } from '../api-bundle/view-rates/view-rates.component';
import { ViewRatesPageComponent } from '../api-bundle/view-rates-page/view-rates-page.component';
import { ReserveUnitFormComponent } from '../api-bundle/reserve-unit-form/reserve-unit-form.component';
import { ConfirmationDataComponent } from '../api-bundle/confirmation-data/confirmation-data.component';
import { PayRentFormComponent } from '../api-bundle/pay-rent-form/pay-rent-form.component';
import { PaymentComponent } from '../api-bundle/payment/payment.component';
import { LoginComponent } from '../api-bundle/login/login.component';
import { ForgotPasswordComponent } from '../api-bundle/forgot-password/forgot-password.component';
import { AuthGuard } from '../auth-guard/auth.gurad';
import { ErrorHandlerComponent } from '../error-handler/error-handler.component';
import { ErrorComponent } from '../error/error.component';
import { PaymentIframePageComponent } from '../iframe-bundle/payment-iframe-page/payment-iframe-page.component';
import { ViewRatesIframePageComponent } from '../iframe-bundle/view-rates-iframe-page/view-rates-iframe-page.component';
// tslint:disable-next-line:max-line-length
import { ReserveUnitIframePageComponent } from '../iframe-bundle/reserve-unit-iframe-page/reserve-unit-iframe-page.component';
import { ChangePasswordComponent } from '../api-bundle/change-password/change-password.component';
import { LoginModalComponent } from '../api-bundle/login-modal/login-modal.component';
import { VerifyCodeComponent } from '../api-bundle/verify-code/verify-code.component';
import { ResetPasswordComponent } from '../api-bundle/reset-password/reset-password.component';
import { VerifictionCodeGuard } from '../auth-guard/verificationCode.guard';
import { UnitSizerComponent } from '../unit-sizer/unit-sizer.component';


 export const apiRoutes = [
    // Fallback when no prior route is matched
    { path: '', component: HomeComponent },
    { path: 'unit-sizes', component: UnitSizerComponent},
    { path: 'storage-tips', component: StorageTipsComponent },
    { path: 'reserve-unit', component: ReserveComponent },
    { path: 'storageTips', component: StorageTipsComponent },
    { path: 'contact-us', component: ContactComponent },
    {
      path: 'view-rates',
      component: ViewRatesComponent,
      children: [
        { path: '', component: ViewRatesPageComponent },
        { path: 'reserve', component: ReserveUnitFormComponent },
        { path: 'move-in', component: ReserveUnitFormComponent },
        { path: 'confirmation', component: ConfirmationDataComponent },
        { path: 'payReservationCharges', component: PayRentFormComponent },
        { path: 'payMoveInCharges', component: PayRentFormComponent },
      ]
     },
    {
      path: 'pay-rent', component: PaymentComponent,
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
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'review', component: HomeComponent,
      resolve: {
          url: 'externalUrlRedirectResolver'
      },
      data: {
          externalUrl: 'http://search.google.com/local/writereview?placeid=ChIJr5Mr2fxFB4gRqqDJIimMORo'
      }
    },
    { path: 'error', component: ErrorHandlerComponent },
    { path: '**', component: ErrorComponent }
  ];

export const iFrameRoutes = [
    // Fallback when no prior route is matched
    { path: '', component: HomeComponent },
    { path: 'pay-rent', component: PaymentIframePageComponent },
    { path: 'storage-tips', component: StorageTipsComponent },
    { path: 'view-rates', component: ViewRatesIframePageComponent },
    { path: 'reserve-unit', component: ReserveUnitIframePageComponent },
    { path: 'unit-sizes', component: UnitSizerComponent},
    { path: 'storageTips', component: StorageTipsComponent },
    { path: 'contact-us', component: ContactComponent },
    { path: 'review', component: HomeComponent,
      resolve: {
          url: 'externalUrlRedirectResolver'
      },
      data: {
          externalUrl: 'http://search.google.com/local/writereview?placeid=ChIJr5Mr2fxFB4gRqqDJIimMORo'
      }
    },
    { path: 'error', component: ErrorHandlerComponent },
    { path: '**', component: ErrorComponent }
  ];
