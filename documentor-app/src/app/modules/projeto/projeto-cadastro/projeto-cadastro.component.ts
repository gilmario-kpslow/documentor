import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjetoService } from '../projeto.service';
import { MensagemService } from '../../components/mensagens/messagem.service';
import { Projeto } from '../projeto';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-projeto-cadastro',
  templateUrl: './projeto-cadastro.component.html',
  styleUrls: ['./projeto-cadastro.component.css']
})
export class ProjetoCadastroComponent {

  form: FormGroup;

  constructor(fb: FormBuilder,
    private service: ProjetoService,
    private notificacao: MensagemService,
    @Inject(MAT_DIALOG_DATA) private data: Projeto,
    private ref: MatDialogRef<any>,
    private router: ActivatedRoute) {
    this.form = fb.group({
      id: fb.nonNullable.control(undefined),
      nome: fb.nonNullable.control('', [Validators.required, Validators.maxLength(30)]),
      descricao: fb.nonNullable.control('', [Validators.required, Validators.maxLength(255)]),
      slug: fb.nonNullable.control('', [Validators.required, Validators.maxLength(10)]),
    })

    if (data) {
      this.form.patchValue({ ...data });
    }
  }

  salvar() {
    this.service.create(this.form.value).subscribe((resp) => {
      this.ref.close(resp)
      this.notificacao.sucesso("Salvo com sucesso!");
    });
  }
}
