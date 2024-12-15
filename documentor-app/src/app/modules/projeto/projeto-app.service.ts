import { Injectable } from "@angular/core";
import { Projeto } from "./projeto";

const PROJETO_CONST = 'projeto_selecionado';

@Injectable({ providedIn: 'any' })
export class ProjetoAppService {

    projeto: Projeto | undefined;

    constructor() {
        this._init();
    }

    private _init() {
        const cache = localStorage.getItem(PROJETO_CONST);
        if (cache) {
            this.projeto = JSON.parse(cache);
        }
    }

    setProjeto(projeto: Projeto) {
        localStorage.setItem(PROJETO_CONST, JSON.stringify(projeto));
    }
}