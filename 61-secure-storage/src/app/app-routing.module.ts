import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { environment } from "../environments/environment";
import { AppResolver } from "./api-bundle/resolver/app.resolver";
import { apiRoutes, iFrameRoutes } from "./data/route";

export const routes: Routes = environment.type ? iFrameRoutes : apiRoutes;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload",
    }),
  ],
  exports: [RouterModule],
  providers: [AppResolver],
})
export class AppRoutingModule {}
