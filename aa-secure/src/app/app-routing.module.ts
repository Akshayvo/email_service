import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
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
import { PayRentComponent } from './pay-rent/pay-rent.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'location/730-kenton-station',
    component: LocationComponent,
    children: [
      // { path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: '', redirectTo: 'reservations', pathMatch: 'full'},
      { path: 'storageUnits', component: StorageUnitComponent },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reservations', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
  { path: 'location/751-kenton-station',
    component: LocationComponent,
    children: [
      // { path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: '', redirectTo: 'reservations', pathMatch: 'full'},
      { path: 'reservations', component: ReserveUnitComponent },
      { path: 'storageUnits', component: StorageUnitComponent },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
  { path: 'location/augusta',
    component: LocationComponent,
    children: [
      // {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: '', redirectTo: 'reservations', pathMatch: 'full'},
      { path: 'storageUnits', component: StorageUnitComponent },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reservations', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
  { path: 'location/front-street-climate-control',
  component: LocationComponent,
  children: [
    // {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
    { path: '', redirectTo: 'reservations', pathMatch: 'full'},
    { path: 'storageUnits', component: StorageUnitComponent },
    { path: 'unitSizer', component: UnitSizerComponent },
    { path: 'reservations', component: ReserveUnitComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'directions', component: DirectionsComponent },
  ]
},
  { path: 'review/730-kenton-station', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/751-kenton-station', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'http://search.google.com/local/writereview?placeid=ChIJDem__t1aQYgRkUdtF_EG6B8'
    }
  },
  { path: 'review/augusta', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/front-street-climate-control', component: HomeComponent,
  resolve: {
      url: 'externalUrlRedirectResolver'
  },
  data: {
      externalUrl: ''
  }
},
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'pay-rent', component: PayRentComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
