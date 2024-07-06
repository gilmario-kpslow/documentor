import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuarde } from 'src/app/core/login.guard.fn';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '', component: PerfilComponent },
  // { path: 'create', component: DicaCreateComponent, canActivate: [loginGuarde] },
  // { path: 'create/:id', component: DicaPageComponent, canActivate: [loginGuarde] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
