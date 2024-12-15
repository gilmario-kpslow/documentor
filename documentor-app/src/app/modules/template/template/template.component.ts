import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario/usuario.service';
import { Usuario } from '../../usuario/usuario';
import { SegurancaService } from 'src/app/core/seguranca.service';
import { MENU, MenuService } from 'src/app/core/menu/menu.service';
import { MenuItem } from 'src/app/core/menu/menu-item';
import { AUTH, PERFIL } from 'src/app/core/menu/menu-const';



@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario: Usuario | undefined;

  menus = MENU;
  perfil = `/${PERFIL}`;
  auth = `/${AUTH}`;

  constructor(private service: SegurancaService) {
  }

  ngOnInit(): void {
    this.usuario = this.service.usuarioLogado;
  }

  get isLogado() {
    return this.usuario !== undefined;
  }

}
