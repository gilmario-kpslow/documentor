import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { MensagemService } from '../../components/mensagens/messagem.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent {

  form: FormGroup;

  constructor(fb: FormBuilder, private service: UsuarioService, private notificacao: MensagemService) {
    this.form = fb.group({
      nome: fb.nonNullable.control('', [Validators.required, Validators.maxLength(100)]),
      email: fb.nonNullable.control('', [Validators.required, Validators.maxLength(100), Validators.email]),
      username: fb.nonNullable.control('', [Validators.required, Validators.maxLength(40)]),
      password: fb.nonNullable.control('', [Validators.required, Validators.maxLength(255)])
    })
  }

  salvar() {
    this.service.create(this.form.value).subscribe((resp) => {
      this.notificacao.sucesso("Salvo com sucesso!");
      this.form.disable();
    });
  }


}
