import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login/login.component';
import { LOGIN } from 'src/app/core/menu/menu-const';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: LOGIN, component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
