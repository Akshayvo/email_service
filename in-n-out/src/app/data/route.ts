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
import { PayRentFloridaComponent } from '../pay-rent-florida/pay-rent-florida.component';
import { ReserveUnitComponent } from '../reserve-unit/reserve-unit.component';
import { StorageUnitComponent } from '../storage-unit/storage-unit.component';
import { PaymentComponent } from '../api-bundle/payment/payment.component';
import { PaymentIframeComponent } from '../payment-iframe/payment-iframe.component';
import { ThankYouComponent } from '../api-bundle/thank-you/thank-you.component';
import { environment } from '../../environments/environment';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { ThankYouGuard } from '../thank-you.guard';
import { FaqComponent } from '../faq/faq.component';
import { TrailerInfoComponent } from '../trailer-info/trailer-info.component';

const withoutTab = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
        {path: 'login', component: LoginComponent },
        {path: 'forgotPassword', component: ForgotPasswordComponent },
        {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
        {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]},
        { path: 'verifyCode', component: VerifyCodeComponent },
        { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]},
        { path: 'thank-you', component: ThankYouComponent, canActivate: [ThankYouGuard] }
        // canActivate: [VerifictionCodeGuard]
];

const withTab = [
  { path: '', redirectTo: ' ', pathMatch: 'full'},
  { path: 'rent-sub', component: RentSubComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent },
      {path: 'forgotPassword', component: ForgotPasswordComponent },
      {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
      {path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]},
      { path: 'verifyCode', component: VerifyCodeComponent },
      { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]},
      { path: 'thank-you', component: ThankYouComponent, canActivate: [ThankYouGuard] }
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
const childroute = environment.signUpForAuotoPay ? withTab : withoutTab;

export const apiRoutes = [
    { path: '', component: HomeComponent  },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: `${environment.locationName}/frequently-asked-questions`, component: FaqComponent},
    { path: `${environment.locationName}/commerce-st`,
      component: LocationComponent,
      children: [
        {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
        { path: 'storage-units', component: ViewRatesComponent },
        { path: 'unit-sizer', component: UnitSizerComponent },
        { path: 'reserve-unit', component: ReserveComponent,
          children: [
            { path: '', component: ReserveUnitFormComponent },
            // { path: 'reserve', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
            { path: 'thank-you', component: ThankYouComponent, canActivate: [ThankYouGuard] }
          ]
        },
        { path: 'moveIn', component: ReserveComponent,
          children: [
            { path: '', component: ReserveUnitFormComponent },
            // { path: 'move-in', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
            { path: 'thank-you', component: ThankYouComponent, canActivate: [ThankYouGuard] }

          ]
        },
        // { path: 'photos', component: PhotosComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ],
      resolve: { data: AppResolver }
    },
    { path: `${environment.locationName}/pleasantview`,
      component: LocationComponent,
      children: [
        {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
        { path: 'storage-units', component: ViewRatesComponent },
        { path: 'unit-sizer', component: UnitSizerComponent },
        { path: 'reserve-unit', component: ReserveComponent,
          children: [
            // { path: '', component: ReserveUnitFormComponent },
            // { path: 'reserve', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
            { path: 'thank-you', component: ThankYouComponent,  canActivate: [ThankYouGuard] }
          ]
        },
        { path: 'move-in', component: ReserveComponent,
          children: [
            // { path: '', component: ReserveUnitFormComponent },
            // { path: 'move-in', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
            { path: 'thank-you', component: ThankYouComponent,  canActivate: [ThankYouGuard] }

          ]
        },
        // { path: 'photos', component: PhotosComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ],
      resolve: { data: AppResolver }
    },
    { path: `${environment.locationName}/clifford-north`,
      component: LocationComponent,
      children: [
        {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
        { path: 'storage-units', component: ViewRatesComponent },
        { path: 'unit-sizer', component: UnitSizerComponent },
        { path: 'reserve-unit', component: ReserveComponent,
          children: [
            // { path: '', component: ReserveUnitFormComponent },
            // { path: 'reserve', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
            { path: 'thank-you', component: ThankYouComponent, canActivate: [ThankYouGuard] }

          ]
        },
        { path: 'move-in', component: ReserveComponent,
          children: [
            // { path: '', component: ReserveUnitFormComponent },
            // { path: 'move-in', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
            { path: 'thank-you', component: ThankYouComponent, canActivate: [ThankYouGuard] }
          ]
        },
        // { path: 'photos', component: PhotosComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ],
      resolve: { data: AppResolver }
    },
    { path: `${environment.locationName}/clifford-south`,
      component: LocationComponent,
      children: [
        {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
        { path: 'storage-units', component: ViewRatesComponent },
        { path: 'unit-sizer', component: UnitSizerComponent },
        { path: 'reserve-unit', component: ReserveComponent,
          children: [
            // { path: '', component: ReserveUnitFormComponent },
            // { path: 'reserve', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
            { path: 'thank-you', component: ThankYouComponent, canActivate: [ThankYouGuard] }
          ]
        },
        { path: 'move-in', component: ReserveComponent,
          children: [
            // { path: '', component: ViewRatesPageComponent },
            // { path: '', component: ReserveUnitFormComponent },
            // { path: 'move-in', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
            { path: 'thank-you', component: ThankYouComponent,  canActivate: [ThankYouGuard] }

          ]
        },
        // { path: 'photos', component: PhotosComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ],
      resolve: { data: AppResolver }
    },
    { path: `${environment.locationName}/location5`,
      component: LocationComponent,
      children: [
        {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
        { path: 'storage-units', component: ViewRatesComponent },
        { path: 'unit-sizer', component: UnitSizerComponent },
        { path: 'reserve-unit', component: ReserveComponent,
          children: [
            // { path: '', component: ReserveUnitFormComponent },
            // { path: 'reserve', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
            { path: 'thank-you', component: ThankYouComponent, canActivate: [ThankYouGuard] }
          ]
        },
        { path: 'move-in', component: ReserveComponent,
          children: [
            // { path: '', component: ViewRatesPageComponent },
            // { path: '', component: ReserveUnitFormComponent },
            // { path: 'move-in', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
            { path: 'thank-you', component: ThankYouComponent,  canActivate: [ThankYouGuard] }

          ]
        },
        // { path: 'photos', component: PhotosComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ],
      resolve: { data: AppResolver }
    },
    { path: `${environment.locationName}/robertsdale`,
      component: LocationComponent,
      children: [
        {path: '', redirectTo: 'storage-units', pathMatch: 'full' },
        { path: 'storage-units', component: ViewRatesComponent },
        { path: 'unit-sizer', component: UnitSizerComponent },
        { path: 'reserve-unit', component: ReserveComponent,
          children: [
            // { path: '', component: ReserveUnitFormComponent },
            // { path: 'reserve', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
            { path: 'thank-you', component: ThankYouComponent, canActivate: [ThankYouGuard] }
          ]
        },
        { path: 'move-in', component: ReserveComponent,
          children: [
            // { path: '', component: ViewRatesPageComponent },
            // { path: '', component: ReserveUnitFormComponent },
            // { path: 'move-in', component: ReserveUnitFormComponent },
            // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
            { path: 'confirmation', component: ConfirmationDataComponent },
            { path: 'payReservationCharges', component: PayRentFormComponent },
            { path: 'payMoveInCharges', component: PayRentFormComponent },
            { path: 'thank-you', component: ThankYouComponent,  canActivate: [ThankYouGuard] }

          ]
        },
        // { path: 'photos', component: PhotosComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ],
      resolve: { data: AppResolver }
    },
    { path: 'review/commerce-st', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/pleasantview', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/clifford-north', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/clifford-south', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/location5', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/robertsdale', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'pay-rent', component: PaymentComponent },
  {
    path: 'pay-rent/commerce-st', component: PayRentComponent,
    children: childroute
  },
  {
    path: 'pay-rent/pleasantview', component: PayRentComponent,
    children: childroute
  },
  {
    path: 'pay-rent/clifford-north', component: PayRentComponent,
    children: childroute
  },
  {
    path: 'pay-rent/clifford-south', component: PayRentComponent,
    children: childroute
  },
  {
    path: 'pay-rent/location5', component: PayRentComponent,
    children: childroute
  },
  {
    path: 'pay-rent/robertsdale', component: PayRentComponent,
    children: childroute
  },
  { path: `${environment.locationName}/trailer-rental`, component: StorageTipsComponent },
  { path: `${environment.locationName}/trailer-info`, component: TrailerInfoComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'contact-commerce-st', component: ContactUsComponent},
  { path: 'contact-pleasantview', component: ContactUsComponent},
  { path: 'contact-clifford-north', component: ContactUsComponent},
  { path: 'contact-clifford-south', component: ContactUsComponent},
  { path: 'contact-location5', component: ContactUsComponent},
  { path: 'contact-robertsdale', component: ContactUsComponent},
  { path: '**', component: ErrorComponent },
  { path: `${environment.locationName}/trailer-rental`, component: StorageTipsComponent },
  { path: `${environment.locationName}/trailer-info`, component: TrailerInfoComponent },
];


export const iFrameRoutes = [
  { path: '', component: HomeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: `${environment.locationName}/commerce-st`,
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
  { path: `${environment.locationName}/pleasantview`,
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
  { path: `${environment.locationName}/clifford-north`,
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
  { path: `${environment.locationName}/clifford-south`,
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
  { path: `${environment.locationName}/location5`,
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
  { path: `${environment.locationName}/robertsdale`,
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
  { path: 'review/commerce-st', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/pleasantview', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/clifford-north', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/clifford-south', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/location5', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/robertsdale', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'pay-rent', component: PaymentIframeComponent },
  { path: 'pay-rent-commerce-st', component: PayRentFloridaComponent },
  { path: 'pay-rent-pleasantview', component: PayRentChesterComponent},
  { path: 'pay-rent-clifford-north', component: PayRentMontgomeryComponent},
  { path: 'pay-rent-clifford-south', component: PayRentMiddletownComponent},
  { path: 'pay-rent-location5', component: PayRentMontgomeryComponent},
  { path: 'pay-rent-robertsdale', component: PayRentMiddletownComponent},
  { path: `${environment.locationName}/trailer-rental`, component: StorageTipsComponent },
  { path: `${environment.locationName}/trailer-info`, component: TrailerInfoComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: '**', component: ErrorComponent },
];
