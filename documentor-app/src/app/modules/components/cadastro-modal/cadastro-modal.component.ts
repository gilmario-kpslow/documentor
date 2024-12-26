import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastro-modal',
  templateUrl: './cadastro-modal.component.html',
  styleUrls: ['./cadastro-modal.component.css']
})
export class CadastroModalComponent {

  @Output() salvarEvent = new EventEmitter();
  @Output() fecharEvent = new EventEmitter();
  @Input() form: FormGroup | undefined;
  @Input() titulo: string = "Titulo";
  @Input() subtitulo: string | undefined;

  constructor(private ref: MatDialogRef<any>) {
  }

  salvar() {
    if (this.form && this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.salvarEvent.emit();
  }

  fechar() {
    this.ref.close();
    this.fecharEvent.emit();
  }
}
