import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

import { SegurancaService } from '../../../core/seguranca.service';
import { LoginService } from '../login.service';
import { UsuarioService } from '../../usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    private loginService: LoginService,
    private segurancaService: SegurancaService,
    private router: Router,
    private usuarioService: UsuarioService,
    fb: FormBuilder
  ) {

    this.form = fb.group({
      username: fb.nonNullable.control('', [Validators.required]),
      password: fb.nonNullable.control('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    console.log(this.segurancaService.logado, this.segurancaService.usuarioLogado)
    if (this.segurancaService.logado) {
      this.router.navigate(['/'])
    }
  }

  login() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loginService.login(this.form.value).subscribe((res) => {
      this.segurancaService.registrarAutenticacao(res);
      this.setUsuario();
    })
  }

  setUsuario() {
    this.usuarioService.getUsuarioLogado().subscribe(user => {
      this.segurancaService.registrarUsuarioLogado(user);
      this.router.navigate(['']);
    });
  }
}




