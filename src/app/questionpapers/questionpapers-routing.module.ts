// questionpaper-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionpapersComponent } from './questionpapers.component'; // Import your QuestionPaper component

const routes: Routes = [
  {
    path: ':_id',
    component: QuestionpapersComponent // Set your component here
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionPaperRoutingModule {}
