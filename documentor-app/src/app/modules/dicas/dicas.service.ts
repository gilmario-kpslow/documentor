import { Injectable, Injector } from '@angular/core';

import { GenericService } from '../../core/generic.service';

@Injectable({
  providedIn: 'root'
})
export class DicasService extends GenericService {

  constructor(private injector: Injector) {
    super('dica', injector);
  }

  listar() {
    return this.http.get<any[]>(this.url);
  }

  salvar(dica: any) {
    return this.http.post<any>(this.url, dica);
  }
}
