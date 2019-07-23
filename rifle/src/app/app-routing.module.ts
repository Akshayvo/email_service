import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';
import { ErrorComponent } from './error/error.component';
import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { PayRentComponent } from './pay-rent/pay-rent.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', component: HomeComponent },
  { path: 'unit-sizer', component: UnitSizerComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'view-rates', component: ViewRatesComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'pay-rent', component: PayRentComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
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
