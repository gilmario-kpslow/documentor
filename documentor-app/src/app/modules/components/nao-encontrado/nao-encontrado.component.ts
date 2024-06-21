import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nao-encontrado',
  templateUrl: './nao-encontrado.component.html',
  styleUrls: ['./nao-encontrado.component.css']
})
export class NaoEncontradoComponent {

constructor(private router: Router){}

  voltar() {
    this.router.navigate(['/']);
  }
}
