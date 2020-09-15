import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule, DatePipe } from '@angular/common';
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
import { ViewRatesComponent } from './view-rates/view-rates.component';
import { ViewRatesComponent as ViewRates} from './api-bundle/view-rates/view-rates.component';
import { TablesComponent } from './tables/tables.component';
import { ErrorComponent } from './error/error.component';
import { AccordionComponent } from './accordion/accordion.component';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { ContactButtonComponent } from './contact-button/contact-button.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { ErrorHandlerService } from './services/error-handler.service';
import { PayRentComponent } from './api-bundle/pay-rent/pay-rent.component';
import { PayRentComponent as pay } from './pay-rent/pay-rent.component';
import { PhotosComponent } from './photos/photos.component';
import { ReserveUnitComponent } from './reserve-unit/reserve-unit.component';
import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';
import { RentSubComponent } from './api-bundle/rent-sub/rent-sub.component';
import { LoginComponent } from './api-bundle/login/login.component';
import { ForgotPasswordComponent } from './api-bundle/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './api-bundle/change-password/change-password.component';
import { PayRentFormComponent } from './api-bundle/pay-rent-form/pay-rent-form.component';
import { VerifyCodeComponent } from './api-bundle/verify-code/verify-code.component';
import { ResetPasswordComponent } from './api-bundle/reset-password/reset-password.component';
import { SignUpComponent } from './api-bundle/sign-up/sign-up.component';
import { AutoPayComponent } from './api-bundle/auto-pay/auto-pay.component';
import { TabsComponent } from './tabs/tabs.component';
import { LoginModalComponent } from './api-bundle/login-modal/login-modal.component';
import { RequestInterceptorService } from './api-bundle/services/request-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AuthService } from './api-bundle/services/auth.service';
import { AuthGuard } from './auth-guard/auth.gurad';
import { VerifictionCodeGuard } from './auth-guard/verificationCode.guard';
import { CanDeactivateGuard } from './preventRouteChange.guard';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { ConfirmationPageComponent } from './api-bundle/confirmation-page/confirmation-page.component';
import { ReserveComponent } from './api-bundle/reserve/reserve.component';
import { ReserveUnitFormComponent } from './api-bundle/reserve-unit-form/reserve-unit-form.component';
import { ScriptHackComponent } from './script-hack/script-hack.component';
import { PaymentComponent } from './api-bundle/payment/payment.component';
import { AlternateDetailsReservationFormComponent } from './api-bundle/alternate-details-reservation-form/alternate-details-reservation-form.component';
import { ViewRatesPageComponent } from './api-bundle/view-rates-page/view-rates-page.component';
import { ConfirmationDataComponent } from './api-bundle/confirmation-data/confirmation-data.component';

@NgModule({
  declarations: [
    AppComponent,
    pay,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    ViewRates,
    ViewRatesComponent,
    TablesComponent,
    ErrorComponent,
    ErrorHandlerComponent,
    StorageTipsComponent,
    AccordionComponent,
    ContactButtonComponent,
    PayRentComponent,
    PhotosComponent,
    ReserveUnitComponent,
    UnitSizerComponent,
    RentSubComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ReserveComponent,
    ReserveUnitFormComponent,
    ChangePasswordComponent,
    ScriptHackComponent,
    PaymentComponent,
    AlternateDetailsReservationFormComponent,
    ViewRatesPageComponent,
    PayRentFormComponent,
    VerifyCodeComponent,
    ResetPasswordComponent,
    SignUpComponent,
    AutoPayComponent,
    TabsComponent,
    LoginModalComponent,
    ConfirmationPageComponent,
    ConfirmationDataComponent
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
