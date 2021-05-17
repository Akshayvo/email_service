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
import { AuthGuard } from './auth.gurad';
import { VerifictionCodeGuard } from './verificationCode.guard';
import { PayRentComponent } from './api-bundle/pay-rent/pay-rent.component';
import { ChangePasswordComponent } from './api-bundle/change-password/change-password.component';
import { ConfirmationDataComponent } from './api-bundle/confirmation-data/confirmation-data.component';
import { ForgotPasswordComponent } from './api-bundle/forgot-password/forgot-password.component';
import { LoginComponent } from './api-bundle/login/login.component';
import { PayRentFormComponent } from './api-bundle/pay-rent-form/pay-rent-form.component';
import { ReserveUnitFormComponent } from './api-bundle/reserve-unit-form/reserve-unit-form.component';
import { ResetPasswordComponent } from './api-bundle/reset-password/reset-password.component';
import { AppResolver } from './api-bundle/resolver/app.resolver';
import { VerifyCodeComponent } from './api-bundle/verify-code/verify-code.component';
import { ViewRatesPageComponent } from './api-bundle/view-rates-page/view-rates-page.component';
import { ThankYouComponent } from './api-bundle/thank-you/thank-you.component';
import { RentSubComponent } from './api-bundle/rent-sub/rent-sub.component';
import { environment } from '../environments/environment';
import { AutoPayComponent } from './api-bundle/auto-pay/auto-pay.component';
import { SignUpComponent } from './api-bundle/sign-up/sign-up.component';
import { ReserveComponent } from './api-bundle/reserve/reserve.component';
import { ViewRatesComponent } from './api-bundle/view-rates/view-rates.component';
// import { CanDeactivateGuard } from './preventRouteChange.guard';

const withoutTab = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
        {path: 'login', component: LoginComponent },
        {path: 'forgotPassword', component: ForgotPasswordComponent },
        {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
        {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]},
        { path: 'verifyCode', component: VerifyCodeComponent },
        { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]},
        { path: 'thank-you', component: ThankYouComponent }
        // canActivate: [VerifictionCodeGuard]
];

const withTab = [
  { path: '', redirectTo: 'rent-sub', pathMatch: 'full'},
      { path: 'rent-sub', component: RentSubComponent,
        children: [
          {path: '', redirectTo: 'login', pathMatch: 'full'},
          {path: 'login', component: LoginComponent },
          {path: 'forgotPassword', component: ForgotPasswordComponent },
          {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
          {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]},
          { path: 'verifyCode', component: VerifyCodeComponent },
          { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]},
          { path: 'thank-you', component: ThankYouComponent }
          // canActivate: [VerifictionCodeGuard]
        ]
      },
      { path: 'sign-up', component: SignUpComponent,
        children: [
          {path: '', redirectTo: 'login', pathMatch: 'full'},
          {path: 'login', component: LoginComponent },
          {path: 'forgotPassword', component: ForgotPasswordComponent },
          {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
          {path: 'auto-pay', component: AutoPayComponent, canActivate: [AuthGuard]},
          { path: 'verifyCode', component: VerifyCodeComponent },
          { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]}
          // canActivate: [VerifictionCodeGuard]
        ]
      }
];

// const reservationForm = environment
const childroute = environment.paymentPageType ? withTab : withoutTab;


const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'location/rocky-creek',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
      { path: 'storage-units', component: ViewRatesComponent },
      { path: 'reserve-unit', component: ReserveComponent,
        children: [
          { path: '', component: ReserveUnitFormComponent },
          { path: 'reserve', component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: 'confirmation', component: ConfirmationDataComponent },
          { path: 'payReservationCharges', component: PayRentFormComponent },
          { path: 'payMoveInCharges', component: PayRentFormComponent },
          { path: 'thank-you', component: ThankYouComponent }

        ]
      },
      { path: 'move-in', component: ReserveComponent,
        children: [
          { path: '', component: ReserveUnitFormComponent },
          { path: 'moveIn', component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: 'confirmation', component: ConfirmationDataComponent },
          { path: 'payReservationCharges', component: PayRentFormComponent },
          { path: 'payMoveInCharges', component: PayRentFormComponent },
          { path: 'thank-you', component: ThankYouComponent }

        ]
      },
      { path: 'unit-sizer', component: UnitSizerComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ],
    resolve: { data: AppResolver }
  },
  { path: 'location/agricola',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
      { path: 'storage-units', component: ViewRatesComponent  },
      { path: 'reserve-unit', component: ReserveComponent,
        children: [
          { path: '', component: ReserveUnitFormComponent },
          { path: 'reserve', component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: 'confirmation', component: ConfirmationDataComponent },
          { path: 'payReservationCharges', component: PayRentFormComponent },
          { path: 'payMoveInCharges', component: PayRentFormComponent },
          { path: 'thank-you', component: ThankYouComponent }

        ]
      },
      { path: 'move-in', component: ReserveComponent,
        children: [
          { path: '', component: ReserveUnitFormComponent },
          { path: 'moveIn', component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: 'confirmation', component: ConfirmationDataComponent },
          { path: 'payReservationCharges', component: PayRentFormComponent },
          { path: 'payMoveInCharges', component: PayRentFormComponent },
          { path: 'thank-you', component: ThankYouComponent }

        ]
      },
      { path: 'unit-sizer', component: UnitSizerComponent},
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ],
    resolve: { data: AppResolver }
  },
  { path: 'location/barton',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
      { path: 'storage-units', component: ViewRatesComponent  },
      { path: 'reserve-unit', component: ReserveComponent,
        children: [
          { path: '', component: ReserveUnitFormComponent },
          { path: 'reserve', component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: 'confirmation', component: ConfirmationDataComponent },
          { path: 'payReservationCharges', component: PayRentFormComponent },
          { path: 'payMoveInCharges', component: PayRentFormComponent },
          { path: 'thank-you', component: ThankYouComponent }

        ]
      },
      { path: 'move-in', component: ReserveComponent,
        children: [
          { path: '', component: ReserveUnitFormComponent },
          { path: 'moveIn', component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: 'confirmation', component: ConfirmationDataComponent },
          { path: 'payReservationCharges', component: PayRentFormComponent },
          { path: 'payMoveInCharges', component: PayRentFormComponent },
          { path: 'thank-you', component: ThankYouComponent }

        ]
      },
      { path: 'unit-sizer', component: UnitSizerComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ],
    resolve: { data: AppResolver }
  },
  { path: 'location/wade',
  component: LocationComponent,
  children: [
    {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
    { path: 'storage-units', component: ViewRatesComponent  },
    { path: 'reserve-unit', component: ReserveComponent,
      children: [
        { path: '', component: ReserveUnitFormComponent },
        { path: 'reserve', component: ReserveUnitFormComponent },
        // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
        { path: 'confirmation', component: ConfirmationDataComponent },
        { path: 'payReservationCharges', component: PayRentFormComponent },
        { path: 'payMoveInCharges', component: PayRentFormComponent },
        { path: 'thank-you', component: ThankYouComponent }

      ]
    },
    { path: 'move-in', component: ReserveComponent,
      children: [
        { path: '', component: ReserveUnitFormComponent },
        { path: 'moveIn', component: ReserveUnitFormComponent },
        // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
        { path: 'confirmation', component: ConfirmationDataComponent },
        { path: 'payReservationCharges', component: PayRentFormComponent },
        { path: 'payMoveInCharges', component: PayRentFormComponent },
        { path: 'thank-you', component: ThankYouComponent }

      ]
    },
    { path: 'unit-sizer', component: UnitSizerComponent },
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
  { path: 'review/wade', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJnTxQ_Qx0m4gRebR-ShL8-fo'
    }
  },
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'pay-rent/agricola', component: PayRentComponent,
    children: childroute
  },
  { path: 'pay-rent/rocky-creek', component: PayRentComponent,
    children: childroute
  },
  { path: 'pay-rent/barton', component: PayRentComponent,
    children: childroute
  },
  { path: 'pay-rent/wade', component: PayRentComponent,
  children: childroute
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
