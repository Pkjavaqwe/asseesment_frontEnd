import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserinputComponent } from './userinput/userinput.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionpapersComponent } from './questionpapers/questionpapers.component';

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
    component:DashboardComponent
  },
  {
    path:'questionpapers/:_id',
    component:QuestionpapersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
