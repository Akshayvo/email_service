import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { apiRoutes } from './data/route';
export const routes: Routes = apiRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
