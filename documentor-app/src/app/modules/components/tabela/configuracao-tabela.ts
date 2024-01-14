import { ColunaTabela } from "./coluna-tabela";

export class ConfiguracaoTabela {

  constructor(public colunas: ColunaTabela[], public pagesSizes: number[] = [5, 10, 50], public campoOrdenacao?: string) { }

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
