import { Component, ViewChild } from '@angular/core';
import { ConfiguracaoTabela } from '../../components/tabela/configuracao-tabela';
import { ColunaTabela } from '../../components/tabela/coluna-tabela';
import { UsuarioService } from '../usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TabelaComponent } from '../../components/tabela/tabela.component';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { MensagemService } from '../../components/mensagens/messagem.service';
import { EDICAO, NOVO, USUARIOS } from 'src/app/core/menu/menu-const';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioCadastroComponent } from '../usuario-cadastro/usuario-cadastro.component';

@Component({
  selector: 'app-usuario-tabela',
  templateUrl: './usuario-tabela.component.html',
  styleUrls: ['./usuario-tabela.component.css']
})
export class UsuarioTabelaComponent {

  @ViewChild(TabelaComponent) tabela?: TabelaComponent;

  configuracao: ConfiguracaoTabela = new ConfiguracaoTabela([
    new ColunaTabela('Id', 'id', ['w-100px']),
    new ColunaTabela('Nome', 'nome'),
    new ColunaTabela('Email', 'email'),

  ]);

  form: FormGroup;
  constructor(
    private service: UsuarioService,
    private fb: FormBuilder,
    private router: Router,
    private mensagem: MensagemService,
    private matDialog: MatDialog
  ) {
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
    // this.router.navigate(['/', USUARIOS, NOVO]);
    this.matDialog.open(UsuarioCadastroComponent).afterClosed().subscribe(resp => {
      if (resp) {
        this.tabela?.pesquisar();
      }
    });
  }

  editar(usuario: Usuario) {
    // this.router.navigate(['/', USUARIOS, EDICAO, usuario.id]);
    this.matDialog.open(UsuarioCadastroComponent).afterClosed().subscribe(resp => {
      if (resp) {
        this.tabela?.pesquisar();
      }
    });

  }

  deletar(usuario: Usuario) {
    this.service.delete(usuario.id).subscribe(() => {
      this.mensagem.sucesso("Registro excluído com sucesso!");
      this.tabela?.pesquisar();
    })
  }


}
