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
import { AboutUsComponent } from './about-us/about-us.component';
import { DirectionsComponent } from './directions/directions.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'location/florida-and-warwick',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: 'storageUnits', component: StorageUnitComponent },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
  { path: 'location/chester',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: 'storageUnits', component: StorageUnitComponent },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
  { path: 'location/montgomery-walden',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: 'storageUnits', component: StorageUnitComponent },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
  { path: 'location/middletown-wallKill',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: 'storageUnits', component: StorageUnitComponent },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
  { path: 'review/florida-and-warwick', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJue_ECicpw4kR4EjL9wQ_6zM'
    }
  },
  { path: 'review/chester', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJm7SnExspw4kRPUDRDPAzAIc'
    }
  },
  { path: 'review/montgomery-walden', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJF0fu6ofV3IkR6yRjmwhuYZk'
    }
  },
  { path: 'review/middletown-wallKill', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJ3Q9xV4rN3IkRiDFuXQjIbD0'
    }
  },
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'pay-rent', component: PaymentComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
