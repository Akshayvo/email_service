import { NgModule, RenderComponentType } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';
// import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
// import { TruckRentalsComponent } from './truck-rentals/truck-rentals.component';
import { ErrorComponent } from './error/error.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { PenskeTruckRentalsComponent } from './penske-truck-rentals/penske-truck-rentals.component';
import { UnitSizesComponent } from './unit-sizes/unit-sizes.component';
import { PayRentComponent } from './pay-rent/pay-rent.component';
import { RentSubComponent } from './rent-sub/rent-sub.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', component: HomeComponent },
  { path: 'unit-sizes', component: UnitSizesComponent },
  { path: 'penske-truck-rentals', component: PenskeTruckRentalsComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'view-units', component: ViewRatesComponent },
  { path: 'pay-rent', component: PayRentComponent,
  children: [
    { path: '', redirectTo: 'rent-sub', pathMatch: 'full'},
    { path: 'rent-sub', component: RentSubComponent },
    { path: 'sign-up', component: SignUpComponent }
  ] },
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'review', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJ2XyesRTu4okRTr3_JeSnMVk'
    }
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
