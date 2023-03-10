import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { SegurancaService } from './core/seguranca.service';
import { MensagemService } from './modules/components/mensagens/messagem.service';

@Injectable({ providedIn: 'root' })
export class AppErrorHandler extends ErrorHandler {

  constructor(
    private zone: NgZone,
    private injector: Injector) {
    super();
  }

  override handleError(errorResponse: HttpErrorResponse | any) {
    const router = this.injector.get(Router);
    const notificador = this.injector.get(MensagemService);
    const shared = this.injector.get(SegurancaService);
    if (errorResponse instanceof HttpErrorResponse) {
      const message = errorResponse.error ? errorResponse.error : undefined;
      console.log(message);
      this.zone.run(() => {
        switch (errorResponse.status) {
          case 0:
            notificador.error('O Servidor não respondeu. A api parece indisponível no momento.');
            break;
          case 401:
            router.navigate(['/auth/login']);
            notificador.error('Não autorizado', 'Erro', 'Usuário ou senha incorretos');
            shared.logout();
            break;
          case 403:
            notificador.error("Usuário não está autorizado a acessar este recurso.");
            break;
          case 500:
            notificador.error('Erro interno no servidor. Entre em contato com o suporte.');
            break;
          case 503:
            notificador.error('Erro interno no servidor. Entre em contato com o suporte.');
            break;
          default:
            notificador.error('Erro interno por favor, tente novamente mais tarde!');
            break;
        }
      });
    }
    super.handleError(errorResponse);
  }

}
