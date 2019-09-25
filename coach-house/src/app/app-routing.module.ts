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
import { AmenitiesComponent } from './amenities/amenities.component';
import { RvSiteRentalComponent } from './rv-site-rental/rv-site-rental.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', component: HomeComponent },
  { path: 'rv-site-rental', component: RvSiteRentalComponent },
  { path: 'location', component: LocationComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'amenities', component: AmenitiesComponent},
  { path: 'resident-login', component: PaymentComponent },
  { path: 'review', component: HomeComponent,
  resolve: {
      url: 'externalUrlRedirectResolver'
  },
  data: {
      externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJdxECf-bkQoYRQh92ekNC-tU'
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
