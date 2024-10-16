import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectinputComponent } from './subjectinput.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule for form handling
import { SubjectinputRoutingModule } from './subjectinput-routing.module'; // Import routing module

@NgModule({
  declarations: [SubjectinputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Include ReactiveFormsModule to use Reactive Forms
    SubjectinputRoutingModule // Include routing module
  ]
})
export class SubjectinputModule {}
