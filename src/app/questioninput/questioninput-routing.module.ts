import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestioninputComponent } from './questioninput.component';

const routes: Routes = [
  {
    path: ':_id',
    component: QuestioninputComponent,
  },
  {
    path: 'updatequestion/:_id',
    component: QuestioninputComponent,
  },
 /* {
    path: 'questionsadd/:_id',
    component: QuestioninputComponent,
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestioninputRoutingModule {}
