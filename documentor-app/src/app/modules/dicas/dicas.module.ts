import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DicasRoutingModule } from './dicas-routing.module';
import { DicasListComponent } from './dicas-list/dicas-list.component';
import { DicaCardComponent } from './dica-card/dica-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DicaPageComponent } from './dica-page/dica-page.component';
import { DicaCreateComponent } from './dica-create/dica-create.component';


@NgModule({
  declarations: [
    DicasListComponent,
    DicaCardComponent,
    DicaPageComponent,
    DicaCreateComponent
  ],
  imports: [
    CommonModule,
    DicasRoutingModule,
    ReactiveFormsModule
  ]
})
export class DicasModule { }
