import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SegurancaService } from './seguranca.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private seguranca: SegurancaService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req) {
      return next.handle(req);
    }

    let authRequest: any;

    if (this.seguranca.logado) {
      authRequest = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.seguranca.accessToken}`,
        }
      });

      return next.handle(authRequest);
    }

    return next.handle(req);
  }
}
