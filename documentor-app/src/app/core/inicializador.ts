import { Observable, tap } from "rxjs";
import { SegurancaService } from "./seguranca.service";
import { UsuarioService } from "../modules/usuario/usuario.service";

export function initializeAppFactory(segurancaService: SegurancaService, usuarioService: UsuarioService): () => Observable<any> {
  return () => usuarioService.getUsuarioLogado().pipe(tap(user => {
    console.log(user)
    console.log("initializeAppFactory")
    segurancaService.registrarUsuarioLogado(user)
  }));
}
