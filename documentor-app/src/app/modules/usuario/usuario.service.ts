import { Injectable, Injector } from '@angular/core';
import { GenericService } from '../../core/generic.service';
import { Usuario } from './usuario';
import { Page } from 'src/app/core/page';
import { RequestPassword } from './resquest-password';
import { ConsultaUsuarioRequest } from './consulta-usuario-request';
import { UsuarioRequest } from './usuario-request';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericService {

  constructor(private injector: Injector) {
    super('usuario', injector);
  }

  getUsuarioLogado() {
    return this.http.get<Usuario>(`${this.url}/auth/logado`);
  }

  listarTodos() {
    return this.http.get<Usuario[]>(`${this.url}`);
  }

  create(request: UsuarioRequest) {
    return this.http.post<Usuario>(`${this.url}`, request);
  }

  editar(id: number) {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  consulta(request: ConsultaUsuarioRequest) {
    return this.http.post<Page<Usuario>>(`${this.url}/consulta`, request);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  createPassword(request: RequestPassword) {
    return this.http.post(`${this.url}/create-password`, request);
  }
}
