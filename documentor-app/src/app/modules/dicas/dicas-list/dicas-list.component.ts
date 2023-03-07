import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

import { DicasService } from '../dicas.service';

@Component({
  selector: 'app-dicas-list',
  templateUrl: './dicas-list.component.html',
  styleUrls: ['./dicas-list.component.css']
})
export class DicasListComponent implements OnInit {

  lista: any[] = [];
  searchInput = new FormControl('');
  constructor(private dicasService: DicasService, private router: Router) { }

  ngOnInit(): void {
    this.dicasService.listar().subscribe(lista => {
      this.lista = lista;
    });

    this.searchInput.valueChanges.pipe(delay(1000)).subscribe((v) => {
      console.log("OK");
    });


  }

  selecionaDica(dica: any) {
    this.router.navigate(['/', dica.id])
  }

}
