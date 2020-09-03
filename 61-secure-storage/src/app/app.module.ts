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
// import { ViewRatesComponent } from './view-rates/view-rates.component';
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
import { ViewRatesIframePageComponent } from './iframe-bundle/view-rates-iframe-page/view-rates-iframe-page.component';
import { ViewRatesPageComponent } from './api-bundle/view-rates-page/view-rates-page.component';
import { ReserveUnitFormComponent } from './api-bundle/reserve-unit-form/reserve-unit-form.component';
import { ReserveUnitIframePageComponent } from './iframe-bundle/reserve-unit-iframe-page/reserve-unit-iframe-page.component';
import { ConfirmationDataComponent } from './api-bundle/confirmation-data/confirmation-data.component';
import { PayRentFormComponent } from './api-bundle/pay-rent-form/pay-rent-form.component';
import { PaymentComponent } from './api-bundle/payment/payment.component';
import { PaymentIframePageComponent } from './iframe-bundle/payment-iframe-page/payment-iframe-page.component';
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
import { ConfirmationPageComponent } from './api-bundle/confirmation-page/confirmation-page.component';
import { ScriptHackComponent } from './script-hack/script-hack.component';
import { RentSubComponent } from '../app/rent-sub/rent-sub.component';
import { TabsComponent } from '../app/tabs/tabs.component';
import { AutoPayComponent } from './api-bundle/auto-pay/auto-pay.component';
import { SignUpComponent } from './api-bundle/sign-up/sign-up.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    ViewRatesComponent,
    TablesComponent,
    ErrorComponent,
    ErrorHandlerComponent,
    StorageTipsComponent,
    AccordionComponent,
    ReserveComponent,
    ViewRatesComponent,
    ViewRatesIframePageComponent,
    ViewRatesPageComponent,
    ReserveUnitFormComponent,
    ReserveUnitIframePageComponent,
    ConfirmationDataComponent,
    PayRentFormComponent,
    PaymentComponent,
    PaymentIframePageComponent,
    LoginComponent,
    LoginModalComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    VerifyCodeComponent,
    ResetPasswordComponent,
    UnitSizerComponent,
    UnitSizesComponent,
    PhotosComponent,
    ConfirmationPageComponent,
    ConfirmationPageComponent,
    ScriptHackComponent,
    RentSubComponent,
    TabsComponent,
    AutoPayComponent,
    SignUpComponent
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
    MaterialModule
  ],
  providers: [
    DatePipe,
    AuthService,
    AuthGuard,
    VerifictionCodeGuard,
    Title,
    CanDeactivateGuard,
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
