import { ColunaTabela } from "./coluna-tabela";
import { TabelaAcao } from "./tabela-acao";

export class ConfiguracaoTabela {

  constructor(public colunas: ColunaTabela[], public pagesSizes: number[] = [5, 10, 50], public campoOrdenacao?: string, public acoes: TabelaAcao[] = []) { }

  sortActive(): string {
    if (this.campoOrdenacao) {
      return this.campoOrdenacao;
    }
    return this.colunas[0].nome;
  }

  getPageSizeOptions(): number[] {
    return this.pagesSizes;
  }
}
