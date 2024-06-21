import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { Usuario } from './usuario';
import { UsuarioTabelaComponent } from './usuario-tabela/usuario-tabela.component';

const routes: Routes = [
  { path: '', component: UsuarioTabelaComponent },
  { path: 'novo', component: UsuarioCadastroComponent },
  { path: 'edicao/{id}', component: UsuarioCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
