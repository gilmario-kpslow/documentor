import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  @Output() salvarEvent = new EventEmitter();
  @Input() form: FormGroup | undefined;
  @Input() titulo: string = "Titulo";
  @Input() subtitulo: string = "Subtitulo";


  salvar() {
    if (this.form && this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.salvarEvent.emit();
  }

}
