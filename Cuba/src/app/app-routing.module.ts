import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';
import { PayRentComponent } from './pay-rent/pay-rent.component';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { ErrorComponent } from './error/error.component';
import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'reserve', component: ReserveComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'view-rates', component: ViewRatesComponent },
  { path: 'unit-sizer', component: UnitSizerComponent},
  { path: 'pay-rent', component: PayRentComponent },
  { path: 'storage-tips', component: StorageTipsComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
