import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OngRoutingModule } from './ong-routing.module';
import { RegisterONGComponent } from './register/register.component';

import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { ToolTipDirective } from 'src/app/shared/directives/tooltip.directive';
import { HomeONGComponent } from './home/home.component';




@NgModule({
  declarations: [
    RegisterONGComponent,
    ToolTipDirective,
    HomeONGComponent

  ],
  imports: [
    CommonModule,
    OngRoutingModule,
    CommonModule,
    AuthRoutingModule,
    InputModule,
    ButtonModule,
    FormsModule,
  ]
})
export class OngModule { }
