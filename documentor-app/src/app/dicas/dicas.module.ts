import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DicasRoutingModule } from './dicas-routing.module';
import { DicasListComponent } from './dicas-list/dicas-list.component';


@NgModule({
  declarations: [
    DicasListComponent
  ],
  imports: [
    CommonModule,
    DicasRoutingModule
  ]
})
export class DicasModule { }
