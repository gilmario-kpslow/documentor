import { Injectable, Injector } from '@angular/core';

import { GenericService } from '../../core/generic.service';


@Injectable()
export class LoginService extends GenericService {

  constructor(private injector: Injector) {
    super('auth', injector);
  }

  login(form: any) {
    return this.http.post(`${this.url}/login`, { ...form });
  }
}
