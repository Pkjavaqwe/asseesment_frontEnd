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
  // component:LoginComponent,
  loadChildren:()=>import("./login/login.module").then(m=>m.LoginModule)

 },
  {
    path:'register',
    // component:UserinputComponent,
    loadChildren:()=>import("./userinput/userinput.module").then(m=>m.UserinputModule)

  },
  {
    path:'login',
    // component:DashboardComponent,
    loadChildren:()=>import("./dashboard/dashboard.module").then(m=>m.DashboardModule)
  },
  {
    path:'questionpapers',
    // component:QuestionpapersComponent,
    loadChildren:()=>import("./questionpapers/questionpapers.module").then(m=>m.QuestionPaperModule)
  },
  {
    path:'questionpaperss',
    component:QuestionpapersComponent,
  },
  {
    path:'questions',
    // component:QuestionsComponent,
    loadChildren:()=>import("./questions/questions.module").then(m=>m.QuestionsModule)

  
  },
  {
    path:'questionsadd',
    // component:QuestioninputComponent,
    loadChildren:()=>import("./questioninput/questioninput.module").then(m=>m.QuestioninputModule)


    
  },
  {
    path:'questionpapersadd',
    // component:PaperinputComponent,
    loadChildren:()=>import("./paperinput/paperinput.module").then(m=>m.PaperinputModule)

    
  },
  {
    path:'subjectsadd',
    // component:SubjectinputComponent,
    loadChildren:()=>import("./subjectinput/subjectinput.module").then(m=>m.SubjectinputModule)
  },
  {
    path:'questions',
    // component:QuestioninputComponent,
    loadChildren:()=>import("./questioninput/questioninput.module").then(m=>m.QuestioninputModule)
    // loadComponent:()=>import("./questioninput/questioninput.component").then(m=>m.QuestioninputComponent)
  },
//  { path: 'lazyloading', loadChildren: () => import('./lazyloading/lazyloading.module').then(m => m.LazyloadingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
