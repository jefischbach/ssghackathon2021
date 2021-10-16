import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketQRComponent } from './basket-qr.component';

const routes: Routes = [
  {
    path: '',
    component: BasketQRComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasketQRRoutingModule { }
