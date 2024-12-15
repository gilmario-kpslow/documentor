import { Injectable } from "@angular/core";
import { MenuItem } from "./menu-item";
import { CONSULTA, DICAS, NOVO, PROJETOS, USUARIOS } from "./menu-const";

export const MENU: MenuItem[] = [
    {
        nome: 'Administração', icone: '', itens: [
            { nome: 'Usuarios', icone: '', link: USUARIOS },
            { nome: 'Novo', icone: '', link: `${USUARIOS}/${NOVO}` },
        ]
    },
    {
        nome: 'Projetos', icone: '', itens: [
            { nome: 'Home', icone: '', link: PROJETOS },
            { nome: 'Consulta', icone: '', link: `${PROJETOS}/${CONSULTA}` },
            { nome: 'Novo', icone: '', link: `${PROJETOS}/${NOVO}` },
        ]
    },
    {
        nome: 'Dicas', icone: '', itens: [
            { nome: 'Home', icone: '', link: `${DICAS}` },
            { nome: 'Consulta', icone: '', link: `${DICAS}/${CONSULTA}` },
            { nome: 'Novo', icone: '', link: `${DICAS}/${NOVO}` },
        ]
    },

]


@Injectable()
export class MenuService {

    getMenu(): MenuItem[] {
        return MENU;
    }
}