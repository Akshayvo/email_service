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
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { PayRentAgricolaComponent } from './pay-rent-agricola/pay-rent-agricola.component';
import { PayRentRockyCreekComponent } from './pay-rent-rocky-creek/pay-rent-rocky-creek.component';
import { PayRentBartonComponent } from './pay-rent-barton/pay-rent-barton.component';
import { LoginComponent } from './login/login.component';
import { PayRentFormComponent } from './pay-rent-form/pay-rent-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthGuard } from './auth.gurad';
import { AppResolver } from './resolver/app.resolver';
import { ViewRatesPageComponent } from './view-rates-page/view-rates-page.component';
import { ReserveUnitFormComponent } from './reserve-unit-form/reserve-unit-form.component';
import { ConfirmationDataComponent } from './confirmation-data/confirmation-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'location/rocky-creek',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: 'storageUnits', component: StorageUnitComponent,
      children: [
        { path: '', component: ViewRatesPageComponent },
        { path: 'reserve', component: ReserveUnitFormComponent },
        { path: 'move-in', component: ReserveUnitFormComponent },
        { path: 'confirmation', component: ConfirmationDataComponent },
        { path: 'payReservationCharges', component: PayRentFormComponent },
        { path: 'payMoveInCharges', component: PayRentFormComponent },
      ] },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ],
    resolve: { data: AppResolver }
  },
  { path: 'location/agricola',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: 'storageUnits', component: StorageUnitComponent,
      children: [
        { path: '', component: ViewRatesPageComponent },
        { path: 'reserve', component: ReserveUnitFormComponent },
        { path: 'move-in', component: ReserveUnitFormComponent },
        { path: 'confirmation', component: ConfirmationDataComponent },
        { path: 'payReservationCharges', component: PayRentFormComponent },
        { path: 'payMoveInCharges', component: PayRentFormComponent },
      ] },
      { path: 'unitSizer', component: UnitSizerComponent},
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ],
    resolve: { data: AppResolver }
  },
  { path: 'location/barton',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: 'storageUnits', component: StorageUnitComponent,
      children: [
        { path: '', component: ViewRatesPageComponent },
        { path: 'reserve', component: ReserveUnitFormComponent },
        { path: 'move-in', component: ReserveUnitFormComponent },
        { path: 'confirmation', component: ConfirmationDataComponent },
        { path: 'payReservationCharges', component: PayRentFormComponent },
        { path: 'payMoveInCharges', component: PayRentFormComponent },
      ] },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ],
    resolve: { data: AppResolver }
  },
  { path: 'pay-rent',
    component: PaymentComponent,
  },
  { path: 'review/agricola', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJj88tVVB2m4gRZsbVMWluuFs'
    }
  },
  { path: 'review/rocky-creek', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJUwfhkG51m4gROTD_Wm_bbMY'
    }
  },
  { path: 'review/barton', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJnTxQ_Qx0m4gRebR-ShL8-fo'
    }
  },
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'pay-rent-agricola', component: PayRentAgricolaComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent },
      {path: 'forgotPassword', component: ForgotPasswordComponent },
      {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]}
    ]
  },
  { path: 'pay-rent-rocky-creek', component: PayRentRockyCreekComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent },
      {path: 'forgotPassword', component: ForgotPasswordComponent },
      {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]}
    ]
  },
  { path: 'pay-rent-barton', component: PayRentBartonComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent },
      {path: 'forgotPassword', component: ForgotPasswordComponent },
      {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]}
    ]
  },
  { path: 'contact-us', component: ContactComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppResolver]
})
export class AppRoutingModule { }
