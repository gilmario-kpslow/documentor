import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginModule } from './modules/login/login.module';
import { TemplateModule } from './modules/template/template.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/template/template.module').then(m => TemplateModule) },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
