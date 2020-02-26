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
import { LoginComponent } from './login/login.component';
import { PayRentFormComponent } from './pay-rent-form/pay-rent-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthGuard } from './auth.gurad';
import { AppResolver } from './resolver/app.resolver';
import { ViewRatesPageComponent } from './view-rates-page/view-rates-page.component';
import { ReserveUnitFormComponent } from './reserve-unit-form/reserve-unit-form.component';
import { ConfirmationDataComponent } from './confirmation-data/confirmation-data.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { VerifictionCodeGuard } from './verificationCode.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PayRentComponent } from './pay-rent/pay-rent.component';
// import { CanDeactivateGuard } from './preventRouteChange.guard';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'location/260-n-grove',
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
      ] },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ],
    resolve: { data: AppResolver }
  },
  { path: 'location/201-n-grove',
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
      ] },
      { path: 'unitSizer', component: UnitSizerComponent},
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ],
    resolve: { data: AppResolver }
  },
  { path: 'location/246-w-south-lane',
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
      ] },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ],
    resolve: { data: AppResolver }
  },
  { path: 'location/817-s-getty',
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
      ] },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ],
    resolve: { data: AppResolver }
  },
  { path: 'location/430-s-hwy-83',
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
      ] },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ],
    resolve: { data: AppResolver }
  },
  { path: 'location/500-east-garden-street',
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
  { path: 'review/260-n-grove', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/201-n-grove', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/246-w-south-lane', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/817-s-getty', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/430-s-hwy-83', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/500-east-garden-street', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },

  { path: 'error', component: ErrorHandlerComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'pay-rent/260-n-grove', component: PayRentComponent,
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
  { path: 'pay-rent/201-n-grove', component: PayRentComponent,
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
  { path: 'pay-rent/246-w-south-lane', component: PayRentComponent,
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
  { path: 'pay-rent/817-s-getty', component: PayRentComponent,
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
{ path: 'pay-rent/430-s-hwy-83', component: PayRentComponent,
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
{ path: 'pay-rent/500-east-garden-street', component: PayRentComponent,
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
  { path: 'contact-us', component: ContactComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppResolver]
})
export class AppRoutingModule { }
