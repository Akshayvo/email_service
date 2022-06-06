import { HomeComponent } from '../home/home.component';
import { ErrorHandlerComponent } from '../error-handler/error-handler.component';
import { ErrorComponent } from '../error/error.component';
import { environment } from '../../environments/environment';



const reviewURL = ``

 export const apiRoutes = [
    // Fallback when no prior route is matched
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: `${environment.locationName}/storage-tips`, loadChildren: './storage-tips/storage-tips.module#StorageTipsModule' },
    { path: `${environment.locationName}/reserve-unit`, loadChildren: './api-bundle/reserve/reserve.module#ReserveModule' },
    { path: 'contact-us', loadChildren: './contact/contact.module#ContactModule' },
    { path: 'unit-sizer', loadChildren: './unit-sizer/unit-sizer.module#UnitSizerModule'},
    { path: 'privacy-policy', loadChildren: './privacy-policy/privacy-policy.module#PrivacyPolicyModule' },
    { path:`${environment.locationName}/view-rates`,loadChildren:'./api-bundle/view-rates/view-rates.module#ViewRatesModule'},
    { path:`${environment.locationName}/rent-now`,loadChildren:'./api-bundle/view-rates/view-rates.module#ViewRatesModule'},
    {path:'pay-rent',loadChildren:'./api-bundle/pay-rent/pay-rent.module#PayRentModule'},  
    { path: 'forgot-password', loadChildren:'./api-bundle/forgot-password/forgot-password.module#ForgotPasswordModule'}, 
    { path: 'review', component: HomeComponent,
      resolve: {
          url: 'externalUrlRedirectResolver'
      },
      data: {
          externalUrl: `${reviewURL}`
      }
    },
    { path: 'error', component: ErrorHandlerComponent },
    { path: '**', component: ErrorComponent }
  ];

