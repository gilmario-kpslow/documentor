import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateModule } from './modules/template/template.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/template/template.module').then(m => TemplateModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
