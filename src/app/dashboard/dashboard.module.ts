import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
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
import { FarmerComponent } from './farmer/farmer.component';
import { CreateAdComponent } from './farmer/create-ad/create-ad.component';

@NgModule({
  declarations: [LayoutComponent, FarmerComponent, CreateAdComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
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
