import { HomeComponent } from "../home/home.component";
import { StorageTipsComponent } from "../storage-tips/storage-tips.component";
import { ReserveComponent } from "../api-bundle/reserve/reserve.component";
import { ContactComponent } from "../contact/contact.component";
import { ViewRatesComponent } from "../api-bundle/view-rates/view-rates.component";
import { ViewRatesPageComponent } from "../api-bundle/view-rates-page/view-rates-page.component";
import { ReserveUnitFormComponent } from "../api-bundle/reserve-unit-form/reserve-unit-form.component";
import { ConfirmationDataComponent } from "../api-bundle/confirmation-data/confirmation-data.component";
import { PayRentFormComponent } from "../api-bundle/pay-rent-form/pay-rent-form.component";
import { PaymentComponent } from "../api-bundle/payment/payment.component";
import { LoginComponent } from "../api-bundle/login/login.component";
import { ForgotPasswordComponent } from "../api-bundle/forgot-password/forgot-password.component";
import { AuthGuard } from "../auth-guard/auth.gurad";
import { ErrorHandlerComponent } from "../error-handler/error-handler.component";
import { ErrorComponent } from "../error/error.component";
import { PaymentIframePageComponent } from "../iframe-bundle/payment-iframe-page/payment-iframe-page.component";
import { ViewRatesIframePageComponent } from "../iframe-bundle/view-rates-iframe-page/view-rates-iframe-page.component";
import { ReserveUnitIframePageComponent } from "../iframe-bundle/reserve-unit-iframe-page/reserve-unit-iframe-page.component";
import { ChangePasswordComponent } from "../api-bundle/change-password/change-password.component";
import { VerifyCodeComponent } from "../api-bundle/verify-code/verify-code.component";
import { ResetPasswordComponent } from "../api-bundle/reset-password/reset-password.component";
import { VerifictionCodeGuard } from "../auth-guard/verificationCode.guard";
import { UnitSizerComponent } from "../unit-sizer/unit-sizer.component";
import { ConfirmationPageComponent } from "../api-bundle/confirmation-page/confirmation-page.component";
import { RentSubComponent } from "../api-bundle/rent-sub/rent-sub.component";
import { SignUpComponent } from "../api-bundle/sign-up/sign-up.component";
import { AutoPayComponent } from "../api-bundle/auto-pay/auto-pay.component";
import { ThankYouComponent } from "../api-bundle/thank-you/thank-you.component";
import { ThankYouGuard } from "../thank-you.guard";
import { environment } from "../../../src/environments/environment";
import { PayRentComponent } from "../api-bundle/pay-rent/pay-rent.component";

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
    path: "rent-sub",
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
      // canActivate: [VerifictionCodeGuard]
    ],
  },
  {
    path: "sign-up",
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
];
const childroute = environment.signUpForAuotoPay ? withTab : withoutTab;

export const apiRoutes = [
  // Fallback when no prior route is matched
  { path: "", component: HomeComponent },
  { path: "storage-tips", component: StorageTipsComponent },
  { path: "reserve-unit", component: ReserveComponent },
  { path: "storageTips", component: StorageTipsComponent },
  { path: "contact-us", component: ContactComponent },
  { path: "unit-sizer", component: UnitSizerComponent },
  {
    path: "view-rates",
    component: ViewRatesComponent,
    children: [
      { path: "", component: ViewRatesPageComponent },
      { path: "reserve", component: ReserveUnitFormComponent },
      { path: "move-in", component: ReserveUnitFormComponent },
      { path: "confirmation", component: ConfirmationDataComponent },
      { path: "confirmation-page", component: ConfirmationPageComponent },
      { path: "payReservationCharges", component: PayRentFormComponent },
      { path: "payMoveInCharges", component: PayRentFormComponent },
    ],
  },
  {
    path: "pay-rent",
    component: PaymentComponent,
  },
  {
    path: "pay-rent/storage-qc-one",
    component: PayRentComponent,
    children: childroute,
  },
  {
    path: "pay-rent/storage-qc-two",
    component: PayRentComponent,
    children: childroute,
  },
  { path: "forgot-password", component: ForgotPasswordComponent },
  {
    path: "review",
    component: HomeComponent,
    resolve: {
      url: "externalUrlRedirectResolver",
    },
    data: {
      externalUrl:
        "http://search.google.com/local/writereview?placeid=ChIJsz6B36fO44cRbveGUD7o_a8",
    },
  },
  { path: "error", component: ErrorHandlerComponent },
  { path: "**", component: ErrorComponent },
];

export const iFrameRoutes = [
  // Fallback when no prior route is matched
  { path: "", component: HomeComponent },
  { path: "pay-rent", component: PaymentIframePageComponent },
  { path: "storage-tips", component: StorageTipsComponent },
  { path: "view-rates", component: ViewRatesIframePageComponent },
  { path: "reserve-unit", component: ReserveUnitIframePageComponent },
  { path: "storageTips", component: StorageTipsComponent },
  { path: "contact-us", component: ContactComponent },
  { path: "unit-sizer", component: UnitSizerComponent },
  {
    path: "review",
    component: HomeComponent,
    resolve: {
      url: "externalUrlRedirectResolver",
    },
    data: {
      externalUrl:
        "http://search.google.com/local/writereview?placeid=ChIJsz6B36fO44cRbveGUD7o_a8",
    },
  },
  { path: "error", component: ErrorHandlerComponent },
  { path: "**", component: ErrorComponent },
];
