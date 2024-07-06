import { Usuario } from "../usuario/usuario";

export interface Projeto {
  id: number;
  nome: string;
  slug: string;
  criador: Usuario;
  descricao: string;
  dataCadastro: string;
  horaCadastro: string;
  dataAtualizacao: string;
  horaAtualizacao: string;
}
