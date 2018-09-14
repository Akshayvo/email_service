import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ContactComponent } from './contact/contact.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';
import { PaymentComponent } from './payment/payment.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { FrmlogviewerComponent } from 'src/app/frmlogviewer/frmlogviewer.component';
import { JokeListComponentComponent } from 'src/app/joke-list-component/joke-list-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'reserve', component: ReserveComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'view-rates', component: ViewRatesComponent },
  // { path: 'payment', component: PaymentComponent },
  // { path: 'about', component: AboutComponent },
  // { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
