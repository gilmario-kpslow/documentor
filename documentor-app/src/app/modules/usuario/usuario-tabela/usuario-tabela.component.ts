import { Component, ViewChild } from '@angular/core';
import { ConfiguracaoTabela } from '../../components/tabela/configuracao-tabela';
import { ColunaTabela } from '../../components/tabela/coluna-tabela';
import { UsuarioService } from '../usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TabelaComponent } from '../../components/tabela/tabela.component';

@Component({
  selector: 'app-usuario-tabela',
  templateUrl: './usuario-tabela.component.html',
  styleUrls: ['./usuario-tabela.component.css']
})
export class UsuarioTabelaComponent {

  @ViewChild(TabelaComponent) tabela?: TabelaComponent;

  configuracao: ConfiguracaoTabela = new ConfiguracaoTabela([
    new ColunaTabela('Id', 'id'),
    new ColunaTabela('Nome', 'nome'),
  ]);

  form: FormGroup;
  constructor(private service: UsuarioService, private fb: FormBuilder) {
    this.form = fb.group({
      nome: fb.control('')
    });
  }


  pesquisar(req: any) {

    console.log(req)
    if (!this.tabela) {
      return;
    }
    this.service.consulta({ ...req, ...this.form.value }).subscribe(page => {
      console.log(page);
      this.tabela?.setLista(page);
    });
  }

}
