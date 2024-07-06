import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioTabelaComponent } from './usuario-tabela/usuario-tabela.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    UsuarioCadastroComponent,
    UsuarioTabelaComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ]
})
export class UsuarioModule { }
