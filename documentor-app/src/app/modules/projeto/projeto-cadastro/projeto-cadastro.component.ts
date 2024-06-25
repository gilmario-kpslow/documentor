import { Component, ViewChild } from '@angular/core';
import { TabelaComponent } from '../../components/tabela/tabela.component';
import { ConfiguracaoTabela } from '../../components/tabela/configuracao-tabela';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ColunaTabela } from '../../components/tabela/coluna-tabela';

@Component({
  selector: 'app-projeto-cadastro',
  templateUrl: './projeto-cadastro.component.html',
  styleUrls: ['./projeto-cadastro.component.css']
})
export class ProjetoCadastroComponent {

  @ViewChild(TabelaComponent) tabela?: TabelaComponent;

  configuracao: ConfiguracaoTabela = new ConfiguracaoTabela([
    new ColunaTabela('Id', 'id', ['w-100px']),
    new ColunaTabela('Nome', 'nome'),
    new ColunaTabela('Email', 'email'),
  ]);

  form: FormGroup;
  constructor(fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      nome: fb.control('')
    });
  }


  pesquisar(req: any) {

    console.log("pesquisar", req)
    if (!this.tabela) {
      return;
    }
    // this.service.consulta({ ...req, ...this.form.value }).subscribe(page => {
    //   console.log("pesquisar", page);
    //   this.tabela?.setLista(page);
    // });
  }

  limpar() {
    this.form.patchValue({ nome: '' });
  }

  novo() {
    this.router.navigate(['/', 'usuarios', 'novo']);
  }
}
