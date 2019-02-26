import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';
import { PayRentComponent } from './pay-rent/pay-rent.component';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { ErrorComponent } from './error/error.component';
import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reserve', component: ReserveComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'view-rates', component: ViewRatesComponent },
  { path: 'unit-sizer', component: UnitSizerComponent},
  { path: 'pay-rent', component: PayRentComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'review', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJa_nGCWLO24cRgM76z_gD6MU'
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
