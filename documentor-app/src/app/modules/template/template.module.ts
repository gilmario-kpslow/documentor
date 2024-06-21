import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template/template.component';
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button';
import { ComponentsModule } from '../components/components.module';
import { MenuService } from 'src/app/core/menu/menu.service';


@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    MatMenuModule,
    MatButtonModule,
    ComponentsModule
  ],
  providers: [
    MenuService
  ]
})
export class TemplateModule { }
