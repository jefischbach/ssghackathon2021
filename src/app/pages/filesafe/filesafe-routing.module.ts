import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesafeComponent } from './filesafe.component';

const routes: Routes = [
  {
    path: '',
    component: FilesafeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesafeRoutingModule { }
