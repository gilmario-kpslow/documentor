import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';

import { environment } from '../environments/environment';

export class GenericService {

  http: HttpClient;
  url: string;

  constructor(private base: string, protected _injector: Injector) {
    this.http = _injector.get(HttpClient);
    this.url = `${environment.api}/${base}`
  }
}
