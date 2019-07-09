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

import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { PayRentLittleFallsComponent } from './pay-rent-little-falls/pay-rent-little-falls.component';
import { PayRentHighwayComponent } from './pay-rent-highway/pay-rent-highway.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'location/little-falls-mini-storage',
    component: LocationComponent,
    children: [
      { path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: 'storageUnits', component: StorageUnitComponent },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
  { path: 'location/highway-27-mini-storage',
    component: LocationComponent,
    children: [
      { path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: 'storageUnits', component: StorageUnitComponent },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
  { path: 'review/little-falls-mini-storage', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        // tslint:disable-next-line:max-line-length
        externalUrl: 'https://www.google.com/search?q=little+falls+mini+storage&rlz=1C1CHBF_enUS822US822&oq=Little+Falls+Mini+Storage&aqs=chrome.0.35i39j69i60l2j69i65j69i61.327j0j4&sourceid=chrome&ie=UTF-8#lrd=0x52b43b32fc76fa9f:0x93cffb8e8fafa262,3,,,'
    }
  },
  { path: 'review/highway-27-mini-storage', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'http://search.google.com/local/writereview?placeid=ChIJ0yzN4UwXtFIRyA4UXaMqT1g'
    }
  },
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'pay-rent-highway-27-mini-storage', component: PayRentHighwayComponent },
  { path: 'pay-rent-little-falls-mini-storage',  component: PayRentLittleFallsComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
