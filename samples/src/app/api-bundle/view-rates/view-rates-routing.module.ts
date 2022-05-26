import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThankYouGuard } from '../../../app/thank-you.guard';
import { ConfirmationDataComponent } from '../confirmation-data/confirmation-data.component';
import { PayRentFormComponent } from '../pay-rent-form/pay-rent-form.component';
import { ReserveUnitFormComponent } from '../reserve-unit-form/reserve-unit-form.component';
import { ThankYouComponent } from '../thank-you/thank-you.component';
import { ViewRatesPageComponent } from '../view-rates-page/view-rates-page.component';
import { ViewRatesComponent } from './view-rates.component';

const routes: Routes = [

{
      path: '',
      component: ViewRatesComponent,
      children: [
        { path: '', component: ViewRatesPageComponent }, 
        { path: 'reserve', component: ReserveUnitFormComponent },
        { path: 'move-in', component: ReserveUnitFormComponent },
        { path: 'confirmation', component: ConfirmationDataComponent },
        { path: 'payReservationCharges', component: PayRentFormComponent },
        { path: 'payMoveInCharges', component: PayRentFormComponent },
        { path: 'thank-you', component: ThankYouComponent, canActivate: [ThankYouGuard]  } 
      ]
     },




  
    
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRatesRoutingModule { }
