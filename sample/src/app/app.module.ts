import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TablesComponent } from './tables/tables.component';
import { ErrorComponent } from './error/error.component';
import { AccordionComponent } from './accordion/accordion.component';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { ErrorHandlerService } from './services/error-handler.service';
import { ReserveComponent } from './api-bundle/reserve/reserve.component';
import { ViewRatesComponent } from './api-bundle/view-rates/view-rates.component';
import { ViewRatesPageComponent } from './api-bundle/view-rates-page/view-rates-page.component';
import { ReserveUnitFormComponent } from './api-bundle/reserve-unit-form/reserve-unit-form.component';
import { ConfirmationDataComponent } from './api-bundle/confirmation-data/confirmation-data.component';
import { PayRentFormComponent } from './api-bundle/pay-rent-form/pay-rent-form.component';
import { PaymentComponent } from './api-bundle/payment/payment.component';
import { LoginComponent } from './api-bundle/login/login.component';
import { LoginModalComponent } from './api-bundle/login-modal/login-modal.component';
import { ForgotPasswordComponent } from './api-bundle/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './api-bundle/change-password/change-password.component';
import { VerifictionCodeGuard } from './auth-guard/verificationCode.guard';
import { VerifyCodeComponent } from './api-bundle/verify-code/verify-code.component';
import { DatePipe } from '@angular/common';
import { AuthGuard } from './auth-guard/auth.gurad';
import { AuthService } from './api-bundle/services/auth.service';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ResetPasswordComponent } from './api-bundle/reset-password/reset-password.component';
import { RequestInterceptorService } from './api-bundle/services/request-interceptor.service';
import { CanDeactivateGuard } from './preventRouteChange.guard';
import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';
import { UnitSizesComponent } from './unit-sizes/unit-sizes.component';
import { PhotosComponent } from './photos/photos.component';
import { ScriptHackComponent } from './script-hack/script-hack.component';
import { RentSubComponent } from './api-bundle/rent-sub/rent-sub.component';
import { AutoPayComponent } from './api-bundle/auto-pay/auto-pay.component';
import { PayRentComponent } from './api-bundle/pay-rent/pay-rent.component';
import { SignUpComponent } from './api-bundle/sign-up/sign-up.component';
import { TabsComponent } from './tabs/tabs.component';
import { ThankYouComponent } from './api-bundle/thank-you/thank-you.component';
import { ThankYouGuard } from './thank-you.guard';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AlternateDetailsComponent } from './alternate-details/alternate-details.component';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { UnitSizerModule } from './unit-sizer/unit-sizer.module';
import { HeaderModule } from './header/header.module';
import { StorageTipsModule } from './storage-tips/storage-tips.module';
import { PrivacyPolicyModule } from './privacy-policy/privacy-policy.module';
import { PayRentModule } from './api-bundle/pay-rent/pay-rent.module';

@NgModule({
  declarations: [
    // AppComponent,
    // HeaderComponent,
    // HomeComponent,
    // ContactComponent,
    // FooterComponent,
    ViewRatesComponent,
    // TablesComponent,
    ErrorComponent,
    ErrorHandlerComponent,
    // StorageTipsComponent,
    // AccordionComponent,
    ReserveComponent,
    ViewRatesComponent,
    ViewRatesPageComponent,
    ReserveUnitFormComponent,
    ConfirmationDataComponent,
    PayRentFormComponent,
    PaymentComponent,
    LoginComponent,
    LoginModalComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    VerifyCodeComponent,
    ResetPasswordComponent,
    // UnitSizerComponent,
    // UnitSizesComponent,
    PhotosComponent,
    ScriptHackComponent,
    AutoPayComponent,
    RentSubComponent,
    // PayRentComponent,
    SignUpComponent,
    // TabsComponent,
    ThankYouComponent,
    // PrivacyPolicyComponent,
    AlternateDetailsComponent,
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SelectDropDownModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    HeaderModule,
    PayRentModule
    // PrivacyPolicyModule,
    // StorageTipsModule
    // ContactModule,
    // UnitSizerModule,
  ],
  providers: [
    DatePipe,
    AuthService,
    AuthGuard,
    VerifictionCodeGuard,
    Title,
    CanDeactivateGuard,
    ThankYouGuard,
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    },
    Title,
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
          window.location.href = (route.data as any).externalUrl;
      }
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
