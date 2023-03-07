import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

import { SegurancaService } from '../../../core/seguranca.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild(NgForm) form: NgForm | undefined;
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private segurancaService: SegurancaService, private router: Router) { }

  ngOnInit(): void {
    if (this.segurancaService.logado) {
      this.router.navigate(['/admin'])
    }
  }

  matcher = new MyErrorStateMatcher();

  login() {
    this.loginService.login(this.username, this.password).subscribe((res) => {
      this.segurancaService.registrarAutenticacao(res);
      this.router.navigate(['/admin'])
    })
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
