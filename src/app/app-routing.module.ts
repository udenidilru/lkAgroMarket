import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/guards/auth.guard';
import { AuthReverseGuard } from './shared/guards/auth-reverse.guard';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FarmerHomeComponent } from './farmer-home/farmer-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthReverseGuard] },
  { path: 'registration', component: RegistrationComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: FarmerHomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
