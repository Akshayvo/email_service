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
import { GalleryComponent } from '../gallery/gallery.component';
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
    { path: 'frequently-asked-questions', component: FaqComponent},
    { path:'faq',component: HomeComponent},
    { path:'test',component: HomeComponent},
    { path: `${environment.locationName}/confederate`,
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
        { path: 'photos', component: GalleryComponent },
        { path: 'about', component: AboutUsComponent },
        { path: 'directions', component: DirectionsComponent },
      ],
      resolve: { data: AppResolver }
    },
    { path: `${environment.locationName}/refuge`,
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
    { path: `${environment.locationName}/old-philadelphia`,
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
    { path: `${environment.locationName}/n-main`,
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
    { path: `${environment.locationName}/talking-rock`,
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
    { path: `${environment.locationName}/campus-drive`,
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
    { path: 'review/confederate', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/refuge', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/old-philadelphia', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/n-main', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/talking-rock', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/campus-drive', component: HomeComponent,
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
    path: 'pay-rent/confederate', component: PayRentComponent,
    children: childroute
  },
  {
    path: 'pay-rent/refuge', component: PayRentComponent,
    children: childroute
  },
  {
    path: 'pay-rent/old-philadelphia', component: PayRentComponent,
    children: childroute
  },
  {
    path: 'pay-rent/n-main', component: PayRentComponent,
    children: childroute
  },
  {
    path: 'pay-rent/talking-rock', component: PayRentComponent,
    children: childroute
  },
  {
    path: 'pay-rent/campus-drive', component: PayRentComponent,
    children: childroute
  },
  { path: `${environment.locationName}/storage-tips`, component: StorageTipsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'contact-confederate', component: ContactUsComponent},
  { path: 'contact-silverhill', component: ContactUsComponent},
  { path: 'contact-old-philadelphia', component: ContactUsComponent},
  { path: 'contact-n-main', component: ContactUsComponent},
  { path: 'contact-talking-rock', component: ContactUsComponent},
  { path: 'contact-campus-drive', component: ContactUsComponent},
  { path: '**', component: ErrorComponent },
  { path: `${environment.locationName}/storage-tips`, component: StorageTipsComponent },
];


export const iFrameRoutes = [
  { path: '', component: HomeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: `${environment.locationName}/confederate`,
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
  { path: `${environment.locationName}/refuge`,
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
  { path: `${environment.locationName}/old-philadelphia`,
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
  { path: `${environment.locationName}/n-main`,
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
  { path: `${environment.locationName}/talking-rock`,
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
  { path: `${environment.locationName}/campus-drive`,
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
  { path: 'review/confederate', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/silverhill', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/old-philadelphia', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/n-main', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/talking-rock', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/campus-drive', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'pay-rent', component: PaymentIframeComponent },
  { path: 'pay-rent-confederate', component: PayRentFloridaComponent },
  { path: 'pay-rent-refuge', component: PayRentChesterComponent},
  { path: 'pay-rent-old-philadelphia', component: PayRentMontgomeryComponent},
  { path: 'pay-rent-n-main', component: PayRentMiddletownComponent},
  { path: 'pay-rent-talking-rock', component: PayRentMontgomeryComponent},
  { path: 'pay-rent-campus-drive', component: PayRentMiddletownComponent},
  { path: `${environment.locationName}/storage-tips`, component: StorageTipsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: '**', component: ErrorComponent },
];
