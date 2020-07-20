import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeAnimalComponent } from './employee-animal.component';

@NgModule({
  declarations: [EmployeeAnimalComponent],
  imports: [
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EmployeeAnimalModule { }
