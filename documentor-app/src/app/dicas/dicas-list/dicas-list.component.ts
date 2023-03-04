import { Component, OnInit } from '@angular/core';

import { DicasService } from '../dicas.service';

@Component({
  selector: 'app-dicas-list',
  templateUrl: './dicas-list.component.html',
  styleUrls: ['./dicas-list.component.css']
})
export class DicasListComponent implements OnInit {

  lista: any[] = [];
  constructor(private dicasService: DicasService) { }

  ngOnInit(): void {
    this.dicasService.listar().subscribe(lista => {
      this.lista = lista;
    });
  }

}
