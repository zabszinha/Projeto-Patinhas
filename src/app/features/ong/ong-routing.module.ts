import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterONGComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/register",
    pathMatch: "full"
  },
  // {
  //   path: "list",
  //   component: ,
  // },
  {
    path: "register",
    component: RegisterONGComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OngRoutingModule { }
