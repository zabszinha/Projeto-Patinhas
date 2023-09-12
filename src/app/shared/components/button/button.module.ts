import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleButtonComponent } from './button.component';

@NgModule({
  declarations: [SimpleButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [SimpleButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonModule { }
