package br.com.gilmariosoftware.documentor.usuario;

import br.com.gilmariosoftware.documentor.generic.GenericResponse;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author gilmario
 */
@Getter
@Setter
public class UsuarioResponse extends GenericResponse {

    private Long id;
    private String nome;
    private String email;
    private String username;
}
