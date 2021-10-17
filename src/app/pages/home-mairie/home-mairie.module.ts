import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeMairiePageRoutingModule } from './home-mairie-routing.module';

import { HomeMairiePage } from './home-mairie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeMairiePageRoutingModule
  ],
  declarations: [HomeMairiePage]
})
export class HomeMairiePageModule {}
