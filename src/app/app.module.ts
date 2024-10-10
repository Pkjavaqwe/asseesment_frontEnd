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

@NgModule({
  declarations: [
    AppComponent,
    UserinputComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    QuestionpapersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
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


