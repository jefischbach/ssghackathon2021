import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMairiePage } from './home-mairie.page';

const routes: Routes = [
  {
    path: '',
    component: HomeMairiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeMairiePageRoutingModule {}
