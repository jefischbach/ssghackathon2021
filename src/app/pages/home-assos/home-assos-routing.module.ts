import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAssosPage } from './home-assos.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAssosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAssosPageRoutingModule {}
