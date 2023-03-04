import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { SharedService } from '../common/shared.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SegurancaService } from './seguranca.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private seguranca: SegurancaService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.seguranca.logado) {
      return true;
    }
    this.router.navigate(['/admin/login']);
    return true;
  }
}
