import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';
import { PaymentComponent } from './payment/payment.component';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'view-rates', component: ViewRatesComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
