import { Injectable, Injector } from '@angular/core';
import { GenericService } from '../../core/generic.service';
import { Page } from 'src/app/core/page';
import { Projeto } from './projeto';

@Injectable()
export class ProjetoService extends GenericService {

  constructor(private injector: Injector) {
    super('projeto', injector);
  }

  listarTodos() {
    return this.http.get<Projeto[]>(`${this.url}`);
  }

  create(request: any) {
    return this.http.post<Projeto>(`${this.url}`, request);
  }

  editar(id: number) {
    return this.http.get<Projeto>(`${this.url}/${id}`);
  }

  consulta(request: any) {
    return this.http.post<Page<Projeto>>(`${this.url}/consulta`, request);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
