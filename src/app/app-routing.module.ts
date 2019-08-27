import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/guards/auth.guard';
import { AuthReverseGuard } from './shared/guards/auth-reverse.guard';

import { LoginComponent } from './login/login.component';
import { SelectUserLevelComponent } from './select-user-level/select-user-level.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthReverseGuard] },
  { path: 'user-type', component: SelectUserLevelComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
