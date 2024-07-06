import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetoHomeComponent } from './projeto-home/projeto-home.component';
import { ProjetoTabelaComponent } from './projeto-tabela/projeto-tabela.component';
import { ProjetoCadastroComponent } from './projeto-cadastro/projeto-cadastro.component';

const routes: Routes = [
  { path: '', component: ProjetoHomeComponent },
  { path: 'consulta', component: ProjetoTabelaComponent },
  { path: 'novo', component: ProjetoCadastroComponent },
  { path: 'edicao/:id', component: ProjetoCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetoRoutingModule { }
