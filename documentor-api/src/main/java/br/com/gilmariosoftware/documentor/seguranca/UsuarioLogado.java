
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
