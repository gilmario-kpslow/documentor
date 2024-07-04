import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetoHomeComponent } from './projeto-home/projeto-home.component';
import { ProjetoRoutingModule } from './projeto-routing.module';
import { ProjetoTabelaComponent } from './projeto-tabela/projeto-tabela.component';
import { ProjetoCadastroComponent } from './projeto-cadastro/projeto-cadastro.component';
import { ProjetoCardComponent } from './projeto-card/projeto-card.component';
import { ComponentsModule } from '../components/components.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';



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
    ComponentsModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class ProjetoModule { }
