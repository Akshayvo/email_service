"use strict";
exports.__esModule = true;
exports.iFrameRoutes = exports.apiRoutes = void 0;
var home_component_1 = require("../home/home.component");
var storage_tips_component_1 = require("../storage-tips/storage-tips.component");
var reserve_component_1 = require("../api-bundle/reserve/reserve.component");
var contact_component_1 = require("../contact/contact.component");
var view_rates_component_1 = require("../api-bundle/view-rates/view-rates.component");
var view_rates_page_component_1 = require("../api-bundle/view-rates-page/view-rates-page.component");
var reserve_unit_form_component_1 = require("../api-bundle/reserve-unit-form/reserve-unit-form.component");
var confirmation_data_component_1 = require("../api-bundle/confirmation-data/confirmation-data.component");
var pay_rent_form_component_1 = require("../api-bundle/pay-rent-form/pay-rent-form.component");
var login_component_1 = require("../api-bundle/login/login.component");
var forgot_password_component_1 = require("../api-bundle/forgot-password/forgot-password.component");
var auth_gurad_1 = require("../auth-guard/auth.gurad");
var error_handler_component_1 = require("../error-handler/error-handler.component");
var error_component_1 = require("../error/error.component");
var payment_iframe_page_component_1 = require("../iframe-bundle/payment-iframe-page/payment-iframe-page.component");
var view_rates_iframe_page_component_1 = require("../iframe-bundle/view-rates-iframe-page/view-rates-iframe-page.component");
var reserve_unit_iframe_page_component_1 = require("../iframe-bundle/reserve-unit-iframe-page/reserve-unit-iframe-page.component");
var change_password_component_1 = require("../api-bundle/change-password/change-password.component");
var verify_code_component_1 = require("../api-bundle/verify-code/verify-code.component");
var reset_password_component_1 = require("../api-bundle/reset-password/reset-password.component");
var verificationCode_guard_1 = require("../auth-guard/verificationCode.guard");
var unit_sizer_component_1 = require("../unit-sizer/unit-sizer.component");
var pay_rent_component_1 = require("../api-bundle/pay-rent/pay-rent.component");
var rent_sub_component_1 = require("../api-bundle/rent-sub/rent-sub.component");
var auto_pay_component_1 = require("../api-bundle/auto-pay/auto-pay.component");
var sign_up_component_1 = require("../api-bundle/sign-up/sign-up.component");
var environment_1 = require("../../environments/environment");
var thank_you_component_1 = require("../api-bundle/thank-you/thank-you.component");
var thank_you_guard_1 = require("../thank-you.guard");
var privacy_policy_component_1 = require("../privacy-policy/privacy-policy.component");
var withoutTab = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'forgotPassword', component: forgot_password_component_1.ForgotPasswordComponent },
    { path: 'changePassword', component: change_password_component_1.ChangePasswordComponent, canActivate: [auth_gurad_1.AuthGuard] },
    { path: 'payment', component: pay_rent_form_component_1.PayRentFormComponent, canActivate: [auth_gurad_1.AuthGuard] },
    { path: 'verifyCode', component: verify_code_component_1.VerifyCodeComponent },
    { path: 'reset', component: reset_password_component_1.ResetPasswordComponent, canActivate: [verificationCode_guard_1.VerifictionCodeGuard] },
    { path: 'thank-you', component: thank_you_component_1.ThankYouComponent, canActivate: [thank_you_guard_1.ThankYouGuard] }
    // canActivate: [VerifictionCodeGuard]
];
var withTab = [
    { path: '', redirectTo: 'rent-sub', pathMatch: 'full' },
    { path: 'rent-sub', component: rent_sub_component_1.RentSubComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'forgotPassword', component: forgot_password_component_1.ForgotPasswordComponent },
            { path: 'changePassword', component: change_password_component_1.ChangePasswordComponent, canActivate: [auth_gurad_1.AuthGuard] },
            { path: 'payment', component: pay_rent_form_component_1.PayRentFormComponent, canActivate: [auth_gurad_1.AuthGuard] },
            { path: 'verifyCode', component: verify_code_component_1.VerifyCodeComponent },
            { path: 'reset', component: reset_password_component_1.ResetPasswordComponent, canActivate: [verificationCode_guard_1.VerifictionCodeGuard] },
            { path: 'thank-you', component: thank_you_component_1.ThankYouComponent, canActivate: [thank_you_guard_1.ThankYouGuard] }
            // canActivate: [VerifictionCodeGuard]
        ]
    },
    { path: 'sign-up', component: sign_up_component_1.SignUpComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'forgotPassword', component: forgot_password_component_1.ForgotPasswordComponent },
            { path: 'changePassword', component: change_password_component_1.ChangePasswordComponent, canActivate: [auth_gurad_1.AuthGuard] },
            { path: 'auto-pay', component: auto_pay_component_1.AutoPayComponent, canActivate: [auth_gurad_1.AuthGuard] },
            { path: 'verifyCode', component: verify_code_component_1.VerifyCodeComponent },
            { path: 'reset', component: reset_password_component_1.ResetPasswordComponent, canActivate: [verificationCode_guard_1.VerifictionCodeGuard] }
            // canActivate: [VerifictionCodeGuard]
        ]
    }
];
// const reservationForm = environment
var childroute = environment_1.environment.signUpForAuotoPay ? withTab : withoutTab;
var reviewURL = "";
exports.apiRoutes = [
    // Fallback when no prior route is matched
    { path: '', component: home_component_1.HomeComponent },
    { path: environment_1.environment.locationName + "/storage-tips", component: storage_tips_component_1.StorageTipsComponent },
    { path: environment_1.environment.locationName + "/reserve-unit", component: reserve_component_1.ReserveComponent },
    { path: 'contact-us', component: contact_component_1.ContactComponent },
    { path: 'unit-sizer', component: unit_sizer_component_1.UnitSizerComponent },
    { path: 'privacy-policy', component: privacy_policy_component_1.PrivacyPolicyComponent },
    {
        path: environment_1.environment.locationName + "/view-rates",
        component: view_rates_component_1.ViewRatesComponent,
        children: [
            { path: '', component: view_rates_page_component_1.ViewRatesPageComponent },
            { path: 'reserve', component: reserve_unit_form_component_1.ReserveUnitFormComponent },
            { path: 'move-in', component: reserve_unit_form_component_1.ReserveUnitFormComponent },
            { path: 'confirmation', component: confirmation_data_component_1.ConfirmationDataComponent },
            { path: 'payReservationCharges', component: pay_rent_form_component_1.PayRentFormComponent },
            { path: 'payMoveInCharges', component: pay_rent_form_component_1.PayRentFormComponent },
            { path: 'thank-you', component: thank_you_component_1.ThankYouComponent, canActivate: [thank_you_guard_1.ThankYouGuard] }
        ]
    },
    {
        path: environment_1.environment.locationName + "/rent-now",
        component: view_rates_component_1.ViewRatesComponent,
        children: [
            { path: '', component: view_rates_page_component_1.ViewRatesPageComponent },
            { path: 'reserve', component: reserve_unit_form_component_1.ReserveUnitFormComponent },
            { path: 'move-in', component: reserve_unit_form_component_1.ReserveUnitFormComponent },
            { path: 'confirmation', component: confirmation_data_component_1.ConfirmationDataComponent },
            { path: 'payReservationCharges', component: pay_rent_form_component_1.PayRentFormComponent },
            { path: 'payMoveInCharges', component: pay_rent_form_component_1.PayRentFormComponent },
            { path: 'thank-you', component: thank_you_component_1.ThankYouComponent, canActivate: [thank_you_guard_1.ThankYouGuard] }
        ]
    },
    {
        path: 'pay-rent', component: pay_rent_component_1.PayRentComponent,
        children: childroute
    },
    { path: 'forgot-password', component: forgot_password_component_1.ForgotPasswordComponent },
    { path: 'review', component: home_component_1.HomeComponent,
        resolve: {
            url: 'externalUrlRedirectResolver'
        }, data: {
            externalUrl: "" + reviewURL
        }
    },
    { path: 'error', component: error_handler_component_1.ErrorHandlerComponent },
    { path: '**', component: error_component_1.ErrorComponent }
];
exports.iFrameRoutes = [
    // Fallback when no prior route is matched
    { path: '', component: home_component_1.HomeComponent },
    { path: 'pay-rent', component: payment_iframe_page_component_1.PaymentIframePageComponent },
    { path: environment_1.environment.locationName + "/storage-tips", component: storage_tips_component_1.StorageTipsComponent },
    { path: environment_1.environment.locationName + "/view-rates", component: view_rates_iframe_page_component_1.ViewRatesIframePageComponent },
    { path: environment_1.environment.locationName + "/reserve-unit", component: reserve_unit_iframe_page_component_1.ReserveUnitIframePageComponent },
    { path: 'contact-us', component: contact_component_1.ContactComponent },
    { path: 'unit-sizer', component: unit_sizer_component_1.UnitSizerComponent },
    { path: 'privacy-policy', component: privacy_policy_component_1.PrivacyPolicyComponent },
    { path: 'review', component: home_component_1.HomeComponent,
        resolve: {
            url: 'externalUrlRedirectResolver'
        }, data: {
            externalUrl: "" + reviewURL
        }
    },
    { path: 'error', component: error_handler_component_1.ErrorHandlerComponent },
    { path: '**', component: error_component_1.ErrorComponent }
];
