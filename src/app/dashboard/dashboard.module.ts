import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbThemeModule,
  NbLayoutModule,
  NbTooltipModule,
  NbIconModule,
  NbSidebarModule,
  NbCardModule,
  NbSpinnerModule,
  NbButtonModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { environment } from '../../environments/environment';

import { LayoutComponent } from './layout/layout.component';
import { SupplyAdComponent } from './supply-ad/supply-ad.component';
import { CreateSupplyAdComponent } from './supply-ad/create-supply-ad/create-supply-ad.component';

@NgModule({
  declarations: [LayoutComponent, SupplyAdComponent, CreateSupplyAdComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbTooltipModule,
    NbCardModule,
    NbSpinnerModule,
    NbButtonModule
  ]
})
export class DashboardModule {}
