import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
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
  @ViewChild(NgForm) form: NgForm | undefined;
  username: string = '';
  password: string = '';

  constructor(
    private loginService: LoginService,
    private segurancaService: SegurancaService,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    if (this.segurancaService.logado) {
      this.router.navigate(['/'])
    }
  }

  matcher = new MyErrorStateMatcher();

  login() {
    this.loginService.login(this.username, this.password).subscribe((res) => {
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



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
