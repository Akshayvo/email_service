import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';
import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';
import { PaymentComponent } from './payment/payment.component';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { ErrorComponent } from './error/error.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { LoginComponent } from './login/login.component';
import { ForgotPassword } from './models/auth';
import { PayRentFormComponent } from './pay-rent-form/pay-rent-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ViewRatesPageComponent } from './view-rates-page/view-rates-page.component';
import { ReserveUnitFormComponent } from './reserve-unit-form/reserve-unit-form.component';
import { ConfirmationDataComponent } from './confirmation-data/confirmation-data.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', component: HomeComponent },
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
  { path: 'pay-rent',
    component: PaymentComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent },
      {path: 'forgotPassword', component: ForgotPasswordComponent },
      {path: 'payment', component: PayRentFormComponent}
    ]
  },
  { path: 'storage-tips', component: StorageTipsComponent },
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
