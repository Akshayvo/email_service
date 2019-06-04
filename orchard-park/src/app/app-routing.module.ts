import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { ErrorComponent } from './error/error.component';
import { PayRentComponent } from './pay-rent/pay-rent.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { ReserveComponent } from './reserve/reserve.component';
import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', component: HomeComponent },
  { path: 'reserve-unit', component: ReserveComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'view-rates', component: ViewRatesComponent },
  { path: 'unit-sizer', component: UnitSizerComponent},
  { path: 'pay-rent', component: PayRentComponent },
  { path: 'review', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJVVW54n-iK4cRDb9_6B2_CBk'
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
