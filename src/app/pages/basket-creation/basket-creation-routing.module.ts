import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketCreationPage } from './basket-creation.page';

const routes: Routes = [
  {
    path: '',
    component: BasketCreationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketCreationPageRoutingModule {}
