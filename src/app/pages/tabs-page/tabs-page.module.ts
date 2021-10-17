import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { MapModule } from '../map/map.module';
import { ScheduleModule } from '../schedule/schedule.module';
import { SessionDetailModule } from '../session-detail/session-detail.module';
import { SpeakerDetailModule } from '../speaker-detail/speaker-detail.module';
import { SpeakerListModule } from '../speaker-list/speaker-list.module';
import { HomeModule } from '../home/home.module';
import { AccountModule } from '../account/account.module';
import { HomeMairiePage } from '../home-mairie/home-mairie.page';
import { HomeMairiePageModule } from '../home-mairie/home-mairie.module';
import { HomeAssosPageModule } from '../home-assos/home-assos.module';
import { SignUpModule } from '../signup/signup.module';
import { BasketCreationPageModule } from '../basket-creation/basket-creation.module';
import { BasketScanModule } from '../basket-scan/basket-scan.module';



@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    MapModule,
    ScheduleModule,
    SessionDetailModule,
    SpeakerDetailModule,
    SpeakerListModule,
    TabsPageRoutingModule,
    HomeModule,
    AccountModule,
    HomeMairiePageModule,
    HomeAssosPageModule,
    SignUpModule,
    BasketCreationPageModule,
    BasketScanModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
