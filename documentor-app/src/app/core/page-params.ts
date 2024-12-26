export interface PageParams {
    paginaAtual: number;
    tamanhoPagina: number;
    direcao: 'ASC' | 'DESC';
    campoOrdenacao: string;
}