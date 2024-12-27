import { Component, ViewChild } from '@angular/core';
import { TabelaComponent } from '../../components/tabela/tabela.component';
import { ConfiguracaoTabela } from '../../components/tabela/configuracao-tabela';
import { ColunaTabela } from '../../components/tabela/coluna-tabela';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MensagemService } from '../../components/mensagens/messagem.service';
import { Projeto } from '../projeto';
import { ProjetoService } from '../projeto.service';
import { ProjetoCadastroComponent } from '../projeto-cadastro/projeto-cadastro.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projeto-tabela',
  templateUrl: './projeto-tabela.component.html',
  styleUrls: ['./projeto-tabela.component.css']
})
export class ProjetoTabelaComponent {

  @ViewChild(TabelaComponent) tabela?: TabelaComponent;

  configuracao: ConfiguracaoTabela = new ConfiguracaoTabela([
    new ColunaTabela('Id', 'id', ['w-100px']),
    new ColunaTabela('Nome', 'nome'),

  ]);

  form: FormGroup;
  constructor(
    private service: ProjetoService,
    fb: FormBuilder,
    private router: Router,
    private matDialog: MatDialog,
    private mensagem: MensagemService) {
    this.form = fb.group({
      nome: fb.control('')
    });
  }


  pesquisar(req: any) {
    if (!this.tabela) {
      return;
    }
    this.service.consulta({ ...req, ...this.form.value }).subscribe(page => {
      this.tabela?.setLista(page);
    });
  }

  limpar() {
    this.form.patchValue({ nome: '' });
  }

  novo() {
    this.matDialog.open(ProjetoCadastroComponent).afterClosed().subscribe(resp => {
      if (resp) {
        this.tabela?.pesquisar();
      }
    });
  }

  editar(entity: Projeto) {
    this.matDialog.open(ProjetoCadastroComponent, { data: entity }).afterClosed().subscribe(resp => {
      if (resp) {
        this.tabela?.pesquisar();
      }
    });
  }



  deletar(entity: Projeto) {
    this.service.delete(entity.id).subscribe(() => {
      this.mensagem.sucesso("Registro excluído com sucesso!");
      this.tabela?.pesquisar();
    })
  }
}
