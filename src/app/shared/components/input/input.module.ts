import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from './input.component';



@NgModule({
  declarations: [
    InputTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputTextComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputModule { }
