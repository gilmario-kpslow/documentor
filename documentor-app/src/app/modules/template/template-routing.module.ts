import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {path: '', component: TemplateComponent, children: [
    {path: '', loadChildren: () => import('../dicas/dicas.module').then(m => m.DicasModule)}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
