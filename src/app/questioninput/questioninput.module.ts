import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestioninputRoutingModule } from './questioninput-routing.module';
import { QuestioninputComponent } from './questioninput.component';

@NgModule({
  declarations: [QuestioninputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuestioninputRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class QuestioninputModule {}
