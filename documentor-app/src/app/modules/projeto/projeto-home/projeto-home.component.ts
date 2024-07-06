import { Component, OnInit } from '@angular/core';
import { Projeto } from '../projeto';
import { ProjetoService } from '../projeto.service';

@Component({
  selector: 'app-projeto-home',
  templateUrl: './projeto-home.component.html',
  styleUrls: ['./projeto-home.component.css']
})
export class ProjetoHomeComponent implements OnInit {

  lista: Projeto[] = [];
  constructor(private service: ProjetoService) {
  }

  ngOnInit(): void {
    this.service.listarTodos().subscribe(lista => this.lista = lista);
  }
}
