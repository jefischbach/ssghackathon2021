import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketScanComponent } from './basket-scan.component';

const routes: Routes = [
  {
    path: '',
    component: BasketScanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasketScanRoutingModule { }
