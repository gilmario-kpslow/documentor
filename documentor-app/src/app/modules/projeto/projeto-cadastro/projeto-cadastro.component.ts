import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjetoService } from '../projeto.service';
import { MensagemService } from '../../components/mensagens/messagem.service';

@Component({
  selector: 'app-projeto-cadastro',
  templateUrl: './projeto-cadastro.component.html',
  styleUrls: ['./projeto-cadastro.component.css']
})
export class ProjetoCadastroComponent {

  form: FormGroup;

  constructor(fb: FormBuilder, private service: ProjetoService, private notificacao: MensagemService, private router: ActivatedRoute) {
    this.form = fb.group({
      id: fb.nonNullable.control(undefined),
      nome: fb.nonNullable.control('', [Validators.required, Validators.maxLength(30)]),
      descricao: fb.nonNullable.control('', [Validators.required, Validators.maxLength(255)]),
      slug: fb.nonNullable.control('', [Validators.required, Validators.maxLength(10)]),
    })
  }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id']
    if (id) {
      this.service.editar(id).subscribe(entity => {
        this.form.patchValue(entity);
      })
    }
  }

  salvar() {
    this.service.create(this.form.value).subscribe((resp) => {
      this.notificacao.sucesso("Salvo com sucesso!");
      this.form.disable();
    });
  }
}
