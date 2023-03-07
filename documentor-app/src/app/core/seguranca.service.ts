import { EventEmitter, Injectable } from '@angular/core';

const TOKEN = 'sistema_token';

@Injectable({ providedIn: 'root' })
export class SegurancaService {

  private _accessToken: string | undefined;
  private _username: string | undefined;
  loginEvent = new EventEmitter();

  constructor() {
    const _existe = localStorage.getItem(TOKEN);
    if (_existe) {
      this._accessToken = _existe;
    }

  }

  get logado(): boolean {
    return this._accessToken !== undefined && this._accessToken !== null;
  }

  get accessToken() {
    return this._accessToken;
  }

  registrarAutenticacao(response: any) {
    localStorage.setItem(TOKEN, response.token);
    this._accessToken = response.token;
    this.loginEvent.emit(true);
  }

  logout() {
    localStorage.removeItem(TOKEN);
    // localStorage.removeItem(CONFIG);
    this._accessToken = undefined;
    this.loginEvent.emit(false);
  }

}
