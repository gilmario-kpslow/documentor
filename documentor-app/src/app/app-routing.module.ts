import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DicasModule } from './dicas/dicas.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./dicas/dicas.module').then(m => DicasModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
