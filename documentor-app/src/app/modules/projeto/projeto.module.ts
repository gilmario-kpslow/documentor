import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetoHomeComponent } from './projeto-home/projeto-home.component';
import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoTabelaComponent } from './projeto-tabela/projeto-tabela.component';
import { ProjetoCadastroComponent } from './projeto-cadastro/projeto-cadastro.component';
import { ProjetoCardComponent } from './projeto-card/projeto-card.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ProjetoHomeComponent,
    ProjetoTabelaComponent,
    ProjetoCadastroComponent,
    ProjetoCardComponent
  ],
  imports: [
    CommonModule,
    ProjetoRoutingModule,
    ComponentsModule
  ]
})
export class ProjetoModule { }
