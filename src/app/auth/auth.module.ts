import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { InputModule } from '../shared/components/input/input.module';
import { ButtonModule } from '../shared/components/button/button.module';
import { RegisterComponent } from './register/register.component';
import { RecoverAccessComponent } from './recover-access/recover-access.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverAccessComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    InputModule,
    ButtonModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
