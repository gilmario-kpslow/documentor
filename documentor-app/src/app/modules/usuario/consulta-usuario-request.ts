import { PageParams } from "src/app/core/page-params";

export interface ConsultaUsuarioRequest extends PageParams {
    nome: string;
}