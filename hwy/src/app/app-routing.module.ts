import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';
import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { PayRentComponent } from './pay-rent/pay-rent.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { ErrorComponent } from './error/error.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  // Fallback when no prior route is matched

  { path: '', component: HomeComponent },
  { path: 'unit-sizer', component: UnitSizerComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'view-rates', component: ViewRatesComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'pay-rent', component: PayRentComponent },
  { path: 'review', component: HomeComponent,
  resolve: {
      url: 'externalUrlRedirectResolver'
  },
  data: {
      externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJJdJJgxlryYcR2zRJNjX4yYA'
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
