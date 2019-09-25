import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./shared/guards/auth.guard";
import { AuthReverseGuard } from "./shared/guards/auth-reverse.guard";
import { RegistrationGuard } from "./shared/guards/registration.guard";

import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { DashboardModule } from "./dashboard/dashboard.module";

const routes: Routes = [
  { path: "", loadChildren: () => DashboardModule, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent, canActivate: [AuthReverseGuard] },
  {
    path: "registration",
    component: RegistrationComponent,
    canActivate: [RegistrationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
