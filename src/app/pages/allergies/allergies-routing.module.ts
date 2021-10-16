import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllergiesPage } from './allergies';

const routes: Routes = [
  {
    path: '',
    component: AllergiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllergiesPageRoutingModule { }
