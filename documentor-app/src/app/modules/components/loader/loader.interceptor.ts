import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { LoaderService } from "./loader.session";
import { finalize, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loader: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loader.show();
    return next.handle(req).pipe(finalize(() => this.loader.hide()));
  }

}
