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
import { RvRentalComponent } from './rv-rental/rv-rental.component';
import { WildwoodComponent } from './wildwood/wildwood.component';
import { PrimeTimeComponent } from './prime-time/prime-time.component';
import { CamperRentalComponent } from './camper-rental/camper-rental.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'location/inez-storage',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: 'storageUnits', component: StorageUnitComponent },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'truck-rentals', component: TruckRentalsComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
  { path: 'location/beck-road-storage',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: 'storageUnits', component: StorageUnitComponent },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
  { path: 'review/inez-storage', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'http://search.google.com/local/writereview?placeid=ChIJkYKn9LZBQoYRZJQPYQwI8OE'
    }
  },
  { path: 'review/beck-road-storage', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJ88r5GzG9NIgR8Ljo8DuDurM'
    }
  },
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'pay-rent', component: PayRentComponent },
  { path: 'pay-rent-beck-road', component: PayRentNatronaComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'camper-rentals',
   component: RvRentalComponent,
   children: [
   { path: '', component: CamperRentalComponent },
    { path: '2018-wildwood-27REI', component: WildwoodComponent},
    { path: '2019-prime-time-tracer', component: PrimeTimeComponent},
   ]},
  // { path: '2018-wildwood-27REI', component: WildwoodComponent},
  // { path: '2019-prime-time-tracer', component: PrimeTimeComponent},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
