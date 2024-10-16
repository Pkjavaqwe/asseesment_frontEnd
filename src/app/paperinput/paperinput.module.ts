import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import for reactive forms
import { PaperinputRoutingModule } from './paperinput-routing.module'; // Import the routing module
import { PaperinputComponent } from './paperinput.component'; // Import the component

@NgModule({
  declarations: [
    PaperinputComponent // Declare the component
  ],
  imports: [
    CommonModule, // Common module for common directives
    ReactiveFormsModule, // Import ReactiveFormsModule for forms
    PaperinputRoutingModule, // Import the routing module
    FormsModule
  ]
})
export class PaperinputModule { }
