import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dica-card',
  templateUrl: './dica-card.component.html',
  styleUrls: ['./dica-card.component.css']
})
export class DicaCardComponent {

  @Input() dica: any;
  @Output() selecionar = new EventEmitter();

  aoSelecionar() {
    this.selecionar.emit(this.dica);
  }


}
