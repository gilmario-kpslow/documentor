package br.com.gilmariosoftware.documentor.generic;

import java.util.Objects;
import lombok.Setter;
import org.springframework.data.domain.Sort;

/**
 *
 * @author gilmario
 */
@Setter
public class PageParams {

    private Integer paginaAtual;
    private Integer tamanhoPagina;
    private Sort.Direction direcao;
    private String campoOrdenacao;

    public Integer getPaginaAtual() {
        if (Objects.isNull(paginaAtual)) {
            return 0;
        }
        return paginaAtual;
    }

    public Integer getTamanhoPagina() {
        if (Objects.isNull(tamanhoPagina)) {
            return 100;
        }
        return tamanhoPagina;
    }

    public Sort.Direction getDirecao() {
        if (Objects.isNull(direcao)) {
            return Sort.Direction.ASC;
        }
        return direcao;
    }

    public String getCampoOrdenacao() {
        if (Objects.isNull(campoOrdenacao)) {
            return "id";
        }
        return campoOrdenacao;
    }

}
