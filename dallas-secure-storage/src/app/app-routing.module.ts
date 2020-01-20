import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentComponent } from './payment/payment.component';
import { ErrorComponent } from './error/error.component';
import { LocationComponent } from './location/location.component';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { StorageUnitComponent } from './storage-unit/storage-unit.component';
import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';
import { ReserveUnitComponent } from './reserve-unit/reserve-unit.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DirectionsComponent } from './directions/directions.component';
import { TruckRentalsComponent } from './truck-rentals/truck-rentals.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { PayRentComponent } from './pay-rent/pay-rent.component';
import { PayRentNatronaComponent } from './pay-rent-natrona/pay-rent-natrona.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'location/dallas-secure-storage',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: 'storageUnits', component: StorageUnitComponent },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'reviews', component: ReviewsComponent },
    ]
  },

  { path: 'location/godsey-secure-storage',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: 'storageUnits', component: StorageUnitComponent },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
      { path: 'reviews', component: ReviewsComponent },
    ]
  },
  { path: 'review/dallas-secure-storage', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'http://search.google.com/local/writereview?placeid=ChIJf0QfYR-o6lQR4tW5PPrfJJw'
    }
  },

  { path: 'review/godsey-secure-storage', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'http://search.google.com/local/writereview?placeid=ChIJpczUYiKo6lQR7jllRn1eq0A'
    }
  },
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'pay-rent', component: PayRentComponent },
  { path: 'pay-rent-godsey', component: PayRentNatronaComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
