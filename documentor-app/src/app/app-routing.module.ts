import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginModule } from './modules/login/login.module';
import { TemplateModule } from './modules/template/template.module';
import { NaoEncontradoComponent } from './modules/components/nao-encontrado/nao-encontrado.component';
import { AUTH } from './core/menu/menu-const';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/template/template.module').then(m => TemplateModule) },
  { path: AUTH, loadChildren: () => import('./modules/login/login.module').then(m => LoginModule) },
  { path: '**', component: NaoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
