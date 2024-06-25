import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoaderComponent } from './loader/loader.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { TabelaComponent } from './tabela/tabela.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FloatActionBarComponent } from './float-action-bar/float-action-bar.component';
import { LayoutButtonComponent } from './layout-button/layout-button.component';
import { PainelComponent } from './painel/painel.component';
import { CadastroComponent } from './cadastro/cadastro.component';



@NgModule({
  declarations: [
    MensagensComponent,
    LoaderComponent,
    NaoEncontradoComponent,
    TabelaComponent,
    FloatActionBarComponent,
    LayoutButtonComponent,
    PainelComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,


  ],
  exports: [
    TabelaComponent,
    FloatActionBarComponent,
    LayoutButtonComponent,
    CadastroComponent
  ]
})
export class ComponentsModule { }
