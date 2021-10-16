import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AllergiesPageRoutingModule } from './allergies-routing.module';
import { AllergiesPage } from './allergies';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AllergiesPageRoutingModule
  ],
  declarations: [AllergiesPage],
  entryComponents: [AllergiesPage],
})
export class AllergiesModule {}
