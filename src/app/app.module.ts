import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { LoginComponent } from './login/login.component';
import { FarmerHomeComponent } from './farmer-home/farmer-home.component';
import { RegistrationComponent } from './registration/registration.component';

import { AuthService } from './shared/services/auth.service';
import { UserDetailsService } from './shared/services/user-details.service';

import { AuthGuard } from './shared/guards/auth.guard';
import { AuthReverseGuard } from './shared/guards/auth-reverse.guard';
import { FarmerOnlyGuard } from './shared/guards/farmer-only.guard';
import { BuyerOnlyGuard } from './shared/guards/buyer-only.guard';
import { AdministratorOnlyGuard } from './shared/guards/administrator-only.guard';
import { SuperAdminOnlyGuard } from './shared/guards/super-admin-only.guard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbStepperModule, NbButtonModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FarmerHomeComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbStepperModule,
    NbButtonModule,
    NbCardModule
  ],
  providers: [
    AuthGuard,
    AuthReverseGuard,
    FarmerOnlyGuard,
    BuyerOnlyGuard,
    AdministratorOnlyGuard,
    SuperAdminOnlyGuard,
    AuthService,
    UserDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
