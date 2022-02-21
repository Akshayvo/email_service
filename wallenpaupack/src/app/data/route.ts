import { HomeComponent } from "../home/home.component";
import { LocationComponent } from "../location/location.component";
import { ViewRatesPageComponent } from "../api-bundle/view-rates-page/view-rates-page.component";
import { ReserveUnitFormComponent } from "../api-bundle/reserve-unit-form/reserve-unit-form.component";
import { ConfirmationDataComponent } from "../api-bundle/confirmation-data/confirmation-data.component";
import { PayRentFormComponent } from "../api-bundle/pay-rent-form/pay-rent-form.component";
import { UnitSizerComponent } from "../unit-sizer/unit-sizer.component";
// import { PhotosComponent } from '../photos/photos.component';
import { AboutUsComponent } from "../about-us/about-us.component";
import { DirectionsComponent } from "../directions/directions.component";
import { AppResolver } from "../api-bundle/resolver/app.resolver";
import { ErrorHandlerComponent } from "../error-handler/error-handler.component";
import { TruckRentalComponent } from "../truck-rental/truck-rental.component";
import { LoginComponent } from "../api-bundle/login/login.component";
import { ForgotPasswordComponent } from "../api-bundle/forgot-password/forgot-password.component";
import { ChangePasswordComponent } from "../api-bundle/change-password/change-password.component";
import { AuthGuard } from "../auth.gurad";
import { VerifyCodeComponent } from "../api-bundle/verify-code/verify-code.component";
import { ResetPasswordComponent } from "../api-bundle/reset-password/reset-password.component";
import { VerifictionCodeGuard } from "../verificationCode.guard";
import { ContactComponent } from "../contact/contact.component";
import { ErrorComponent } from "../error/error.component";
import { PayRentComponent } from "../api-bundle/pay-rent/pay-rent.component";
import { ViewRatesComponent } from "../api-bundle/view-rates/view-rates.component";
import { ReserveComponent } from "../api-bundle/reserve/reserve.component";
import { RentSubComponent } from "../api-bundle/rent-sub/rent-sub.component";
import { SignUpComponent } from "../api-bundle/sign-up/sign-up.component";
import { AutoPayComponent } from "../api-bundle/auto-pay/auto-pay.component";
import { PayRentChesterComponent } from "../pay-rent-chester/pay-rent-chester.component";
import { PayRentMontgomeryComponent } from "../pay-rent-montgomery/pay-rent-montgomery.component";
import { PayRentMiddletownComponent } from "../pay-rent-middletown/pay-rent-middletown.component";
import { PayRentFloridaComponent } from "../pay-rent-florida/pay-rent-florida.component";
import { ReserveUnitComponent } from "../reserve-unit/reserve-unit.component";
import { StorageUnitComponent } from "../storage-unit/storage-unit.component";
import { PaymentComponent } from "../api-bundle/payment/payment.component";
import { PaymentIframeComponent } from "../payment-iframe/payment-iframe.component";
import { ThankYouComponent } from "../api-bundle/thank-you/thank-you.component";
import { environment } from "../../environments/environment";
import { PrivacyPolicyComponent } from "../privacy-policy/privacy-policy.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";
import { ThankYouGuard } from "../thank-you.guard";
import { FaqComponent } from "../faq/faq.component";
import { GalleryComponent } from "../gallery/gallery.component";
// import { UpdateDetailsComponent } from "../api-bundle/update-details/update-details.component";
// import { UpdateComponent } from "../api-bundle/update/update.component";
// import { GalleryComponent } from "../gallery/gallery.component";

const withoutTab = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "forgotPassword", component: ForgotPasswordComponent },
  {
    path: "changePassword",
    component: ChangePasswordComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "payment",
    component: PayRentFormComponent,
    canActivate: [AuthGuard],
  },
  { path: "verifyCode", component: VerifyCodeComponent },
  {
    path: "reset",
    component: ResetPasswordComponent,
    canActivate: [VerifictionCodeGuard],
  },
  {
    path: "thank-you",
    component: ThankYouComponent,
    canActivate: [ThankYouGuard],
  },
  // canActivate: [VerifictionCodeGuard]
];

const withTab = [
  { path: "", redirectTo: " ", pathMatch: "full" },
  {
    path: `rent-sub`,
    component: RentSubComponent,
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "login", component: LoginComponent },
      { path: "forgotPassword", component: ForgotPasswordComponent },
      {
        path: "changePassword",
        component: ChangePasswordComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "payment",
        component: PayRentFormComponent,
        canActivate: [AuthGuard],
      },
      { path: "verifyCode", component: VerifyCodeComponent },
      {
        path: "reset",
        component: ResetPasswordComponent,
        canActivate: [VerifictionCodeGuard],
      },
      {
        path: "thank-you",
        component: ThankYouComponent,
        canActivate: [ThankYouGuard],
      },
      // canActivate: [VerifictionCodeGuard]
    ],
  },
  {
    path: `sign-up`,
    component: SignUpComponent,
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "login", component: LoginComponent },
      { path: "forgotPassword", component: ForgotPasswordComponent },
      {
        path: "changePassword",
        component: ChangePasswordComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "auto-pay",
        component: AutoPayComponent,
        canActivate: [AuthGuard],
      },
      { path: "verifyCode", component: VerifyCodeComponent },
      {
        path: "reset",
        component: ResetPasswordComponent,
        canActivate: [VerifictionCodeGuard],
      },
      // canActivate: [VerifictionCodeGuard]
    ],
  },
  // {
  //   path: `update`,
  //   component: UpdateComponent,
  //   children: [
  //     { path: "", redirectTo: "login", pathMatch: "full" },
  //     { path: "login", component: LoginComponent },
  //     { path: "forgotPassword", component: ForgotPasswordComponent },
  //     {
  //       path: "changePassword",
  //       component: ChangePasswordComponent,
  //       canActivate: [AuthGuard],
  //     },
  //     {
  //       path: "update-information",
  //       component: UpdateDetailsComponent,
  //       canActivate: [AuthGuard],
  //     },
  //     { path: "verifyCode", component: VerifyCodeComponent },
  //     {
  //       path: "reset",
  //       component: ResetPasswordComponent,
  //       canActivate: [VerifictionCodeGuard],
  //     },
  //     // canActivate: [VerifictionCodeGuard]
  //   ],
  // },
];

// const reservationForm = environment
const childroute = environment.signUpForAuotoPay ? withTab : withoutTab;

export const apiRoutes = [
  { path: "", component: HomeComponent },
  { path: "privacy-policy", component: PrivacyPolicyComponent },
  { path: "storage-tips", redirectTo: "/" },
  { path: "capacity-estimator", redirectTo: "/" },
  { path: "rental-policies", redirectTo: "/" },
  { path: "locations", redirectTo: "/" },
  { path: "rental-options", redirectTo: "/" },
  { path: "locks-sale", redirectTo: "/" },
  { path: "rent-unit", redirectTo: "/" },
  { path: "requirements-for-using-our-truck", redirectTo: "/" },
  { path: "frequently-asked-questions", component: FaqComponent },
  {
    path: `${environment.locationName}/greentown`,
    component: LocationComponent,
    children: [
      { path: "", redirectTo: "storage-units", pathMatch: "full" },
      { path: "storage-units", component: ViewRatesComponent },
      { path: "unit-sizer", component: UnitSizerComponent },
      {
        path: "reserve-unit",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "reserve", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      {
        path: "move-in",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "move-in", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      // { path: 'photos', component: PhotosComponent },
      { path: "photos", component: GalleryComponent },
      { path: "about", component: AboutUsComponent },
      { path: "directions", component: DirectionsComponent },
    ],
    resolve: { data: AppResolver },
  },
  {
    path: `${environment.locationName}/lake-ariel`,
    component: LocationComponent,
    children: [
      { path: "", redirectTo: "storage-units", pathMatch: "full" },
      { path: "storage-units", component: ViewRatesComponent },
      { path: "unit-sizer", component: UnitSizerComponent },
      {
        path: "reserve-unit",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "reserve", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      {
        path: "move-in",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "move-in", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      { path: "photos", component: GalleryComponent },
      { path: "about", component: AboutUsComponent },
      { path: "directions", component: DirectionsComponent },
    ],
    resolve: { data: AppResolver },
  },
  {
    path: `${environment.locationName}/hawley`,
    component: LocationComponent,
    children: [
      { path: "", redirectTo: "storage-units", pathMatch: "full" },
      { path: "storage-units", component: ViewRatesComponent },
      { path: "unit-sizer", component: UnitSizerComponent },
      {
        path: "reserve-unit",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "reserve", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      {
        path: "move-in",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "move-in", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      { path: "photos", component: GalleryComponent },
      { path: "about", component: AboutUsComponent },
      { path: "directions", component: DirectionsComponent },
    ],
    resolve: { data: AppResolver },
  },

  {
    path: `${environment.locationName}/lakeville`,
    component: LocationComponent,
    children: [
      { path: "", redirectTo: "storage-units", pathMatch: "full" },
      { path: "storage-units", component: ViewRatesComponent },
      { path: "unit-sizer", component: UnitSizerComponent },
      {
        path: "reserve-unit",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "reserve", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      {
        path: "move-in",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "move-in", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      // { path: 'photos', component: PhotosComponent },
      { path: "photos", component: GalleryComponent },
      { path: "about", component: AboutUsComponent },
      { path: "directions", component: DirectionsComponent },
    ],
    resolve: { data: AppResolver },
  },
  {
    path: `${environment.locationName}/greentown1`,
    component: LocationComponent,
    children: [
      { path: "", redirectTo: "storage-units", pathMatch: "full" },
      { path: "storage-units", component: ViewRatesComponent },
      { path: "unit-sizer", component: UnitSizerComponent },
      {
        path: "reserve-unit",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "reserve", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      {
        path: "move-in",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "move-in", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      // { path: 'photos', component: PhotosComponent },
      { path: "photos", component: GalleryComponent },
      { path: "about", component: AboutUsComponent },
      { path: "directions", component: DirectionsComponent },
    ],
    resolve: { data: AppResolver },
  },

  

  {
    path: `${environment.locationName}/greentown/view-rates`,
    component: LocationComponent,
    children: [
      { path: "", redirectTo: "storage-units", pathMatch: "full" },
      { path: "storage-units", component: ViewRatesComponent },
      { path: "unit-sizer", component: UnitSizerComponent },
      {
        path: "reserve-unit",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "reserve", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      {
        path: "move-in",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "move-in", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      // { path: 'photos', component: PhotosComponent },
      { path: "photos", component: GalleryComponent },
      { path: "about", component: AboutUsComponent },
      { path: "directions", component: DirectionsComponent },
    ],
    resolve: { data: AppResolver },
  },
  {
    path: `${environment.locationName}/lake-ariel/view-rates`,
    component: LocationComponent,
    children: [
      { path: "", redirectTo: "storage-units", pathMatch: "full" },
      { path: "storage-units", component: ViewRatesComponent },
      { path: "unit-sizer", component: UnitSizerComponent },
      {
        path: "reserve-unit",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "reserve", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      {
        path: "move-in",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "move-in", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      // { path: 'photos', component: PhotosComponent },
      { path: "photos", component: GalleryComponent },
      { path: "about", component: AboutUsComponent },
      { path: "directions", component: DirectionsComponent },
    ],
    resolve: { data: AppResolver },
  },
  {
    path: `${environment.locationName}/hawley/view-rates`,
    component: LocationComponent,
    children: [
      { path: "", redirectTo: "storage-units", pathMatch: "full" },
      { path: "storage-units", component: ViewRatesComponent },
      { path: "unit-sizer", component: UnitSizerComponent },
      {
        path: "reserve-unit",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "reserve", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      {
        path: "move-in",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "move-in", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      // { path: 'photos', component: PhotosComponent },
      { path: "photos", component: GalleryComponent },
      { path: "about", component: AboutUsComponent },
      { path: "directions", component: DirectionsComponent },
    ],
    resolve: { data: AppResolver },
  },
  {
    path: `${environment.locationName}/lakeville/view-rates`,
    component: LocationComponent,
    children: [
      { path: "", redirectTo: "storage-units", pathMatch: "full" },
      { path: "storage-units", component: ViewRatesComponent },
      { path: "unit-sizer", component: UnitSizerComponent },
      {
        path: "reserve-unit",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "reserve", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      {
        path: "move-in",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "move-in", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      // { path: 'photos', component: PhotosComponent },
      { path: "photos", component: GalleryComponent },
      { path: "about", component: AboutUsComponent },
      { path: "directions", component: DirectionsComponent },
    ],
    resolve: { data: AppResolver },
  },
  {
    path: `${environment.locationName}/greentown1/view-rates`,
    component: LocationComponent,
    children: [
      { path: "", redirectTo: "storage-units", pathMatch: "full" },
      { path: "storage-units", component: ViewRatesComponent },
      { path: "unit-sizer", component: UnitSizerComponent },
      {
        path: "reserve-unit",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "reserve", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      {
        path: "move-in",
        component: ReserveComponent,
        children: [
          { path: "", component: ReserveUnitFormComponent },
          { path: "move-in", component: ReserveUnitFormComponent },
          // { path: 'confirmation', component: ConfirmationDataComponent, canDeactivate: [CanDeactivateGuard] },
          { path: "confirmation", component: ConfirmationDataComponent },
          { path: "payReservationCharges", component: PayRentFormComponent },
          { path: "payMoveInCharges", component: PayRentFormComponent },
          {
            path: "thank-you",
            component: ThankYouComponent,
            canActivate: [ThankYouGuard],
          },
        ],
      },
      // { path: 'photos', component: PhotosComponent },
      { path: "photos", component: GalleryComponent },
      { path: "about", component: AboutUsComponent },
      { path: "directions", component: DirectionsComponent },
    ],
    resolve: { data: AppResolver },
  },

  {
    path: "review/greentown",
    component: HomeComponent,
    resolve: {
      url: "externalUrlRedirectResolver",
    },
    data: {
      externalUrl: "",
    },
  },
  {
    path: "review/lake-ariel",
    component: HomeComponent,
    resolve: {
      url: "externalUrlRedirectResolver",
    },
    data: {
      externalUrl: "",
    },
  },
  {
    path: "review/hawley",
    component: HomeComponent,
    resolve: {
      url: "externalUrlRedirectResolver",
    },
    data: {
      externalUrl: "",
    },
  },
  {
    path: "review/lakeville",
    component: HomeComponent,
    resolve: {
      url: "externalUrlRedirectResolver",
    },
    data: {
      externalUrl: "",
    },
  },
  {
    path: "review/greentown1",
    component: HomeComponent,
    resolve: {
      url: "externalUrlRedirectResolver",
    },
    data: {
      externalUrl: "",
    },
  },
 
  { path: "error", component: ErrorHandlerComponent },
  { path: "pay-rent", component: PaymentComponent },
  {
    path: "pay-rent/greentown",
    component: PayRentComponent,
    children: childroute,
  },
  {
    path: "pay-rent/lake-ariel",
    component: PayRentComponent,
    children: childroute,
  },
  {
    path: "pay-rent/hawley",
    component: PayRentComponent,
    children: childroute,
  },
  {
    path: "pay-rent/lakeville",
    component: PayRentComponent,
    children: childroute,
  },
  {
    path: "pay-rent/greentown1",
    component: PayRentComponent,
    children: childroute,
  },

  {
    path: `${environment.locationName}/truck-rental`,
    component: TruckRentalComponent,
  },
  { path: "contact-us", component: ContactComponent },
  { path: "contact-greentown", component: ContactUsComponent },
  { path: "contact-lake-ariel", component: ContactUsComponent },
  { path: "contact-hawley", component: ContactUsComponent },
  { path: "contact-lakeville", component: ContactUsComponent },
  { path: "contact-greentown1", component: ContactUsComponent },
  { path: "**", component: ErrorComponent },
  { path: "truck-rental", component: TruckRentalComponent },
];

export const iFrameRoutes = [
  { path: "", component: HomeComponent },
  { path: "privacy-policy", component: PrivacyPolicyComponent },
  {
    path: "location/greentown",
    component: LocationComponent,
    children: [
      { path: "", redirectTo: "storage-units", pathMatch: "full" },
      { path: "storage-units", component: StorageUnitComponent },
      { path: "unit-sizer", component: UnitSizerComponent },
      { path: "reserve-unit", component: ReserveUnitComponent },
      { path: "about", component: AboutUsComponent },
      { path: "directions", component: DirectionsComponent },
    ],
  },
  
  
  { path: "error", component: ErrorHandlerComponent },
  { path: "pay-rent", component: PaymentIframeComponent },
  { path: "pay-rent-greentown", component: PayRentFloridaComponent },
  { path: "pay-rent-silverhill", component: PayRentChesterComponent },
  { path: "pay-rent-barnwell", component: PayRentMontgomeryComponent },
  { path: "pay-rent-belforest", component: PayRentMiddletownComponent },
  { path: "pay-rent-fairhope", component: PayRentMontgomeryComponent },
  { path: "pay-rent-robertsdale", component: PayRentMiddletownComponent },
  { path: "truck-rental", component: TruckRentalComponent },
  { path: "contact-us", component: ContactComponent },
  { path: "**", component: ErrorComponent },
];
