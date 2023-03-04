import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DicasListComponent } from './dicas-list/dicas-list.component';

const routes: Routes = [
  { path: '', component: DicasListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DicasRoutingModule { }
