package br.com.gilmariosoftware.documentor.dica;

import br.com.gilmariosoftware.documentor.generic.GenericRequest;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author gilmario
 */
@Getter
@Setter
public class DicaRequest extends GenericRequest {

    private String nome;
    private String descricao;
    private String tags;
}
