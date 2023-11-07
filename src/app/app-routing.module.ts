import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { DefaultComponent } from './features/default/default.component';
import { AdoptionFormComponent } from './features/default/adoption-form/adoption-form.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: []
  },
  {
    path: "user",
    component: DefaultComponent,
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "ong",
    loadChildren: () => import("./features/ong/ong.module").then(m => m.OngModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
