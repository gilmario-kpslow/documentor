import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template/template.component';


@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule

  ]
})
export class TemplateModule { }
