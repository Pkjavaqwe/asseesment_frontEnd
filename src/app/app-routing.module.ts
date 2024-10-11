import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserinputComponent } from './userinput/userinput.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionpapersComponent } from './questionpapers/questionpapers.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestioninputComponent } from './questioninput/questioninput.component';
import { PaperinputComponent } from './paperinput/paperinput.component';
import { SubjectinputComponent } from './subjectinput/subjectinput.component';
import { authGuards } from './guards/authguards';

const routes: Routes = [
 {
  path:'',
  component:LoginComponent
 },
  {
    path:'register',
    component:UserinputComponent
  },
  {
    path:'login/auth/:_id',
    component:DashboardComponent,
  
  },
  {
    path:'questionpapers/:_id',
    component:QuestionpapersComponent,
    
  },
  {
    path:'questionpaperss',
    component:QuestionpapersComponent,
   
  },
  {
    path:'questions/:_id',
    component:QuestionsComponent,
  
  },
  {
    path:'questionsadd/:_id',
    component:QuestioninputComponent,
    
  },
  {
    path:'questionpapersadd/:_id',
    component:PaperinputComponent,
    
  },
  {
    path:'subjectsadd/:_id',
    component:SubjectinputComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
