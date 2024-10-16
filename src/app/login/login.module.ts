import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [LoginComponent], // Declare the LoginComponent
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  // Import forms modules
    LoginRoutingModule    // Import routing module for login
  ]
})
export class LoginModule { }
