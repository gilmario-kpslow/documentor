import { Injectable } from "@angular/core";
import { MenuItem } from "./menu-item";

const MENU: MenuItem[] = [
    {
        nome: 'Administração', icone: '', itens: [
            { nome: 'Usuarios', icone: '', link: '/usuarios' },
        ]
    },
    {
        nome: 'Projetos', icone: '', itens: [
            { nome: 'Home', icone: '', link: '/projetos' },
            { nome: 'Consulta', icone: '', link: '/projetos/consulta' },
            { nome: 'Cadastro', icone: '', link: '/projetos/cadastro' },
        ]
    },
    {
        nome: 'Dicas', icone: '', itens: [
            { nome: 'Home', icone: '', link: '/projetos' },
            { nome: 'Consulta', icone: '', link: '/projetos/consulta' },
            { nome: 'Cadastro', icone: '', link: '/projetos/cadastro' },
        ]
    },

]


@Injectable()
export class MenuService {

    getMenu(): MenuItem[] {
        return MENU;
    }
}