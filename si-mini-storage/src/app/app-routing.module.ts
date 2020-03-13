// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { ContactComponent } from './contact/contact.component';
// import { ViewRatesComponent } from './view-rates/view-rates.component';
// import { StorageTipsComponent } from './storage-tips/storage-tips.component';
// import { ErrorComponent } from './error/error.component';
// import { PayRentComponent } from './pay-rent/pay-rent.component';
// import { ErrorHandlerComponent } from './error-handler/error-handler.component';
// import { ReserveUnitComponent } from './reserve-unit/reserve-unit.component';

// const routes: Routes = [
//   // Fallback when no prior route is matched
//   { path: '', component: HomeComponent },
//   { path: 'storage-tips', component: StorageTipsComponent },
//   { path: 'contact-us', component: ContactComponent },
//   { path: 'view-rates', component: ViewRatesComponent },
//   { path: 'pay-rent', component: PayRentComponent },
//   { path: 'reserve-unit', component: ReserveUnitComponent },
//   { path: 'review', component: HomeComponent,
//     resolve: {
//         url: 'externalUrlRedirectResolver'
//     },
//     data: {
//         externalUrl: 'http://search.google.com/local/writereview?placeid=ChIJJ2lrI5nTMIgRa-wwvwUtPMw'
//     }
//   },
//   { path: 'error', component: ErrorHandlerComponent },
//   { path: '**', component: ErrorComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
//   providers: []
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { apiRoutes, iFrameRoutes } from './data/route';

export const routes: Routes = environment.type ?  iFrameRoutes : apiRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
