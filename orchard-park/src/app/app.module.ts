import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ViewRatesComponent } from './api-bundle/view-rates/view-rates.component';
import { ViewRatesPageComponent } from './api-bundle/view-rates-page/view-rates-page.component';
import { ReserveUnitFormComponent } from './api-bundle/reserve-unit-form/reserve-unit-form.component';
import { TablesComponent } from './tables/tables.component';
import { ErrorComponent } from './error/error.component';
import { AccordionComponent } from './accordion/accordion.component';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { ContactButtonComponent } from './contact-button/contact-button.component';
import { PayRentComponent } from './api-bundle/pay-rent/pay-rent.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { ReserveComponent } from './api-bundle/reserve/reserve.component';
import { ErrorHandlerService } from './services/error-handler.service';
import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ConfirmationDataComponent } from './api-bundle/confirmation-data/confirmation-data.component';
import { PayRentFormComponent } from './api-bundle/pay-rent-form/pay-rent-form.component';
import { ThankYouComponent } from './api-bundle/thank-you/thank-you.component';
import { RentSubComponent } from './api-bundle/rent-sub/rent-sub.component';
import { LoginComponent } from './api-bundle/login/login.component';
import { ForgotPasswordComponent } from './api-bundle/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './api-bundle/change-password/change-password.component';
import { VerifictionCodeGuard } from './auth-guard/verificationCode.guard';
import { VerifyCodeComponent } from './api-bundle/verify-code/verify-code.component';
import { ResetPasswordComponent } from './api-bundle/reset-password/reset-password.component';
import { SignUpComponent } from './api-bundle/sign-up/sign-up.component';
import { AutoPayComponent } from './api-bundle/auto-pay/auto-pay.component';
import { TabsComponent } from './tabs/tabs.component';
import { MaterialModule } from './modules/material/material.module';
import { LoginModalComponent } from './api-bundle/login-modal/login-modal.component';
import { RequestInterceptorService } from './api-bundle/services/request-interceptor.service';


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
    ContactButtonComponent,
    PayRentComponent,
    UnitSizerComponent,
    ReserveComponent,
    PrivacyPolicyComponent,
    ViewRatesPageComponent,
    ReserveUnitFormComponent,
    ConfirmationDataComponent,
    PayRentFormComponent,
    ThankYouComponent,
    RentSubComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    VerifyCodeComponent,
    ResetPasswordComponent,
    SignUpComponent,
    AutoPayComponent,
    TabsComponent,
    LoginModalComponent,

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
    MaterialModule,
  ],
  providers: [
    Title,
    VerifictionCodeGuard,
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
