import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-criar-senha',
  templateUrl: './criar-senha.component.html',
  styleUrls: ['./criar-senha.component.css']
})
export class CriarSenhaComponent {

  form: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) private usuario: Usuario,
    private ref: MatDialogRef<any>, fb: FormBuilder, private usuarioService: UsuarioService) {

    this.form = fb.group({
      password: fb.nonNullable.control('', [Validators.required, Validators.maxLength(255)])
    });
  }

  salvar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.usuarioService.createPassword({ password: this.form.get('password')?.value, id: this.usuario.id }).subscribe(() => {
      this.ref.close();
    });
  }
}
