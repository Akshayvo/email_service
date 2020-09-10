import { HomeComponent } from '../home/home.component';
import { LocationComponent } from '../location/location.component';
import { ViewRatesPageComponent } from '../api-bundle/view-rates-page/view-rates-page.component';
import { ReserveUnitFormComponent } from '../api-bundle/reserve-unit-form/reserve-unit-form.component';
import { ConfirmationDataComponent } from '../api-bundle/confirmation-data/confirmation-data.component';
import { PayRentFormComponent } from '../api-bundle/pay-rent-form/pay-rent-form.component';
import { UnitSizerComponent } from '../unit-sizer/unit-sizer.component';
import { PhotosComponent } from '../photos/photos.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { DirectionsComponent } from '../directions/directions.component';
import { AppResolver } from '../api-bundle/resolver/app.resolver';
import { PaymentComponent } from '../payment/payment.component';
import { ErrorHandlerComponent } from '../error-handler/error-handler.component';
import { StorageTipsComponent } from '../storage-tips/storage-tips.component';
import { LoginComponent } from '../api-bundle/login/login.component';
import { ForgotPasswordComponent } from '../api-bundle/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from '../api-bundle/change-password/change-password.component';
import { AuthGuard } from '../auth.gurad';
import { VerifyCodeComponent } from '../api-bundle/verify-code/verify-code.component';
import { ResetPasswordComponent } from '../api-bundle/reset-password/reset-password.component';
import { VerifictionCodeGuard } from '../verificationCode.guard';
import { ContactComponent } from '../contact/contact.component';
import { ErrorComponent } from '../error/error.component';
import { StorageUnitComponent } from '../iframe-bundle/storage-unit/storage-unit.component';
import { ReserveUnitComponent } from '../iframe-bundle/reserve-unit/reserve-unit.component';
import { MakePaymentComponent } from '../iframe-bundle/make-payment/make-payment.component';
import { PayRentComponent } from '../api-bundle/pay-rent/pay-rent.component';
import { ViewRatesComponent } from '../api-bundle/view-rates/view-rates.component';
import { ReserveComponent } from '../api-bundle/reserve/reserve.component';
import { RentSubComponent } from '../api-bundle/rent-sub/rent-sub.component';
import { SignUpComponent } from '../api-bundle/sign-up/sign-up.component';
import { AutoPayComponent } from '../api-bundle/auto-pay/auto-pay.component';

export const apiRoutes = [
    { path: '', component: HomeComponent  },
    { path: 'location/1321-north-jefferson-st-location',
      component: LocationComponent,
      children: [
        {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
        { path: 'storage-units', component: ViewRatesComponent,
          children: [
            { path: '', component: ViewRatesPageComponent },
            { path: 'reserve', component: ReserveUnitFormComponent },
            { path: 'move-in', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
          ]
        },
        { path: 'unit-sizer', component: UnitSizerComponent },
        { path: 'reserve-unit', component: ReserveComponent,
          children: [
            // { path: '', component: ViewRatesPageComponent },
            { path: '', component: ReserveUnitFormComponent },
            { path: 'reserve', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
          ]
        },
        { path: 'moveIn', component: ReserveComponent,
          children: [
            // { path: '', component: ViewRatesPageComponent },
            { path: '', component: ReserveUnitFormComponent },
            { path: 'move-in', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
          ]
        },
        { path: 'photos', component: PhotosComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ],
      resolve: { data: AppResolver }
    },
    { path: 'location/1687-US-441-location',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
      { path: 'storage-units', component: ViewRatesComponent,
        children: [
          { path: '', component: ViewRatesPageComponent },
          { path: 'reserve', component: ReserveUnitFormComponent },
          { path: 'move-in', component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: 'confirmation', component: ConfirmationDataComponent },
          { path: 'payReservationCharges', component: PayRentFormComponent },
          { path: 'payMoveInCharges', component: PayRentFormComponent },
        ]
      },
      { path: 'unit-sizer', component: UnitSizerComponent },
      { path: 'reserve-unit', component: ReserveComponent,
        children: [
          // { path: '', component: ViewRatesPageComponent },
          { path: '', component: ReserveUnitFormComponent },
          { path: 'reserve', component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: 'confirmation', component: ConfirmationDataComponent },
          { path: 'payReservationCharges', component: PayRentFormComponent },
          { path: 'payMoveInCharges', component: PayRentFormComponent },
        ]
      },
      { path: 'moveIn', component: ReserveComponent,
        children: [
          // { path: '', component: ViewRatesPageComponent },
          { path: '', component: ReserveUnitFormComponent },
          { path: 'move-in', component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: 'confirmation', component: ConfirmationDataComponent },
          { path: 'payReservationCharges', component: PayRentFormComponent },
          { path: 'payMoveInCharges', component: PayRentFormComponent },
        ]
      },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ],
    resolve: { data: AppResolver }
  },
  { path: 'review/1321-north-jefferson-st-location', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/1687-US-441-location', component: HomeComponent,
  resolve: {
      url: 'externalUrlRedirectResolver'
  },
  data: {
      externalUrl: ''
  }
},
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'pay-rent', component: PaymentComponent },
  // { path: 'pay-rent/1321-north-jefferson-st-location', component: PayRentComponent,
  //   children: [
  //     {path: '', redirectTo: 'login', pathMatch: 'full'},
  //     {path: 'login', component: LoginComponent },
  //     {path: 'forgotPassword', component: ForgotPasswordComponent },
  //     {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
  //     {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]},
  //     { path: 'verifyCode', component: VerifyCodeComponent },
  //     { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]}
  //   ],
  //   resolve: { data: AppResolver }
  // },
  {
    path: 'pay-rent/1321-north-jefferson-st-location', component: PayRentComponent,
    children: [
      { path: '', redirectTo: 'rent-sub', pathMatch: 'full'},
      { path: 'rent-sub', component: RentSubComponent,
        children: [
          {path: '', redirectTo: 'login', pathMatch: 'full'},
          {path: 'login', component: LoginComponent },
          {path: 'forgotPassword', component: ForgotPasswordComponent },
          {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
          {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]},
          { path: 'verifyCode', component: VerifyCodeComponent },
          { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]}
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
    ]
  },
  {
    path: 'pay-rent/1687-US-441-location', component: PayRentComponent,
    children: [
      { path: '', redirectTo: 'rent-sub', pathMatch: 'full'},
      { path: 'rent-sub', component: RentSubComponent,
        children: [
          {path: '', redirectTo: 'login', pathMatch: 'full'},
          {path: 'login', component: LoginComponent },
          {path: 'forgotPassword', component: ForgotPasswordComponent },
          {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
          {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]},
          { path: 'verifyCode', component: VerifyCodeComponent },
          { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]}
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
    ]
  },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorComponent },
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
];


export const iFrameRoutes = [
    { path: '', component: HomeComponent },
    { path: 'location/1321-north-jefferson-st-location',
      component: LocationComponent,
      children: [
        {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
        { path: 'storage-units', component: StorageUnitComponent },
        { path: 'unit-sizer', component: UnitSizerComponent },
        { path: 'reserve-unit', component: ReserveUnitComponent },
        { path: 'photos', component: PhotosComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ]
    },
    { path: 'review/1321-north-jefferson-st-location', component: HomeComponent,
      resolve: {
          url: 'externalUrlRedirectResolver'
      },
      data: {
          externalUrl: ''
      }
    },
    { path: 'error', component: ErrorHandlerComponent },
    { path: 'pay-rent', component: PaymentComponent },
    { path: 'pay-rent/1321-north-jefferson-st-location', component: MakePaymentComponent },
    { path: 'storage-tips', component: StorageTipsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: ErrorComponent },
];
