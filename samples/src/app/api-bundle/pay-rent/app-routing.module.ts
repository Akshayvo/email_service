import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayRentComponent } from './pay-rent.component';

export const routes: Routes = [
  {
    path: "",
    component: PayRentComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PayRentRoutingModule { }
