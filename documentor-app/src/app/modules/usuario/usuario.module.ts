import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioTabelaComponent } from './usuario-tabela/usuario-tabela.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CriarSenhaComponent } from './criar-senha/criar-senha.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    UsuarioCadastroComponent,
    UsuarioTabelaComponent,
    CriarSenhaComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule

  ]
})
export class UsuarioModule { }
