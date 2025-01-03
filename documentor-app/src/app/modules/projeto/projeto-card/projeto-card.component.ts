import { Component, Input } from '@angular/core';
import { Projeto } from '../projeto';
import { ProjetoAppService } from '../projeto-app.service';
import { Router } from '@angular/router';
import { EXPLORAR, PROJETOS } from 'src/app/core/menu/menu-const';

@Component({
  selector: 'app-projeto-card',
  templateUrl: './projeto-card.component.html',
  styleUrls: ['./projeto-card.component.css']
})
export class ProjetoCardComponent {

  @Input() projeto?: Projeto;
  constructor(private projetoCache: ProjetoAppService, private router: Router) { }

  selecionar() {
    if (this.projeto) {
      this.projetoCache.setProjeto(this.projeto);
      this.router.navigate(['/', PROJETOS, EXPLORAR, this.projeto.id]);
    }
  }
}
