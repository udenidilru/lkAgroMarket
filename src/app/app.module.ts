import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { LoginComponent } from './login/login.component';

import { AuthService } from './shared/services/auth.service';

import { AuthGuard } from './shared/guards/auth.guard';
import { AuthReverseGuard } from './shared/guards/auth-reverse.guard';
import { FarmerHomeComponent } from './farmer-home/farmer-home.component';
import { SelectUserLevelComponent } from './select-user-level/select-user-level.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FarmerHomeComponent,
    SelectUserLevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    AuthReverseGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
