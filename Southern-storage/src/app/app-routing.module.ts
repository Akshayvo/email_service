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
import { RentSubComponent } from './rent-sub/rent-sub.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'location/rocky-creek',
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
  { path: 'location/agricola',
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
  { path: 'location/barton',
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

  { path: 'payment',
    component: PaymentComponent,
    children: [
      {path: '', redirectTo: 'agricola' , pathMatch: 'full' },
      { path: 'rocky-creek', component: RentSubComponent },
      { path: 'agricola', component: RentSubComponent },
      { path: 'barton', component: RentSubComponent },
    ]
  },

  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
