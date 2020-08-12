import { HomeComponent } from '../home/home.component';
import { LocationComponent } from '../location/location.component';
import { ViewRatesPageComponent } from '../api-bundle/view-rates-page/view-rates-page.component';
import { ReserveUnitFormComponent } from '../api-bundle/reserve-unit-form/reserve-unit-form.component';
import { ConfirmationDataComponent } from '../api-bundle/confirmation-data/confirmation-data.component';
import { PayRentFormComponent } from '../api-bundle/pay-rent-form/pay-rent-form.component';
import { UnitSizerComponent } from '../unit-sizer/unit-sizer.component';
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
import { ReserveUnitComponent } from '../iframe-bundle/reserve-unit/reserve-unit.component';
import { MakePaymentComponent } from '../iframe-bundle/make-payment/make-payment.component';
import { PayRentComponent } from '../api-bundle/pay-rent/pay-rent.component';
import { ViewRatesComponent } from '../api-bundle/view-rates/view-rates.component';
import { ReserveComponent } from '../api-bundle/reserve/reserve.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { StorageUnitIframeComponent } from '../iframe-bundle/storage-unit-iframe/storage-unit-iframe.component';

export const apiRoutes = [
    { path: '', component: HomeComponent  },
    { path: 'location/hunterdon-storage-ringoes',
      component: LocationComponent,
      children: [
        {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
        { path: 'storageUnits', component: ViewRatesComponent,
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
        { path: 'unitSizer', component: UnitSizerComponent },
        { path: 'reserveUnit', component: ReserveComponent,
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
        { path: 'photos', component: GalleryComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ],
      resolve: { data: AppResolver }
    },
    { path: 'location/hunterdon-storage-1',
      component: LocationComponent,
      children: [
        {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
        { path: 'storageUnits', component: ViewRatesComponent,
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
        { path: 'unitSizer', component: UnitSizerComponent },
        { path: 'reserveUnit', component: ReserveComponent,
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
        { path: 'photos', component: GalleryComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ],
      resolve: { data: AppResolver }
    },
    { path: 'location/hunterdon-storage-2',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: 'storageUnits', component: ViewRatesComponent,
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
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveComponent,
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
      { path: 'photos', component: GalleryComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ],
    resolve: { data: AppResolver }
  },
    { path: 'pay-rent',
      component: PaymentComponent,
    },
    { path: 'review/hunterdon-storage-ringoes', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/hunterdon-storage-1', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/hunterdon-storage-2', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'pay-rent', component: PaymentComponent },
  { path: 'pay-rent/hunterdon-storage-ringoes', component: PayRentComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent },
      {path: 'forgotPassword', component: ForgotPasswordComponent },
      {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
      {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]},
      { path: 'verifyCode', component: VerifyCodeComponent },
      { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]}
    ],
    resolve: { data: AppResolver }
  },
  { path: 'pay-rent/hunterdon-storage-1', component: PayRentComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent },
      {path: 'forgotPassword', component: ForgotPasswordComponent },
      {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]},
      {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
      { path: 'verifyCode', component: VerifyCodeComponent },
      { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]}
    ],
    resolve: { data: AppResolver }
  },
  { path: 'pay-rent/hunterdon-storage-2', component: PayRentComponent,
  children: [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent },
    {path: 'forgotPassword', component: ForgotPasswordComponent },
    {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]},
    {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
    { path: 'verifyCode', component: VerifyCodeComponent },
    { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]}
  ],
  resolve: { data: AppResolver }
},
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: '**', component: ErrorComponent },
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
];


export const iFrameRoutes = [
    { path: '', component: HomeComponent },
    { path: 'location/hunterdon-storage-ringoes',
      component: LocationComponent,
      children: [
        {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
        { path: 'storageUnits', component: StorageUnitIframeComponent },
        { path: 'unitSizer', component: UnitSizerComponent },
        { path: 'reserveUnit', component: ReserveUnitComponent },
        { path: 'photos', component: GalleryComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ]
    },
    { path: 'location/hunterdon-storage-1',
      component: LocationComponent,
      children: [
        {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
        { path: 'storageUnits', component: StorageUnitIframeComponent },
        { path: 'unitSizer', component: UnitSizerComponent },
        { path: 'reserveUnit', component: ReserveUnitComponent },
        { path: 'photos', component: GalleryComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ]
    },
    { path: 'location/hunterdon-storage-2',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: 'storageUnits', component: StorageUnitIframeComponent },
      { path: 'unitSizer', component: UnitSizerComponent },
      { path: 'reserveUnit', component: ReserveUnitComponent },
      { path: 'photos', component: GalleryComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
    { path: 'review/hunterdon-storage-ringoes', component: HomeComponent,
      resolve: {
          url: 'externalUrlRedirectResolver'
      },
      data: {
          externalUrl: ''
      }
    },
    { path: 'review/hunterdon-storage-1', component: HomeComponent,
      resolve: {
          url: 'externalUrlRedirectResolver'
      },
      data: {
          externalUrl: ''
      }
    },
    { path: 'review/hunterdon-storage-2', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
    { path: 'error', component: ErrorHandlerComponent },
    { path: 'pay-rent', component: PaymentComponent },
    { path: 'pay-rent/hunterdon-storage-ringoes', component: MakePaymentComponent },
    { path: 'pay-rent/hunterdon-storage-1', component: MakePaymentComponent },
    { path: 'pay-rent/hunterdon-storage-2', component: MakePaymentComponent },
    { path: 'storage-tips', component: StorageTipsComponent },
    { path: 'contact-us', component: ContactComponent },
    { path: '**', component: ErrorComponent },
];
