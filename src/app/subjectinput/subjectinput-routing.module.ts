// subjectinput.module.ts

// subjectinput-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectinputComponent } from './subjectinput.component';

const routes: Routes = [
  {
    path: ':_id',
    component: SubjectinputComponent // Set the component to load when the route is accessed
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectinputRoutingModule {}
