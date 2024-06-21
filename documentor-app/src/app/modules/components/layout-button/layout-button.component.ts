import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lbutton',
  templateUrl: './layout-button.component.html',
  styleUrls: ['./layout-button.component.css']
})
export class LayoutButtonComponent {

  @Input() nome = "Botão";
  @Output() clickEvent = new EventEmitter();
  @Input() icone: string | undefined;
  constructor() { }

  acao(event: any) {
    this.clickEvent.emit(event);
  }
}
