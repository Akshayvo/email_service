import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';
import { TablesComponent } from './tables/tables.component';
import { ErrorComponent } from './error/error.component';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { PayRentComponent } from './pay-rent/pay-rent.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReserveUnitComponent } from './reserve-unit/reserve-unit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ViewRatesComponent,
    TablesComponent,
    ErrorComponent,
    StorageTipsComponent,
    AccordionComponent,
    UnitSizerComponent,
    ErrorHandlerComponent,
    PayRentComponent,
    ContactUsComponent,
    ReserveUnitComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    Title,
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
          window.location.href = (route.data as any).externalUrl;
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
