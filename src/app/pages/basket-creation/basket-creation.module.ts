import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasketCreationPageRoutingModule } from './basket-creation-routing.module';

import { BasketCreationPage } from './basket-creation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasketCreationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BasketCreationPage]
})
export class BasketCreationPageModule {}
