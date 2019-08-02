import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';
import { PaymentComponent } from './payment/payment.component';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { ErrorComponent } from './error/error.component';
// import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { ReserveComponent } from './reserve/reserve.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'view-rates', component: ViewRatesComponent },
  { path: 'reserve', component: ReserveComponent },
  // { path: 'unit-sizer', component: UnitSizerComponent },
  { path: 'pay-rent', component: PaymentComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'review',
  component: HomeComponent,
  resolve: {
      url: 'externalUrlRedirectResolver'
  },
  data: {
      externalUrl: ''
  }},
  { path: 'error', component: ErrorHandlerComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
