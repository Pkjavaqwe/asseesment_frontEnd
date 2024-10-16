import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserinputComponent } from './userinput.component';
import { UserinputRoutingModule } from './userinput-routing.module';

@NgModule({
  declarations: [
    UserinputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserinputRoutingModule
  ]
})
export class UserinputModule { }
