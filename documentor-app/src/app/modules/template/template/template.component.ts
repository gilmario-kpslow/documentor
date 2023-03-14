import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario/usuario.service';
import { SegurancaService } from '../../../core/seguranca.service';
import { Usuario } from '../../usuario/usuario';



@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario: Usuario | undefined;
  constructor(private service: UsuarioService) { }


  ngOnInit(): void {
    this.service.getUsuarioLogado().subscribe(l => {
      this.usuario = l;
    })
  }

  get isLogado() {
    return this.usuario !== undefined;
  }


}
