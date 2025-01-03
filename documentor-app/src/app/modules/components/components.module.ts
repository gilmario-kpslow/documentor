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
import { LayoutInputComponent } from './layout-input/layout-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ErroPipe } from './pipe/pipe-error';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { CadastroModalComponent } from './cadastro-modal/cadastro-modal.component';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MensagensComponent,
    LoaderComponent,
    NaoEncontradoComponent,
    TabelaComponent,
    FloatActionBarComponent,
    LayoutButtonComponent,
    PainelComponent,
    CadastroComponent,
    LayoutInputComponent,
    ConfirmarComponent,
    CadastroModalComponent,

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
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    ErroPipe,
    MatMenuModule,
  ],
  exports: [
    TabelaComponent,
    FloatActionBarComponent,
    LayoutButtonComponent,
    CadastroComponent,
    LayoutInputComponent,
    CadastroModalComponent
  ]
})
export class ComponentsModule { }
