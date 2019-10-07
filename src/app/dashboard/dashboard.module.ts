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
  NbChatModule,
  NbListModule,
  NbUserModule,
  NbCardModule,
  NbSearchModule,
  NbInputModule,
  NbMenuModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { environment } from '../../environments/environment';

import { LayoutComponent } from './layout/layout.component';
import { FarmerComponent } from './farmer/farmer.component';
import { ChatComponent } from './chat/chat.component';
import { ChatShowcaseService } from './shared/services/chat-showcase.service';
import { ChatroomComponent } from './chatroom/chatroom.component';

@NgModule({
  declarations: [LayoutComponent, FarmerComponent, ChatComponent, ChatroomComponent],
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
    NbChatModule,
    NbListModule,
    NbUserModule,
    NbCardModule,
    NbSearchModule,
    NbInputModule,
    NbMenuModule.forRoot()
    
  ],
  providers: [ChatShowcaseService],
})
export class DashboardModule {}
