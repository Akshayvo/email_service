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
import { TablesComponent } from './tables/tables.component';
import { ErrorComponent } from './error/error.component';
import { AccordionComponent } from './accordion/accordion.component';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { ContactButtonComponent } from './contact-button/contact-button.component';
import { PayRentComponent } from './pay-rent/pay-rent.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';
import { ReserveUnitComponent } from './reserve-unit/reserve-unit.component';
import { ErrorHandlerService } from './services/error-handler.service';
import { RatesTableComponent } from './rates-table/rates-table.component';
import { PhotosComponent } from './photos/photos.component';
import { LoginComponent } from './login/login.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PayRentFormComponent } from './pay-rent-form/pay-rent-form.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { RequestInterceptorService } from './services/request-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth-guard/auth.gurad';
import { VerifictionCodeGuard } from './auth-guard/verificationCode.guard';
import { CanDeactivateGuard } from './preventRouteChange.guard';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { MaterialModule } from './modules/material/material.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

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
    ReserveUnitComponent,
    RatesTableComponent,
    PhotosComponent,
    LoginComponent,
    LoginModalComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    PayRentComponent,
    PayRentFormComponent,
    VerifyCodeComponent,
    ResetPasswordComponent
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
