import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorageTipsComponent } from './storage-tips.component';

export const routes: Routes = [
  {
    path: "",
    component: StorageTipsComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorageTipsRoutingModule { }
