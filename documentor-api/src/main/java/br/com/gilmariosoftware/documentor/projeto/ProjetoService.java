package br.com.gilmariosoftware.documentor.projeto;

import br.com.gilmariosoftware.documentor.generic.GenericRequest;
import br.com.gilmariosoftware.documentor.generic.ServiceGeneric;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import java.util.Objects;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author gilmario
 */
@RequestScoped
public class ProjetoService extends ServiceGeneric<Projeto, ProjetoResponse> {

    @Inject
    private ProjetoRepository repository;

    @Override
    protected JpaRepository getRepository() {
        return repository;
    }

    @Override
    public Class<Projeto> getClassEntity() {
        return Projeto.class;
    }

    @Override
    public Class<ProjetoResponse> getClassResponse() {
        return ProjetoResponse.class;
    }

    public Page<ProjetoResponse> consultar(ConsultaProjetoRequest page) {
        return toResponse(repository.findByNomeLike(page.getNome() + "%", getPageRequest(page)), getPageRequest(page));
    }

    @Override
    protected <R extends GenericRequest, C extends Class<Projeto>> Projeto toEntity(R request) {
        var p = super.toEntity(request);
        if (Objects.isNull(request.getId())) {
            getUsuarioLogado().ifPresent(u -> p.setCriador(u));
        }
        return p;
    }

}
