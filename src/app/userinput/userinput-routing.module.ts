import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserinputComponent } from './userinput.component';

const routes: Routes = [
  {
    path: '',
    component: UserinputComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserinputRoutingModule { }
