import { Injectable, Injector } from '@angular/core';
import { GenericService } from '../../core/generic.service';
import { Usuario } from './usuario';
import { Page } from 'src/app/core/page';

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

  create(request: any) {
    return this.http.post<Usuario>(`${this.url}`, request);
  }

  consulta(request: any) {
    return this.http.post<Page<Usuario>>(`${this.url}/consulta`, request);
  }
}
