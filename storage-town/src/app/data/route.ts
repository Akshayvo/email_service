import { HomeComponent } from '../home/home.component';
import { LocationComponent } from '../location/location.component';
import { ViewRatesPageComponent } from '../api-bundle/view-rates-page/view-rates-page.component';
import { ReserveUnitFormComponent } from '../api-bundle/reserve-unit-form/reserve-unit-form.component';
import { ConfirmationDataComponent } from '../api-bundle/confirmation-data/confirmation-data.component';
import { PayRentFormComponent } from '../api-bundle/pay-rent-form/pay-rent-form.component';
import { UnitSizerComponent } from '../unit-sizer/unit-sizer.component';
// import { PhotosComponent } from '../photos/photos.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { DirectionsComponent } from '../directions/directions.component';
import { AppResolver } from '../api-bundle/resolver/app.resolver';
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
import { PayRentComponent } from '../api-bundle/pay-rent/pay-rent.component';
import { ViewRatesComponent } from '../api-bundle/view-rates/view-rates.component';
import { ReserveComponent } from '../api-bundle/reserve/reserve.component';
import { RentSubComponent } from '../api-bundle/rent-sub/rent-sub.component';
import { SignUpComponent } from '../api-bundle/sign-up/sign-up.component';
import { AutoPayComponent } from '../api-bundle/auto-pay/auto-pay.component';
import { PayRentChesterComponent } from '../pay-rent-chester/pay-rent-chester.component';
import { PayRentMontgomeryComponent } from '../pay-rent-montgomery/pay-rent-montgomery.component';
import { PayRentMiddletownComponent } from '../pay-rent-middletown/pay-rent-middletown.component';
import { ContactFloridaComponent } from '../contact-florida/contact-florida.component';
import { ContactChesterComponent } from '../contact-chester/contact-chester.component';
import { ContactMontgomeryComponent } from '../contact-montgomery/contact-montgomery.component';
import { ContactMiddletownComponent } from '../contact-middletown/contact-middletown.component';
import { PayRentFloridaComponent } from '../pay-rent-florida/pay-rent-florida.component';
import { ReserveUnitComponent } from '../reserve-unit/reserve-unit.component';
import { StorageUnitComponent } from '../storage-unit/storage-unit.component';
import { PaymentComponent } from '../api-bundle/payment/payment.component';
import { PaymentIframeComponent } from '../payment-iframe/payment-iframe.component';
import { ThankYouComponent } from '../api-bundle/thank-you/thank-you.component';
import { environment } from '../../environments/environment';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';

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

export const apiRoutes = [
    { path: '', component: HomeComponent  },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'location/chester',
      component: LocationComponent,
      children: [
        {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
        { path: 'storage-units', component: ViewRatesComponent },
        { path: 'unit-sizer', component: UnitSizerComponent },
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
        { path: 'moveIn', component: ReserveComponent,
          children: [
            { path: '', component: ReserveUnitFormComponent },
            { path: 'move-in', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
            { path: 'thank-you', component: ThankYouComponent }

          ]
        },
        // { path: 'photos', component: PhotosComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ],
      resolve: { data: AppResolver }
    },
    { path: 'location/andrews',
      component: LocationComponent,
      children: [
        {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
        { path: 'storage-units', component: ViewRatesComponent },
        { path: 'unit-sizer', component: UnitSizerComponent },
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
        { path: 'moveIn', component: ReserveComponent,
          children: [
            { path: '', component: ReserveUnitFormComponent },
            { path: 'move-in', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
            { path: 'thank-you', component: ThankYouComponent }

          ]
        },
        // { path: 'photos', component: PhotosComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ],
      resolve: { data: AppResolver }
    },
    { path: 'location/montgomery-walden',
      component: LocationComponent,
      children: [
        {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
        { path: 'storage-units', component: ViewRatesComponent },
        { path: 'unit-sizer', component: UnitSizerComponent },
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
        { path: 'moveIn', component: ReserveComponent,
          children: [
            { path: '', component: ReserveUnitFormComponent },
            { path: 'move-in', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
            { path: 'thank-you', component: ThankYouComponent }
          ]
        },
        // { path: 'photos', component: PhotosComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ],
      resolve: { data: AppResolver }
    },
    { path: 'location/middletown-wallKill',
      component: LocationComponent,
      children: [
        {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
        { path: 'storage-units', component: ViewRatesComponent },
        { path: 'unit-sizer', component: UnitSizerComponent },
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
        { path: 'moveIn', component: ReserveComponent,
          children: [
            // { path: '', component: ViewRatesPageComponent },
            { path: '', component: ReserveUnitFormComponent },
            { path: 'move-in', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
            { path: 'thank-you', component: ThankYouComponent }

          ]
        },
        // { path: 'photos', component: PhotosComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ],
      resolve: { data: AppResolver }
    },
    { path: 'review/andrews', component: HomeComponent,
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
  {
    path: 'pay-rent/chester', component: PayRentComponent,
    children: childroute
  },
  {
    path: 'pay-rent/andrews', component: PayRentComponent,
    children: childroute
  },
  {
    path: 'pay-rent/montgomery-walden', component: PayRentComponent,
    children: childroute
  },
  {
    path: 'pay-rent/middletown-wallKill', component: PayRentComponent,
    children: childroute
  },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'contact-andrews', component: ContactFloridaComponent},
  { path: 'contact-chester', component: ContactChesterComponent},
  { path: 'contact-montgomery-walden', component: ContactMontgomeryComponent},
  { path: 'contact-middletown-wallkill', component: ContactMiddletownComponent},
  { path: 'contact-us', component: ContactComponent },
  { path: '**', component: ErrorComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
];


export const iFrameRoutes = [
  { path: '', component: HomeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'location/andrews',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
      { path: 'storage-units', component: StorageUnitComponent },
      { path: 'unit-sizer', component: UnitSizerComponent },
      { path: 'reserve-unit', component: ReserveUnitComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
  { path: 'location/chester',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
      { path: 'storage-units', component: StorageUnitComponent },
      { path: 'unit-sizer', component: UnitSizerComponent },
      { path: 'reserve-unit', component: ReserveUnitComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
  { path: 'location/montgomery-walden',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
      { path: 'storage-units', component: StorageUnitComponent },
      { path: 'unit-sizer', component: UnitSizerComponent },
      { path: 'reserve-unit', component: ReserveUnitComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
  { path: 'location/middletown-wallKill',
    component: LocationComponent,
    children: [
      {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
      { path: 'storage-units', component: StorageUnitComponent },
      { path: 'unit-sizer', component: UnitSizerComponent },
      { path: 'reserve-unit', component: ReserveUnitComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'directions', component: DirectionsComponent },
    ]
  },
  { path: 'review/andrews', component: HomeComponent,
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
  { path: 'pay-rent', component: PaymentIframeComponent },
  { path: 'pay-rent-andrews', component: PayRentFloridaComponent },
  { path: 'pay-rent-chester', component: PayRentChesterComponent},
  { path: 'pay-rent-montgomery-walden', component: PayRentMontgomeryComponent},
  { path: 'pay-rent-middletown-wallkill', component: PayRentMiddletownComponent},
  { path: 'contact-andrews', component: ContactFloridaComponent},
  { path: 'contact-chester', component: ContactChesterComponent},
  { path: 'contact-montgomery-walden', component: ContactMontgomeryComponent},
  { path: 'contact-middletown-wallkill', component: ContactMiddletownComponent},
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: '**', component: ErrorComponent },
];
