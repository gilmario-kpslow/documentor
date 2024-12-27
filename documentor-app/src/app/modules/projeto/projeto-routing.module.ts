import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetoHomeComponent } from './projeto-home/projeto-home.component';
import { ProjetoTabelaComponent } from './projeto-tabela/projeto-tabela.component';
import { ProjetoCadastroComponent } from './projeto-cadastro/projeto-cadastro.component';
import { ProjetosExplorarComponent } from './projetos-explorar/projetos-explorar.component';
import { CONSULTA, EDICAO, EXPLORAR, NOVO } from 'src/app/core/menu/menu-const';

const routes: Routes = [
  { path: '', component: ProjetoHomeComponent },
  { path: CONSULTA, component: ProjetoTabelaComponent },
  { path: NOVO, component: ProjetoCadastroComponent },
  { path: `${EXPLORAR}/:id`, component: ProjetosExplorarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetoRoutingModule { }
