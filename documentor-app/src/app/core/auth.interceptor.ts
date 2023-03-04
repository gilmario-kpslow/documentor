import { HttpInterceptor, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
  HttpResponse, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SegurancaService } from './seguranca.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private seguranca: SegurancaService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!req) {
      return next.handle(req);
    }

    let authRequest: any;

    if(this.seguranca.logado ) {
        authRequest = req.clone({
        setHeaders: {
          'Authorization' : `Bearer ${this.seguranca.accessToken}`,
          'EMPRESA' : `${this.seguranca.empresa?.id}`,
          'FILIAL' : `${this.seguranca.filial?.id}`,
        }
      });

      return next.handle(authRequest);
    }

    return next.handle(req);
  }
}
