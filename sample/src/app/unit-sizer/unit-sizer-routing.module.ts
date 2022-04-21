import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitSizerComponent } from './unit-sizer.component';

export const routes: Routes = [
  {
    path: "",
    component: UnitSizerComponent,
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class unitSizerRoutingModule { }
