import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MensagemConfig } from './mensagem-config';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent {

  config: MensagemConfig;
  constructor(@Inject(MAT_DIALOG_DATA) private data: MensagemConfig) {
    this.config = data;
  }


}
