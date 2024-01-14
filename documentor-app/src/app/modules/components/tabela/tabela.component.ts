import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ColunaTabela } from './coluna-tabela';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator'
import { ConfiguracaoTabela } from './configuracao-tabela';
import { Page } from 'src/app/core/page';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements AfterViewInit, OnInit {

  @Input() configuracao: ConfiguracaoTabela = new ConfiguracaoTabela([]);
  cabecalhos: string[] | undefined;
  lista: any[] = [];
  totalElementos = 0;
  pageSize = 10;
  campoOrdenacao: string = 'id';

  @Input() model: any;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;
  page: number = 0;
  direcao: 'asc' | 'desc' = 'asc';
  @Output() pesquisarEvent = new EventEmitter();

  constructor() {
    this.campoOrdenacao = this.configuracao.campoOrdenacao || 'id';
  }

  ngOnInit(): void {
    this.cabecalhos = this.configuracao?.colunas.map(c => c.campo);


  }

  ngAfterViewInit() {
    if (!this.sort || !this.paginator) {
      return;
    }
    this.sort.sortChange.subscribe(() => {
      if (!this.paginator) {
        return;
      }
      this.paginator.pageIndex = 0;
      this.pesquisar();
    });

    this.paginator.page.subscribe(() => {
      this.pesquisar();
    })

  }

  getValorCampo(coluna: ColunaTabela, elemento: any): string | number {
    return elemento[coluna.campo];
  }

  setLista(page: Page<any>) {
    this.lista = page.content;
    this.page = page.pageIndex;
    this.totalElementos = page.totalElements;
  }

  pesquisar() {
    if (!this.paginator || !this.sort) {
      return;
    }
    return this.pesquisarEvent.emit({
      paginaAtual: this.paginator.pageIndex,
      tamanhoPagina: this.paginator.pageSize,
      direcao: this.sort.direction ? this.sort.direction.toUpperCase() : 'ASC',
      campoOrdenacao: this.sort.active
    });
  }
}




