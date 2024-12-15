import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuarde } from 'src/app/core/login.guard.fn';

import { DicaCreateComponent } from './dica-create/dica-create.component';
import { DicaPageComponent } from './dica-page/dica-page.component';
import { DicasListComponent } from './dicas-list/dicas-list.component';
import { EDICAO, NOVO } from 'src/app/core/menu/menu-const';

const routes: Routes = [
  { path: '', component: DicasListComponent },
  { path: NOVO, component: DicaCreateComponent, canActivate: [loginGuarde] },
  { path: `${EDICAO}/:id`, component: DicaPageComponent, canActivate: [loginGuarde] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DicasRoutingModule { }
