package br.com.gilmariosoftware.documentor.projeto;

import br.com.gilmariosoftware.documentor.generic.PageParams;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author gilmario
 */
@Getter
@Setter
public class ConsultaProjetoRequest extends PageParams {

    private String nome;
}
