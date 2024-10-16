// questionpaper.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionPaperRoutingModule } from './questionpapers-routing.module'; // Import the routing module
import { QuestionpapersComponent } from './questionpapers.component'; // Import your component

@NgModule({
  declarations: [
    QuestionpapersComponent // Declare your QuestionPaper component
  ],
  imports: [
    CommonModule,
    QuestionPaperRoutingModule // Import the routing module
  ]
})
export class QuestionPaperModule {}
