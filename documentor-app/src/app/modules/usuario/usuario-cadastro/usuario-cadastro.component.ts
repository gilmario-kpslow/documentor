import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { MensagemService } from '../../components/mensagens/messagem.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../usuario';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent {

  form: FormGroup;

  constructor(fb: FormBuilder,
    private service: UsuarioService,
    private notificacao: MensagemService,
    @Inject(MAT_DIALOG_DATA) private data: Usuario,
    private ref: MatDialogRef<any>
  ) {
    this.form = fb.group({
      id: fb.nonNullable.control(undefined),
      nome: fb.nonNullable.control('', [Validators.required, Validators.maxLength(100)]),
      email: fb.nonNullable.control('', [Validators.required, Validators.maxLength(100), Validators.email]),
      username: fb.nonNullable.control('', [Validators.required, Validators.maxLength(40)]),
    })

    if (data) {
      this.form.patchValue(data);
    }
  }

  salvar() {
    this.service.create(this.form.value).subscribe((resp) => {
      this.ref.close(resp)
      this.notificacao.sucesso("Salvo com sucesso!");
    });
  }


}
