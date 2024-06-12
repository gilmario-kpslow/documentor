import { Component, Input } from '@angular/core';
import { Projeto } from '../projeto';

@Component({
  selector: 'app-projeto-card',
  templateUrl: './projeto-card.component.html',
  styleUrls: ['./projeto-card.component.css']
})
export class ProjetoCardComponent {

  @Input() projeto?: Projeto;


  selecionar() {
    console.log('Selecionado')
  }
}
