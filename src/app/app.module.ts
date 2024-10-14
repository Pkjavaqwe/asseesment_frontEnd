import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserinputComponent } from './userinput/userinput.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { oneTimeAutomaticvalidaterequestInterceptor } from './interceptor/one-time-automaticvalidaterequest.interceptor';
import { QuestionpapersComponent } from './questionpapers/questionpapers.component';
import { QuestionsComponent } from './questions/questions.component';
import { PaperinputComponent } from './paperinput/paperinput.component';
import { QuestioninputComponent } from './questioninput/questioninput.component';
import { SubjectinputComponent } from './subjectinput/subjectinput.component';
import {MatButtonModule} 
from 
'@angular/material/button';
import {MatIconModule} 
from 
'@angular/material/icon';
import {MatListModule} 
from 
'@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    UserinputComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    QuestionpapersComponent,
    QuestionsComponent,
    PaperinputComponent,
    QuestioninputComponent,
    SubjectinputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
    
  ],
  providers: [provideHttpClient(),/* {
    provide: HTTP_INTERCEPTORS,
    useValue: oneTimeAutomaticvalidaterequestInterceptor,
    multi: true
  },*/ provideHttpClient(
    withInterceptors([oneTimeAutomaticvalidaterequestInterceptor]),
  )],
  bootstrap: [AppComponent]
})
export class AppModule { }


