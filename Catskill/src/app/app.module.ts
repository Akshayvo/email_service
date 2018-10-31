import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ReserveComponent } from './reserve/reserve.component';
import { FooterComponent } from './footer/footer.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';
import { PaymentComponent } from './payment/payment.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TablesComponent } from './tables/tables.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';

import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    ReserveComponent,
    FooterComponent,
    ViewRatesComponent,
    PaymentComponent,
    BreadcrumbComponent,
    TablesComponent,
    AboutComponent,
    ErrorComponent,
    StorageTipsComponent
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
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
