import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DicaCreateComponent } from './dica-create/dica-create.component';
import { DicaPageComponent } from './dica-page/dica-page.component';
import { DicasListComponent } from './dicas-list/dicas-list.component';

const routes: Routes = [
  { path: '', component: DicasListComponent },
  { path: 'create', component: DicaCreateComponent },
  { path: ':id', component: DicaPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DicasRoutingModule { }
