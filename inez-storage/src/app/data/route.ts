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
import { TruckRentalsComponent } from '../truck-rentals/truck-rentals.component';
import { RvRentalComponent } from '../rv-rental/rv-rental.component';
import { CamperRentalComponent } from '../camper-rental/camper-rental.component';
import { WildwoodComponent } from '../wildwood/wildwood.component';
import { PrimeTimeComponent } from '../prime-time/prime-time.component';
import { StorageUnitComponent } from '../iframe-bundle/storage-unit/storage-unit.component';
import { ReserveUnitComponent } from '../iframe-bundle/reserve-unit/reserve-unit.component';
import { MakePaymentComponent } from '../iframe-bundle/make-payment/make-payment.component';
import { PayRentComponent } from '../api-bundle/pay-rent/pay-rent.component';
import { ViewRatesComponent } from '../api-bundle/view-rates/view-rates.component';
import { ReserveComponent } from '../api-bundle/reserve/reserve.component';
import { WinnebagoComponent } from '../winnebago/winnebago.component';

export const apiRoutes = [
    { path: '', component: HomeComponent  },
    { path: 'location/inez-storage',
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
        { path: 'truck-rentals', component: TruckRentalsComponent },
        { path: 'photos', component: PhotosComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ],
      resolve: { data: AppResolver }
    },
    { path: 'location/beck-road-storage',
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
        { path: 'photos', component: PhotosComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ],
      resolve: { data: AppResolver }
    },
    { path: 'pay-rent',
      component: PaymentComponent,
    },
    { path: 'review/inez-storage', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'http://search.google.com/local/writereview?placeid=ChIJkYKn9LZBQoYRZJQPYQwI8OE'
    }
  },
  { path: 'review/beck-road-storage', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJ88r5GzG9NIgR8Ljo8DuDurM'
    }
  },
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'pay-rent', component: PaymentComponent },
  { path: 'pay-rent/inez-storage', component: PayRentComponent,
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
  { path: 'pay-rent/beck-road-storage', component: PayRentComponent,
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
  { path: 'contact', component: ContactComponent },
  { path: 'camper-rentals',
   component: RvRentalComponent,
   children: [
   { path: '', component: CamperRentalComponent },
    { path: '2018-wildwood-27REI', component: WildwoodComponent},
    { path: 'winnebago-outlook-22-c', component: WinnebagoComponent },
    { path: '2019-prime-time-tracer', component: PrimeTimeComponent},
   ]
  },
  { path: '**', component: ErrorComponent },
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
];


export const iFrameRoutes = [
    { path: '', component: HomeComponent },
    { path: 'location/inez-storage',
      component: LocationComponent,
      children: [
        {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
        { path: 'storageUnits', component: StorageUnitComponent },
        { path: 'unitSizer', component: UnitSizerComponent },
        { path: 'reserveUnit', component: ReserveUnitComponent },
        { path: 'truck-rentals', component: TruckRentalsComponent },
        { path: 'photos', component: PhotosComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ]
    },
    { path: 'location/beck-road-storage',
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
    { path: 'review/inez-storage', component: HomeComponent,
      resolve: {
          url: 'externalUrlRedirectResolver'
      },
      data: {
          externalUrl: 'http://search.google.com/local/writereview?placeid=ChIJkYKn9LZBQoYRZJQPYQwI8OE'
      }
    },
    { path: 'review/beck-road-storage', component: HomeComponent,
      resolve: {
          url: 'externalUrlRedirectResolver'
      },
      data: {
          externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJ88r5GzG9NIgR8Ljo8DuDurM'
      }
    },
    { path: 'error', component: ErrorHandlerComponent },
    { path: 'pay-rent', component: PaymentComponent },
    { path: 'pay-rent/inez-storage', component: MakePaymentComponent },
    { path: 'pay-rent/beck-road-storage', component: MakePaymentComponent },
    { path: 'storage-tips', component: StorageTipsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'camper-rentals',
     component: RvRentalComponent,
     children: [
     { path: '', component: CamperRentalComponent },
      { path: '2018-wildwood-27REI', component: WildwoodComponent},
      { path: 'winnebago-outlook-22-c', component: WinnebagoComponent },
      { path: '2019-prime-time-tracer', component: PrimeTimeComponent},
     ]},
    { path: '**', component: ErrorComponent },
];
