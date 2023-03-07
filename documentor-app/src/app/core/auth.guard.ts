import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn } from '@angular/router';
// import { SharedService } from '../common/shared.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SegurancaService } from './seguranca.service';

@Injectable()
export class AuthGuard {

  constructor(private router: Router, private seguranca: SegurancaService) { }

  canActivate(): boolean {
    if (this.seguranca.logado) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
