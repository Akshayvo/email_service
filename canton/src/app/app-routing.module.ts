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
import { PayRentComponent } from './pay-rent/pay-rent.component';
import { PayRentShalerComponent } from './pay-rent-shaler/pay-rent-shaler.component';
import { PayRentNatronaComponent } from './pay-rent-natrona/pay-rent-natrona.component';
import { ViewRatesPageComponent } from './view-rates-page/view-rates-page.component';
import { ReserveUnitFormComponent } from './reserve-unit-form/reserve-unit-form.component';
import { ConfirmationDataComponent } from './confirmation-data/confirmation-data.component';
import { PayRentFormComponent } from './pay-rent-form/pay-rent-form.component';
import { AppResolver } from './resolver/app.resolver';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AuthGuard } from './auth.gurad';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifictionCodeGuard } from './verificationCode.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'location/fohl-street-storage',
    component: LocationComponent,
    children: [
      { path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: 'storageUnits', component: StorageUnitComponent,
        children: [
          { path: '', component: ViewRatesPageComponent },
          { path: 'reserve', component: ReserveUnitFormComponent },
          { path: 'move-in', component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: 'confirmation', component: ConfirmationDataComponent },
          { path: 'payReservationCharges', component: PayRentFormComponent },
          { path: 'payMoveInCharges', component: PayRentFormComponent },
        ],
        resolve: { data: AppResolver }
      },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
  { path: 'location/louisville-self-storage',
    component: LocationComponent,
    children: [
      { path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: 'storageUnits', component: StorageUnitComponent,
        children: [
          { path: '', component: ViewRatesPageComponent },
          { path: 'reserve', component: ReserveUnitFormComponent },
          { path: 'move-in', component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: 'confirmation', component: ConfirmationDataComponent },
          { path: 'payReservationCharges', component: PayRentFormComponent },
          { path: 'payMoveInCharges', component: PayRentFormComponent },
        ],
        resolve: { data: AppResolver }
      },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
  { path: 'location/lincoln-street-storage',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: 'storageUnits', component: StorageUnitComponent,
        children: [
          { path: '', component: ViewRatesPageComponent },
          { path: 'reserve', component: ReserveUnitFormComponent },
          { path: 'move-in', component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: 'confirmation', component: ConfirmationDataComponent },
          { path: 'payReservationCharges', component: PayRentFormComponent },
          { path: 'payMoveInCharges', component: PayRentFormComponent },
        ],
        resolve: { data: AppResolver }
      },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
  { path: 'review/fohl-street-storage', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJx32Lt_3bNogRIrBW_3LA8U8'
    }
  },
  { path: 'review/louisville-self-storage', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJN-OSxhzMNogRU44CHDYQuT0'
    }
  },
  { path: 'review/lincoln-street-storage', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJb8wEymTFNogRYZrBZBX-ZO4'
    }
  },
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'pay-rent', component: PaymentComponent },
  { path: 'pay-rent/fohl-street-storage', component: PayRentComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent },
      {path: 'forgotPassword', component: ForgotPasswordComponent },
      {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
      {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]},
      { path: 'verifyCode', component: VerifyCodeComponent },
      { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]}
    ]
  },
  { path: 'pay-rent/louisville-self-storage', component: PayRentComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent },
      {path: 'forgotPassword', component: ForgotPasswordComponent },
      {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]},
      {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
      { path: 'verifyCode', component: VerifyCodeComponent },
      { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]}
    ]
  },
  { path: 'pay-rent/lincoln-street-storage', component: PayRentComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent },
      {path: 'forgotPassword', component: ForgotPasswordComponent },
      {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
      {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]},
      { path: 'verifyCode', component: VerifyCodeComponent },
      { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]}
    ]
  },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppResolver]
})
export class AppRoutingModule { }
