import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaperinputComponent } from './paperinput.component';

const routes: Routes = [
  {
    path: ':_id', // Adjust this path as needed for your routing structure
    component: PaperinputComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaperinputRoutingModule { }
