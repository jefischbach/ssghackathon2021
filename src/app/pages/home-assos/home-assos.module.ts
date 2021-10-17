import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAssosPageRoutingModule } from './home-assos-routing.module';

import { HomeAssosPage } from './home-assos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAssosPageRoutingModule
  ],
  declarations: [HomeAssosPage]
})
export class HomeAssosPageModule {}
