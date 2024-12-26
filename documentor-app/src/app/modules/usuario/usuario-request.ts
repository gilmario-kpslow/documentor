import { GenericRequest } from "src/app/core/generic-request";

export interface UsuarioRequest extends GenericRequest {
    nome: string;
    email: string;
    username: string;
}