import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { OwlDateTimeModule, OwlNativeDateTimeModule, } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SinglepageComponent } from './singlepage/singlepage.component';


@NgModule({
  declarations: [
    AppComponent,
    SinglepageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
