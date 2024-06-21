import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { UsuarioModule } from '../usuario/usuario.module';
import { AuthGuard } from 'src/app/core/auth.guard';

const routes: Routes = [
  {
    path: '', component: TemplateComponent, children: [
      { path: '', redirectTo: 'projetos', pathMatch: 'full' },
      { path: 'projetos', loadChildren: () => import('../projeto/projeto.module').then(m => m.ProjetoModule) },
      { path: 'dicas', loadChildren: () => import('../dicas/dicas.module').then(m => m.DicasModule) },
      { path: 'usuarios', loadChildren: () => import('../usuario/usuario.module').then(m => UsuarioModule), canActivate: [AuthGuard] },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
