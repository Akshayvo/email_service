import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { LocationComponent } from './location/location.component';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { ReserveUnitComponent } from './reserve-unit/reserve-unit.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { PayRentComponent } from './pay-rent/pay-rent.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthGuard } from './auth.gurad';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifictionCodeGuard } from './verificationCode.guard';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PayRentFormComponent } from './pay-rent-form/pay-rent-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'location/730-kenton-station',
    component: LocationComponent,
    children: [
      // { path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: '', redirectTo: 'reservations', pathMatch: 'prefix'},
      { path: 'reservations', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
    ]
  },
  { path: 'location/751-kenton-station',
    component: LocationComponent,
    children: [
      // { path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: '', redirectTo: 'reservations', pathMatch: 'prefix'},
      { path: 'reservations', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
    ]
  },
  { path: 'location/augusta',
    component: LocationComponent,
    children: [
      // {path: '', redirectTo: 'storageUnits', pathMatch: 'full' },
      { path: '', redirectTo: 'reservations', pathMatch: 'prefix'},
      { path: 'reservations', component: ReserveUnitComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'about', component: AboutUsComponent },
    ]
  },
  { path: 'location/113-mcDonald-parkway',
  component: LocationComponent,
  children: [
    { path: '', redirectTo: 'reservations', pathMatch: 'prefix'},
    { path: 'reservations', component: ReserveUnitComponent },
    { path: 'about', component: AboutUsComponent },
  ]
},
  { path: 'review/730-kenton-station', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/751-kenton-station', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'http://search.google.com/local/writereview?placeid=ChIJDem__t1aQYgRkUdtF_EG6B8'
    }
  },
  { path: 'review/augusta', component: HomeComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: ''
    }
  },
  { path: 'review/113-mcDonald-parkway', component: HomeComponent,
  resolve: {
      url: 'externalUrlRedirectResolver'
  },
  data: {
      externalUrl: ''
  }
},
  { path: 'error', component: ErrorHandlerComponent },
  { path: 'pay-rent', component: PayRentComponent,
  children: [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'forgotPassword', component: ForgotPasswordComponent },
    { path: 'payment', component: PayRentFormComponent, canActivate: [AuthGuard]},
    {path: 'changePassword', component: ChangePasswordComponent, canActivate: [AuthGuard] },
    { path: 'verifyCode', component: VerifyCodeComponent },
    { path: 'reset', component: ResetPasswordComponent, canActivate: [VerifictionCodeGuard]}
  ]},
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
