/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.com.gilmariosoftware.documentor.seguranca;

import br.com.gilmariosoftware.documentor.usuario.UsuarioResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 *
 * @author gilmario
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioLogado {

    private UsuarioResponse usuario;
    private String token;

}
