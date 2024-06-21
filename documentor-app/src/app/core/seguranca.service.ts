import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from '../modules/usuario/usuario';

const TOKEN = 'sistema_token';
const USUARIO = 'sistema_dados_usuario';

@Injectable({ providedIn: 'root' })
export class SegurancaService {

  private _accessToken: string | undefined;
  private _usuarioLogado: Usuario | undefined;
  loginEvent = new EventEmitter();

  constructor() {

    const _existe = localStorage.getItem(TOKEN);
    const _usuarioLogado = localStorage.getItem(USUARIO);

    if (_existe) {
      this._accessToken = _existe;
    }

    if (_usuarioLogado) {
      this._accessToken = _usuarioLogado;
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
    localStorage.removeItem(USUARIO);

    this._accessToken = undefined;
    this._usuarioLogado = undefined;
    this.loginEvent.emit(false);
  }

  get usuarioLogado() {
    return this._usuarioLogado;
  }

  registrarUsuarioLogado(usuario: Usuario) {
    localStorage.setItem(TOKEN, JSON.stringify(usuario));
    this._usuarioLogado = usuario;
  }

}
