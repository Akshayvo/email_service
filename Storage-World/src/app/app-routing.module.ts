import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { apiRoutes, iFrameRoutes } from './data/route';

export const routes: Routes = environment.type ?  iFrameRoutes : apiRoutes;

// const routes: Routes = [
//   // Fallback when no prior route is matched
//   { path: '', component: HomeComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: 'view-rates', component: ViewRatesComponent },
//   { path: 'unit-sizer', component: UnitSizerComponent },
//   { path: 'payment', component: PaymentComponent },
//   { path: 'storage-tips', component: StorageTipsComponent },
//   {path: 'review',
//   component: HomeComponent,
//   resolve: {
//       url: 'externalUrlRedirectResolver'
//   },
//   data: {
//       externalUrl: 'https://search.google.com/local/writereview?placeid=ChIJuQ-2v-sYs1IRu1Dm8I6AjOU'
//   }},
//   { path: 'error', component: ErrorHandlerComponent },
//   { path: '**', component: ErrorComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
