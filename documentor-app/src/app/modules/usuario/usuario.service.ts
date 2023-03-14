import { Injectable, Injector } from '@angular/core';
import { GenericService } from '../../core/generic.service';
import { Usuario } from './usuario';

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
}
